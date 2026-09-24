import { buildPersonaPrompt, currentMode, models, modes } from '../utils/persona.js'

function requestError(message, status = 400) {
  const error = new Error(message)
  error.status = status
  return error
}

async function requestCompletion({ model, messages, xaiBaseUrl, xaiApiKey }) {
  const xaiResponse = await fetch(`${xaiBaseUrl}/chat/completions`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${xaiApiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model, messages, reasoning_effort: 'low', temperature: 0, response_format: { type: 'json_object' } }),
  })
  const result = await xaiResponse.json()
  if (!xaiResponse.ok) throw requestError(result.error?.message || result.error || 'xAI request failed.', xaiResponse.status)

  const content = result.choices?.[0]?.message?.content || '{}'
  try {
    return { data: JSON.parse(content), usage: result.usage }
  } catch {
    return { data: { reply: content }, usage: result.usage }
  }
}

export async function runAiPipeline({ endpointMode = 'chat', messages, responseMode = currentMode }) {
  const mode = modes[responseMode]
  const xaiBaseUrl = process.env.XAI_BASE_URL || 'https://api.x.ai/v1'
  const xaiApiKey = process.env.XAI_API_KEY || "4e3df6f1-eb4b-4b62-b6f3-a731d7f8b399"

  if (!models[endpointMode]) throw requestError('Endpoint mode must be "chat" or "affect".')
  if (!mode) throw requestError(`Unknown responseMode. Use one of: ${Object.keys(modes).join(', ')}.`)
  if (!Array.isArray(messages) || messages.length === 0) throw requestError('messages must be a non-empty array.')
  if (!xaiApiKey) throw requestError('XAI_API_KEY is not configured on the server.', 500)

  const conversation = [
    { role: 'system', content: buildPersonaPrompt(responseMode) },
    ...messages.filter(({ role }) => role === 'user' || role === 'assistant'),
  ]
  const useAffectOnly = mode.path === 'affect' || endpointMode === 'affect'
  const firstModel = useAffectOnly ? models.affect : models.chat
  const firstResult = await requestCompletion({ model: firstModel, messages: conversation, xaiBaseUrl, xaiApiKey })

  if (mode.path !== 'chat_then_affect' || useAffectOnly) {
    return { models: [firstModel], responseMode, data: firstResult.data, usage: [firstResult.usage] }
  }

  const draft = firstResult.data.reply || JSON.stringify(firstResult.data)
  const affectResult = await requestCompletion({
    model: models.affect,
    xaiBaseUrl,
    xaiApiKey,
    messages: [
      { role: 'system', content: `${buildPersonaPrompt(responseMode)} Rewrite the draft in that voice. Preserve all facts. Return JSON: {"reply":"..."}.` },
      { role: 'user', content: `Draft to refine:\n${draft}` },
    ],
  })

  return { models: [models.chat, models.affect], responseMode, data: affectResult.data, usage: [firstResult.usage, affectResult.usage] }
}
