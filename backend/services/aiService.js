import OpenAI from 'openai'
import { aiConfig, getXaiSettings } from '../utils/ai.config.js'
import { compileAffectSystem, compileChatSystem, currentMode, models, modes, persona, resolveResponseMode, traits, voice } from '../utils/odus.config.js'
import { capabilityState, checkAuthority, executeAndVerify, modelIntentAndSituation, perceive, reportOutcome } from './orchestration.js'
import { detectHotelBookingIntent, executeHotelBooking } from './hotelBookingExecutor.js'

const decisionFormat = {
  type: 'json_schema',
  name: 'jarvis_decision',
  strict: true,
  schema: {
    type: 'object',
    properties: {
      reply: { type: 'string' },
      proposedAction: { type: ['string', 'null'] },
      toolCall: {
        anyOf: [
          { type: 'null' },
          {
            type: 'object',
            properties: {
              name: { type: 'string' },
              arguments: { type: 'object', additionalProperties: true },
            },
            required: ['name', 'arguments'],
            additionalProperties: false,
          },
        ],
      },
    },
    required: ['reply', 'proposedAction', 'toolCall'],
    additionalProperties: false,
  },
}

function requestError(message, status = 400) {
  const error = new Error(message)
  error.status = status
  return error
}

function getResponseText(response) {
  return response?.output_text || response?.output
    ?.filter((item) => item.type === 'message')
    .flatMap((item) => item.content || [])
    .filter((item) => item.type === 'output_text')
    .map((item) => item.text)
    .join('') || ''
}

async function requestCompletion({ client, model, input, format, maxOutputTokens = aiConfig.xai.maxOutputTokens }) {
  const stream = await client.responses.create({
    model,
    input,
    max_output_tokens: maxOutputTokens,
    reasoning: { effort: aiConfig.xai.reasoningEffort },
    stream: aiConfig.xai.stream,
    ...(format ? { text: { format } } : {}),
  })
  let reply = ''
  let usage
  for await (const event of stream) {
    if (event.type === 'response.output_text.delta') reply += event.delta || ''
    if (event.type === 'response.completed') {
      usage = event.response?.usage
      if (!reply) reply = getResponseText(event.response)
    }
    if (event.type === 'response.failed') throw requestError(event.response?.error?.message || 'xAI response failed.', 502)
    if (event.type === 'error') throw requestError(event.message || 'xAI stream failed.', 502)
  }
  if (!reply.trim()) throw requestError('xAI returned no reply text.', 502)
  return { reply: reply.trim(), usage }
}

