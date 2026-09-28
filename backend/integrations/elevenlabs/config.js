const defaultConfig = Object.freeze({
  baseURL: 'https://api.elevenlabs.io',
  modelId: 'eleven_flash_v2_5',
  // Smaller speech audio reaches the browser sooner and is sufficient for
  // conversational playback.
  outputFormat: 'mp3_22050_32',
  timeoutMs: 30_000,
})

export function getElevenLabsConfig() {
  return {
    baseURL: process.env.ELEVENLABS_BASE_URL?.trim() || defaultConfig.baseURL,
    apiKey: process.env.ELEVENLABS_API_KEY?.trim(),
    voiceId: process.env.ELEVENLABS_VOICE_ID?.trim() || 'JBFqnCBsd6RMkjVDRZzb',
    modelId: process.env.ELEVENLABS_MODEL_ID?.trim() || defaultConfig.modelId,
    outputFormat: process.env.ELEVENLABS_OUTPUT_FORMAT?.trim() || defaultConfig.outputFormat,
    timeoutMs: Number(process.env.ELEVENLABS_TIMEOUT_MS) || defaultConfig.timeoutMs,
  }
}

export { defaultConfig as elevenLabsDefaults }
