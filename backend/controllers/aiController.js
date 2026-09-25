import { runAiPipeline } from '../services/aiService.js'

export async function createAiCompletion(request, response) {
  try {
    const result = await runAiPipeline({
      endpointMode: request.params.mode,
      messages: request.body.messages,
      responseMode: request.body.responseMode,
    })
    return response.status(200).json(result)
  } catch (error) {
    return response.status(error.status || 502).json({ error: error.message || 'Unable to reach xAI.' })
  }
}
