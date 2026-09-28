import { createTtsService } from '../layers/tts/ttsService.js'

const ttsService = createTtsService()

export async function streamTts(request, response) {
  try {
    const audio = await ttsService.streamSpeech(request.body || {})
    response.status(200)
    response.setHeader('Content-Type', audio.headers.get('content-type') || 'audio/mpeg')
    response.setHeader('Cache-Control', 'no-store')
    if (audio.body) {
      for await (const chunk of audio.body) response.write(chunk)
    }
    response.end()
  } catch (error) {
    response.status(502).json({ error: error.message || 'Unable to generate speech.' })
  }
}
