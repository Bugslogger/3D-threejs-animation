import { useCallback, useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'
import * as Speech from 'expo-speech'
import * as SecureStore from 'expo-secure-store'

// On a physical phone, localhost points to the phone. Use the computer's LAN IP.
const SOCKET_URL = process.env.EXPO_PUBLIC_SOCKET_URL || 'http://192.168.1.7:5000'
const VISITOR_SESSION_KEY = 'jarvis_visitor_session'

function selectDeepMaleVoice(voices) {
  const describe = (voice) => `${voice.name || ''} ${voice.identifier || ''}`
  return voices.find((voice) => /microsoft david/i.test(describe(voice)))
    || voices.find((voice) => /david|davm/i.test(describe(voice)))
    || voices.find((voice) => /male|man|baritone|rjs|tpd|guy/i.test(describe(voice)))
    || voices.find((voice) => /^en(-|_)/i.test(voice.language) && !/female|woman|susan|zira/i.test(describe(voice)))
    || null
}

export default function useJarvisSocket() {
  const socketRef = useRef(null)
  const voiceRef = useRef(null)
  const voiceReadyRef = useRef(Promise.resolve())
  const [speaking, setSpeaking] = useState(false)
  const [greeting, setGreeting] = useState('')
  const [reply, setReply] = useState('')
  const [connected, setConnected] = useState(false)
  const [error, setError] = useState('')

  const speak = useCallback(async (text) => {
    if (!text) return
    await voiceReadyRef.current
    Speech.stop()
    setSpeaking(true)
    const selectedVoice = voiceRef.current
    Speech.speak(text, {
      voice: selectedVoice?.identifier,
      language: selectedVoice?.language || 'en-GB',
      rate: 0.84,
      pitch: 0.48,
      onDone: () => setSpeaking(false),
      onStopped: () => setSpeaking(false),
      onError: () => setSpeaking(false),
    })
  }, [])

  useEffect(() => {
    let disposed = false
    voiceReadyRef.current = Speech.getAvailableVoicesAsync().then((availableVoices) => {
      voiceRef.current = selectDeepMaleVoice(availableVoices)
    }).catch(() => {})

    let timeZone = null
    try { timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone } catch { /* Use a neutral greeting. */ }
    const socket = io(SOCKET_URL, {
      transports: ['websocket'], autoConnect: false, auth: { timeZone },
    })
    socketRef.current = socket
    SecureStore.getItemAsync(VISITOR_SESSION_KEY).catch(() => null).then((visitorToken) => {
      if (disposed) return
      socket.auth = { ...socket.auth, visitorToken }
      socket.connect()
    })
    socket.on('visitor:session', ({ visitorToken }) => {
      if (!visitorToken) return
      socket.auth = { ...socket.auth, visitorToken }
      SecureStore.setItemAsync(VISITOR_SESSION_KEY, visitorToken).catch(() => {})
    })
    socket.on('connect', () => { setConnected(true); setError('') })
    socket.on('disconnect', () => setConnected(false))
    socket.on('connect_error', (connectionError) => {
      setError(`Unable to connect to J.A.R.V.I.S. (${connectionError.message})`)
    })
    socket.on('server:ready', ({ greeting: nextGreeting, error: greetingError }) => {
      if (greetingError) {
        setError(greetingError)
        return
      }
      setError('')
      setGreeting(nextGreeting || '')
      speak(nextGreeting)
    })
    socket.on('ai:response', (result) => {
      const nextReply = typeof result?.data === 'string' ? result.data : result?.data?.reply
      if (nextReply) { setReply(nextReply); speak(nextReply) }
    })
    socket.on('ai:error', ({ error: message }) => setError(message || 'AI request failed.'))

    return () => {
      disposed = true
      Speech.stop()
      socket.disconnect()
    }
  }, [speak])

  const ask = useCallback((text) => {
    if (!text?.trim() || !socketRef.current?.connected) return
    setReply('')
    socketRef.current.emit('ai:prompt', {
      responseMode: 'operator',
      messages: [{ role: 'user', content: text.trim() }],
    })
  }, [])

  return { connected, speaking, greeting, reply, error, ask }
}
