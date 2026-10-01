import { createElevenLabsProvider } from './elevenlabs/provider.js'
import { getElevenLabsConfig } from './elevenlabs/config.js'

export function createTtsService({ provider, enabled = getElevenLabsConfig().enabled } = {}) {
  return {
    enabled,
    async streamSpeech(request = {}) {
      if (!enabled) return null
      const activeProvider = provider || createElevenLabsProvider()
      return activeProvider.stream({
        speech: request.speech,
        performance: request.performance,
      })
    },
  }
}
