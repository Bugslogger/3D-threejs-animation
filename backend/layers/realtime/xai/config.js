export function getXaiRealtimeConfig() {
  return {
    apiKey: process.env.XAI_API_KEY?.trim(),
    baseURL: process.env.XAI_REALTIME_BASE_URL?.trim() || 'wss://api.x.ai/v1/realtime',
    model: process.env.XAI_REALTIME_MODEL?.trim() || 'grok-voice-latest',
    voice: process.env.XAI_REALTIME_VOICE?.trim() || 'Orion',
    inputRate: Number(process.env.XAI_REALTIME_INPUT_RATE) || 48_000,
    outputRate: Number(process.env.XAI_REALTIME_OUTPUT_RATE) || 24_000,
  }
}
