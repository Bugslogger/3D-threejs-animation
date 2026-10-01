function safeJson(value) {
  try {
    return JSON.stringify(value, null, 2)
  } catch {
    return String(value)
  }
}

function readableValue(value) {
  if (value === null || value === undefined) return ''
  if (typeof value === 'string') return value.trim()
  if (typeof value === 'number' || typeof value === 'boolean') return String(value)
  return safeJson(value)
}

export function interpretToolResponse({ toolName, toolResult, authority } = {}) {
  if (toolResult?.verified) {
    const report = readableValue(toolResult.report)
    if (report) return report
    const verifiedResult = readableValue(toolResult.result)
    if (verifiedResult) return `${toolName || 'Tool'} returned a verified result:\n${verifiedResult}`
  }

  if (toolResult?.error || authority?.reason) {
    return `${toolName || 'Tool'} could not complete: ${toolResult.error || authority.reason}`
  }

  const result = readableValue(toolResult?.result ?? toolResult)
  return result || `${toolName || 'Tool'} returned no usable result.`
}

export function responseText(value, fallback = 'The service returned no usable response.') {
  const text = readableValue(value)
  return text || fallback
}
