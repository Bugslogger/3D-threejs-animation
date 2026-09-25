import { compileAffectSystem, compileChatSystem, currentMode, models, modes, persona, resolveResponseMode, traits, voice } from '../utils/persona.js'

function requestError(message, status = 400) {
  const error = new Error(message)
  error.status = status
  return error
}

async function requestCompletion({ model, messages, xaiBaseUrl, xaiApiKey, stream = false, onDelta }) {
  const requestBody = {
    model,
    messages,
    reasoning_effort: 'low',
    temperature: 0,
    ...(stream ? { stream: true } : { response_format: { type: 'json_object' } }),
  }
  const request = {
    method: 'POST',
    headers: { Authorization: `Bearer ${xaiApiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody),
  }

  let xaiResponse
  let lastNetworkError
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      xaiResponse = await fetch(`${xaiBaseUrl}/chat/completions`, request)
      break
    } catch (error) {
      lastNetworkError = error
      const causeCode = error.cause?.code
      const retryable = error.message === 'fetch failed'
        || ['ECONNRESET', 'ETIMEDOUT', 'UND_ERR_CONNECT_TIMEOUT', 'SELF_SIGNED_CERT_IN_CHAIN'].includes(causeCode)

      if (!retryable || attempt === 3) {
        throw requestError(
          `Unable to connect to xAI: ${causeCode || error.message}. Check the system CA store or set NODE_EXTRA_CA_CERTS to your trusted CA file.`,
          502,
        )
      }

      await new Promise((resolve) => setTimeout(resolve, attempt * 500))
    }
  }

  if (!xaiResponse && lastNetworkError) {
    throw requestError(`Unable to connect to xAI: ${lastNetworkError.message}`, 502)
  }

  if (!xaiResponse.ok) {
    const errorResult = await xaiResponse.json().catch(() => ({}))
    throw requestError(errorResult.error?.message || errorResult.error || 'xAI request failed.', xaiResponse.status)
  }

  if (stream) {
    const reader = xaiResponse.body?.getReader()
    if (!reader) throw requestError('xAI returned an unreadable stream.', 502)
    const decoder = new TextDecoder()
    let buffer = ''
    let content = ''

    const consume = (line) => {
      if (!line.startsWith('data:')) return
      const data = line.slice(5).trim()
      if (!data || data === '[DONE]') return
      try {
        const delta = JSON.parse(data).choices?.[0]?.delta?.content || ''
        if (delta) {
          content += delta
          onDelta?.(delta)
        }
      } catch {
        // Ignore incomplete SSE frames; the next frame completes them.
      }
    }

    while (true) {
      const { done, value } = await reader.read()
      buffer += decoder.decode(value || new Uint8Array(), { stream: !done })
      const lines = buffer.split(/\r?\n/)
      buffer = lines.pop() || ''
      lines.forEach(consume)
      if (done) break
    }
    consume(buffer)
    return { data: { reply: content }, usage: undefined }
  }

  const result = await xaiResponse.json()

  const content = result.choices?.[0]?.message?.content || '{}'
  try {
    return { data: JSON.parse(content), usage: result.usage }
  } catch {
    return { data: { reply: content }, usage: result.usage }
  }
}

export async function runAiPipeline({ endpointMode = 'chat', messages, responseMode = currentMode, onDelta }) {
  const selectedResponseMode = resolveResponseMode({ requestedMode: responseMode, messages })
  const mode = modes[selectedResponseMode]
  const xaiBaseUrl = process.env.XAI_BASE_URL || 'https://api.x.ai/v1'
  const xaiApiKey = process.env.XAI_API_KEY

  if (!models[endpointMode]) throw requestError('Endpoint mode must be "chat" or "affect".')
  if (!mode) throw requestError(`Unknown responseMode. Use one of: ${Object.keys(modes).join(', ')}.`)
  if (!Array.isArray(messages) || messages.length === 0) throw requestError('messages must be a non-empty array.')
  if (!xaiApiKey) throw requestError('XAI_API_KEY is not configured on the server.', 500)

  const useAffectOnly = mode.path === 'affect' || endpointMode === 'affect'
  const firstSystem = useAffectOnly
    ? `${compileAffectSystem(persona, traits, voice, mode)}\nFor this request, respond directly to the user's message rather than rewriting a separate draft.${onDelta ? ' Return plain reply text for live streaming, not JSON.' : ''}`
    : compileChatSystem(persona, mode)
  const conversation = [
    { role: 'system', content: firstSystem },
    ...messages.filter(({ role }) => role === 'user' || role === 'assistant'),
  ]
  const firstModel = useAffectOnly ? models.affect : models.chat
  const firstResult = await requestCompletion({
    model: firstModel,
    messages: conversation,
    xaiBaseUrl,
    xaiApiKey,
    stream: Boolean(onDelta && useAffectOnly),
    onDelta,
  })

  if (mode.path !== 'chat_then_affect' || useAffectOnly) {
    return { models: [firstModel], responseMode: selectedResponseMode, data: firstResult.data, usage: [firstResult.usage] }
  }

  const draft = firstResult.data.reply || JSON.stringify(firstResult.data)
  const affectResult = await requestCompletion({
    model: models.affect,
    xaiBaseUrl,
    xaiApiKey,
    messages: [
      { role: 'system', content: `${compileAffectSystem(persona, traits, voice, mode)} Preserve every fact from the draft and return only the rewritten reply.` },
      { role: 'user', content: `Draft to refine:\n${draft}` },
    ],
  })

  return { models: [models.chat, models.affect], responseMode: selectedResponseMode, data: affectResult.data, usage: [firstResult.usage, affectResult.usage] }
}