export async function generateGreeting({ recentGreetings = [], timeOfDay = null, isReturning = false } = {}) {
  const { apiKey, baseURL } = getXaiSettings()
  if (!apiKey) throw requestError('XAI_API_KEY is not configured on the server.', 500)
  const client = new OpenAI({ apiKey, baseURL, timeout: aiConfig.greeting.timeoutMs, maxRetries: aiConfig.greeting.maxRetries })
  const recent = recentGreetings.slice(-aiConfig.greeting.recentCount)
  const system = `You are ${persona.name}, a ${persona.identity.voice} AI assistant. Write a warm, natural spoken greeting in ${persona.locale} English, like a thoughtful friend. Address the user as ${persona.addressUserAs}. Keep it to one or two short sentences, at most 30 words. Invite them to speak. Never claim to have seen them, remember personal details, or completed an action. Return only the greeting text, without quotes or formatting.`
  const visitContext = isReturning
    ? 'This device has a valid returning-visitor session. You may say welcome back and ask how they are or what they would like to build today.'
    : `This is the first validated visit from this device. Introduce yourself as ${persona.name}; do not say welcome back.`
  const timeContext = timeOfDay
    ? `The user's local time is ${timeOfDay}. Begin with an appropriate time-of-day salutation. At night, use a welcoming late-evening phrase rather than a "good night" farewell.`
    : 'The user’s local time is unknown. Use a neutral salutation.'
  const periodWords = {
    morning: /\bmorning\b/i,
    afternoon: /\b(?:afternoon|day)\b/i,
    evening: /\bevening\b/i,
    night: /\b(?:evening|late)\b/i,
  }

  for (let attempt = 0; attempt < 2; attempt += 1) {
    const response = await requestCompletion({
      client,
      model: models.affect,
      maxOutputTokens: aiConfig.greeting.maxOutputTokens,
      input: [
        { role: 'system', content: system },
        { role: 'user', content: `${visitContext} ${timeContext} Create a greeting different from these recent greetings: ${JSON.stringify(recent)}${attempt ? ' The previous candidate repeated or was invalid; choose distinctly different wording.' : ''}` },
      ],
    })
    const greeting = response.reply.replace(/^['"“”]+|['"“”]+$/g, '').trim()
    if (greeting.length > 0 && greeting.length <= aiConfig.greeting.maxLength
      && (!periodWords[timeOfDay] || periodWords[timeOfDay].test(greeting))
      && (isReturning || !/\bwelcome back\b/i.test(greeting))
      && !recent.some((previous) => previous.toLowerCase() === greeting.toLowerCase())) {
      return greeting
    }
  }
  throw requestError('The greeting model did not return a new short greeting.', 502)
}

// Only whitespace runs may change, and technical text passes through exactly.
export function preservesContent(draft, candidate) {
  if (/`|https?:\/\/|\b(?:const|let|var|function|import|export)\b/.test(draft)) {
    return draft === candidate
  }
  return draft.replace(/\s+/g, ' ') === candidate.replace(/\s+/g, ' ')
}

function parseReasoning(text) {
  const cleaned = text.replace(/^```(?:json)?\s*|\s*```$/g, '').trim()
  let result
  try {
    result = JSON.parse(cleaned)
  } catch {
    throw requestError('The reasoning model returned an invalid decision format.', 502)
  }
  if (!result || typeof result.reply !== 'string' || !result.reply.trim()
    || !Object.hasOwn(result, 'proposedAction')
    || !Object.hasOwn(result, 'toolCall')
    || (result.proposedAction !== null && typeof result.proposedAction !== 'string')
    || (result.toolCall !== null && (typeof result.toolCall !== 'object' || Array.isArray(result.toolCall)))
    || (result.toolCall !== null && result.proposedAction !== null)) {
    throw requestError('The reasoning model returned an incomplete decision.', 502)
  }
  return {
    reply: result.reply.trim(),
    proposedAction: result.proposedAction?.trim().replace(/\s+/g, ' ').slice(0, 80) || null,
    toolCall: result.toolCall,
  }
}

export async function runAiPipeline({ endpointMode = 'chat', messages, responseMode = currentMode, onDelta, grants = [], trustedContext = {} }) {
  if (!Object.hasOwn(models, endpointMode)) throw requestError('Endpoint mode must be "chat" or "affect".')
  if (responseMode && !Object.hasOwn(modes, responseMode)) throw requestError(`Unknown responseMode. Use one of: ${Object.keys(modes).join(', ')}.`)
  if (!Array.isArray(messages) || messages.at(-1)?.role !== 'user'
    || typeof messages.at(-1).content !== 'string' || !messages.at(-1).content.trim()) {
    throw requestError('messages must end with a non-empty user message.')
  }
  const selectedMode = resolveResponseMode({ requestedMode: responseMode, messages })
  const perception = perceive(messages)
  const hotelIntent = detectHotelBookingIntent(perception.latestUserMessage)
  if (hotelIntent) {
    // A recognised booking request follows the executor's deterministic
    // authority and verification path. No model can authorise the booking.
    const booking = await executeHotelBooking({
      intent: hotelIntent,
      profile: trustedContext.profile,
      provider: trustedContext.hotelProvider,
      userId: trustedContext.userId,
      grants,
    })
    onDelta?.(booking.report)
    return {
      models: [],
      responseMode: selectedMode,
      data: { reply: booking.report },
      authority: {
        ...capabilityState(),
        decision: { status: booking.status, action: 'book_hotel', checkIn: booking.checkIn },
        outcome: { status: booking.status, verified: booking.status === 'verified' },
        executedActions: booking.executedActions,
        verifiedActions: booking.verifiedActions,
      },
      usage: [],
    }
  }
  const { apiKey, baseURL, timeout } = getXaiSettings()
  if (!apiKey) throw requestError('XAI_API_KEY is not configured on the server.', 500)
  if (/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i.test(apiKey)) {
    throw requestError('XAI_API_KEY appears to be a key ID. Use the full API key.', 500)
  }
  const client = new OpenAI({ apiKey, baseURL, timeout })
  const intentAndSituation = modelIntentAndSituation(perception)
  const reasoning = await requestCompletion({
    client,
    model: models.chat,
    format: decisionFormat,
    input: [
      { role: 'system', content: `${compileChatSystem(persona, modes[selectedMode])}
RUNTIME TOOLS: ${JSON.stringify(perception.availableTools)}
Use a registered toolCall for live time or temperature conversion. Do not guess a tool result.
No external action tools, sensors, or emergency contacts are connected. The configured autonomy level is not a grant.
Never claim an external action occurred without a verified tool result.` },
      ...perception.conversation.slice(0, -1),
      { role: 'user', content: `Current request and observed context:\n${JSON.stringify(intentAndSituation)}\n\nUser's latest message:\n${perception.latestUserMessage}` },
    ],
  })
  const decision = parseReasoning(reasoning.reply)
  const authority = checkAuthority(decision.proposedAction, decision.toolCall, grants)
  const toolResults = await executeAndVerify(authority)
  let reply = reportOutcome(decision.reply, authority, toolResults)
  const usedModels = [models.chat]
  const usage = [reasoning.usage]

  // Modes without a presentation pass retain exact output. Discard any
  // affect output that changes more than whitespace.
  if (modes[selectedMode].path === 'chat_then_affect'
    && (authority.status === 'no_action' || toolResults.outcome.verified)) {
    try {
      const affect = await requestCompletion({
        client,
        model: models.affect,
        input: [
          { role: 'system', content: compileAffectSystem(persona, traits, voice, modes[selectedMode]) },
          { role: 'user', content: reply },
        ],
      })
      usedModels.push(models.affect)
      usage.push(affect.usage)
      if (preservesContent(reply, affect.reply)) reply = affect.reply
    } catch (error) {
      console.warn('Affect pass failed; using reasoning draft:', error.message)
    }
  }

  onDelta?.(reply)
  return {
    models: usedModels,
    responseMode: selectedMode,
    data: { reply },
    authority: { ...capabilityState(), decision: authority, ...toolResults },
    usage,
  }
}
