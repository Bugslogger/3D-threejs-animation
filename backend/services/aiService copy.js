import OpenAI from 'openai'
import { buildPersonaPrompt, currentMode, models, modes } from '../utils/jarvis.config.js'

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

async function requestCompletion({ client, model, messages, onDelta }) {
  const stream = await client.responses.create({
    model,
    input: messages,
    max_output_tokens: 500000,
    reasoning: { effort: 'low' },
    stream: true,
  })

  let reply = ''
  let usage
  for await (const event of stream) {
    if (event.type === 'response.output_text.delta') {
      reply += event.delta
      onDelta?.(event.delta)
    } else if (event.type === 'response.completed') {
      usage = event.response?.usage
      if (!reply) reply = getResponseText(event.response)
    } else if (event.type === 'response.failed') {
      throw requestError(event.response?.error?.message || 'xAI response failed.', 502)
    } else if (event.type === 'error') {
      throw requestError(event.message || 'xAI stream failed.', 502)
    }
  }

  if (!reply) throw requestError('xAI returned no reply text.', 502)
  return { data: { reply }, usage }
}

export async function runAiPipeline({ endpointMode = 'chat', messages, responseMode = currentMode, onDelta }) {
  const mode = modes[responseMode]
  const xaiBaseUrl = process.env.XAI_BASE_URL || 'https://api.x.ai/v1'
  const xaiApiKey = process.env.XAI_API_KEY?.trim()

  if (!models[endpointMode]) throw requestError('Endpoint mode must be "chat" or "affect".')
  if (!mode) throw requestError(`Unknown responseMode. Use one of: ${Object.keys(modes).join(', ')}.`)
  if (!Array.isArray(messages) || messages.length === 0) throw requestError('messages must be a non-empty array.')
  if (!xaiApiKey) throw requestError('XAI_API_KEY is not configured on the server.', 500)
  if (/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i.test(xaiApiKey)) {
    throw requestError('XAI_API_KEY appears to be a key ID. Replace it with the full API key from console.x.ai.', 500)
  }
  const client = new OpenAI({ apiKey: xaiApiKey, baseURL: xaiBaseUrl, timeout: 360000 })

  const conversation = [
    { role: 'system', content: buildPersonaPrompt(responseMode) },
    ...messages.filter(({ role }) => role === 'user' || role === 'assistant'),
  ]
  const useAffectOnly = mode.path === 'affect' || endpointMode === 'affect'
  const firstModel = useAffectOnly ? models.affect : models.chat
  const firstResult = await requestCompletion({
    client,
    model: firstModel,
    messages: conversation,
    onDelta: mode.path === 'chat_then_affect' && !useAffectOnly ? undefined : onDelta,
  })

  if (mode.path !== 'chat_then_affect' || useAffectOnly) {
    return { models: [firstModel], responseMode, data: firstResult.data, usage: [firstResult.usage] }
  }

  const draft = firstResult.data.reply
  const affectResult = await requestCompletion({
    client,
    model: models.affect,
    onDelta,
    messages: [
      { role: 'system', content: `${buildPersonaPrompt(responseMode)} Rewrite the draft in that voice. Preserve all facts. Return only the reply text.` },
      { role: 'user', content: `Draft to refine:\n${draft}` },
    ],
  })

  return { models: [models.chat, models.affect], responseMode, data: affectResult.data, usage: [firstResult.usage, affectResult.usage] }
}
