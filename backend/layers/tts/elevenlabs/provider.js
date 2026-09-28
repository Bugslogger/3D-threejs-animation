import { getElevenLabsConfig } from './config.js'

const paceToSpeed = Object.freeze({
  slow: 0.85,
  slightly_slow: 0.92,
  relaxed: 0.96,
  natural: 1,
  slightly_fast: 1.06,
  fast: 1.12,
})

function voiceSettings(performance = {}) {
  const safePerformance = performance && typeof performance === 'object' ? performance : {}
  const energy = safePerformance.energy || 'medium'
  const emotion = safePerformance.emotion || 'neutral'
  return {
    stability: energy === 'low' ? 0.68 : energy === 'high' ? 0.38 : 0.52,
    similarity_boost: 0.78,
    style: ['excited', 'cheerful', 'empathetic', 'apologetic'].includes(emotion) ? 0.28 : 0.08,
    use_speaker_boost: true,
    speed: paceToSpeed[safePerformance.pace] || 1,
  }
}

export function createElevenLabsProvider({ fetchImpl = fetch, config = getElevenLabsConfig() } = {}) {
  return {
    async stream({ speech, performance } = {}) {
      if (!config.apiKey) throw new Error('ELEVENLABS_API_KEY is not configured.')
      if (!config.voiceId) throw new Error('ELEVENLABS_VOICE_ID is not configured.')
      if (typeof speech !== 'string' || !speech.trim()) throw new Error('Speech text is required.')

      const url = new URL(`/v1/text-to-speech/${encodeURIComponent(config.voiceId)}/stream`, config.baseURL)
      url.searchParams.set('output_format', config.outputFormat)
      const response = await fetchImpl(url, {
        method: 'POST',
        headers: {
          'xi-api-key': config.apiKey,
          Accept: 'audio/mpeg',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: speech,
          model_id: config.modelId,
          voice_settings: voiceSettings(performance),
        }),
        signal: AbortSignal.timeout(config.timeoutMs),
      })
      if (!response.ok) {
        const detail = await response.text().catch(() => '')
        throw new Error(`ElevenLabs returned HTTP ${response.status}${detail ? `: ${detail.slice(0, 180)}` : '.'}`)
      }
      return response
    },
  }
}

export { voiceSettings }
