import { createElevenLabsProvider } from './elevenlabs/provider.js'

export function createTtsService({ provider = createElevenLabsProvider() } = {}) {
  return {
    async streamSpeech(request = {}) {
      return provider.stream({
        speech: request.speech,
        performance: request.performance,
      })
    },
  }
}
