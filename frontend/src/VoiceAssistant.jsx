import { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'

const socketServerUrl = import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000'

function getPreferredVoice(voices = window.speechSynthesis.getVoices()) {
  return voices.find((voice) => /microsoft david/i.test(voice.name))
    || voices.find((voice) => voice.lang.startsWith('en-GB') && /daniel|george|oliver|male/i.test(voice.name))
    || voices.find((voice) => voice.lang.startsWith('en-GB'))
    || voices.find((voice) => voice.lang.startsWith('en'))
}

export default function VoiceAssistant() {
  const recognitionRef = useRef(null)
  const socketRef = useRef(null)
  const activeRequestRef = useRef(null)
  const requestCounterRef = useRef(0)
  const greetingTimerRef = useRef(null)
  const pendingGreetingRef = useRef(null)
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [reply, setReply] = useState('')
  const [error, setError] = useState('')
  const [voices, setVoices] = useState([])
  const preferredVoice = getPreferredVoice(voices)

  const speakText = (text, voice) => {
    if (!text) return
    const synthesis = window.speechSynthesis
    if (!synthesis) {
      setError('TTS is unavailable in this browser.')
      return
    }

    const selectedVoice = voice || getPreferredVoice()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = selectedVoice?.lang || 'en-US'
    utterance.voice = selectedVoice || null
    utterance.rate = 1
    utterance.pitch = 1
    utterance.volume = 1
    utterance.onerror = (event) => {
      if (event.error !== 'canceled' && event.error !== 'interrupted') {
        setError(`Voice playback failed: ${event.error}`)
      }
    }

    try {
      setError('')
      synthesis.cancel()
      synthesis.resume()
      synthesis.speak(utterance)
    } catch (error) {
      setError(`Voice playback failed: ${error.message}`)
    }
  }

  const playVoicePreview = (voice) => {
    window.clearTimeout(greetingTimerRef.current)
    pendingGreetingRef.current = null
    speakText('Hello Sir. This is a voice preview.', voice)
  }

  useEffect(() => {
    const synthesis = window.speechSynthesis
    const playPendingGreeting = () => {
      const greeting = pendingGreetingRef.current
      if (!greeting) return
      pendingGreetingRef.current = null
      window.clearTimeout(greetingTimerRef.current)
      speakText(greeting)
    }
    const updateVoices = () => {
      const availableVoices = synthesis.getVoices()
      setVoices(availableVoices)
      if (availableVoices.length > 0) playPendingGreeting()
    }
    if (synthesis) {
      updateVoices()
      synthesis.addEventListener('voiceschanged', updateVoices)
    }

    const socket = io(socketServerUrl)
    socketRef.current = socket
    socket.on('server:ready', ({ greeting }) => {
      if (!greeting || !('speechSynthesis' in window)) return
      pendingGreetingRef.current = greeting
      window.clearTimeout(greetingTimerRef.current)
      greetingTimerRef.current = window.setTimeout(playPendingGreeting, synthesis.getVoices().length > 0 ? 250 : 2000)
    })
    socket.on('connect_error', () => setError('Unable to connect to the assistant server.'))
    socket.on('ai:delta', ({ requestId, delta }) => {
      if (requestId !== activeRequestRef.current || typeof delta !== 'string') return
      setReply((current) => current.startsWith('Thinking') ? delta : current + delta)
    })

    return () => {
      recognitionRef.current?.abort()
      window.clearTimeout(greetingTimerRef.current)
      pendingGreetingRef.current = null
      synthesis?.removeEventListener('voiceschanged', updateVoices)
      synthesis?.cancel()
      socket.disconnect()
    }
  }, [])

  const askGrok = (text) => {
    const requestId = ++requestCounterRef.current
    activeRequestRef.current = requestId
    setReply('Thinking…')
    const socket = socketRef.current
    if (!socket?.connected) {
      setReply('')
      setError('Assistant server is not connected.')
      return
    }

    socket.timeout(360000).emit('ai:prompt', {
      requestId,
      responseMode: 'operator',
      messages: [{ role: 'user', content: text }],
    }, (timeoutError, result) => {
      activeRequestRef.current = null
      if (timeoutError) {
        setReply('')
        setError('The assistant request timed out.')
        return
      }
      if (!result?.ok) {
        setReply('')
        setError(result?.error || 'Grok request failed.')
        return
      }
      const data = result.result.data
      const answer = typeof data === 'string' ? data : data.reply || JSON.stringify(data)
      setReply(answer)
      speakText(answer)
    })
  }

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
      setError('Speech recognition is unavailable in this browser. Use Chrome or Edge.')
      return
    }

    setError('')
    setTranscript('')
    setReply('')
    window.speechSynthesis?.cancel()
    const recognition = new SpeechRecognition()
    recognition.lang = 'en-US'
    recognition.interimResults = true
    recognition.continuous = false
    recognition.onstart = () => setIsListening(true)
    recognition.onresult = (event) => {
      const text = Array.from(event.results).map((result) => result[0].transcript).join('')
      setTranscript(text)
      if (event.results[event.results.length - 1].isFinal) askGrok(text.trim())
    }
    recognition.onerror = (event) => setError(`Microphone error: ${event.error}`)
    recognition.onend = () => setIsListening(false)
    recognitionRef.current = recognition
    recognition.start()
  }

  return (
    <section className="voice-assistant" aria-live="polite">
      <button className={`mic-button ${isListening ? 'is-listening' : ''}`} onClick={startListening} aria-label="Speak to Grok">
        <span className="mic-icon" />
      </button>
      <p className="voice-status">{isListening ? 'Listening…' : 'Tap to speak'}</p>
      {'speechSynthesis' in window ? (
        <details className="tts-voices">
          <summary onClick={() => playVoicePreview(getPreferredVoice())}>TTS voices available: {voices.length} · click to hear</summary>
          <p className="tts-default">Default voice: {preferredVoice?.name || 'Browser default'}</p>
          {voices.length > 0 ? (
            <ul>
              {voices.map((voice, index) => (
                <li key={`${voice.voiceURI}-${index}`}>
                  <span>{voice.name} ({voice.lang}){voice === preferredVoice ? ' — app default' : voice.default ? ' — system default' : ''}</span>
                  <button type="button" onClick={() => playVoicePreview(voice)} aria-label={`Play ${voice.name} voice sample`}>Play</button>
                </li>
              ))}
            </ul>
          ) : <p>No voices reported by this browser yet.</p>}
        </details>
      ) : <p className="voice-status">TTS is unavailable in this browser.</p>}
      {transcript && <p className="transcript">“{transcript}”</p>}
      {reply && <p className="grok-reply">{reply}</p>}
      {error && <p className="voice-error">{error}</p>}
    </section>
  )
}
