const socketServerUrl = import.meta.env.VITE_SOCKET_URL || 'https://hologramapi.digimenu.ai'

const config = {
  socketServerUrl,
  ttsUrl: import.meta.env.VITE_TTS_URL || `${socketServerUrl}/api/tts`,
}

export default config
