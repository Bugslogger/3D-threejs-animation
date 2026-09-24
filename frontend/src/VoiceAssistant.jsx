import { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'

const socketServerUrl = import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000'

function getDeepBritishVoice() {
  const voices = window.speechSynthesis.getVoices()
  return voices.find((voice) => voice.lang.startsWith('en-GB') && /daniel|george|oliver|male/i.test(voice.name))
    || voices.find((voice) => voice.lang.startsWith('en-GB'))
    || voices.find((voice) => voice.lang.startsWith('en'))
}

export default function VoiceAssistant() {
  const recognitionRef = useRef(null)
  const socketRef = useRef(null)
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [reply, setReply] = useState('')
  const [error, setError] = useState('')

  const speakGreeting = (greeting) => {
    if (!greeting || !('speechSynthesis' in window)) return
    const utterance = new SpeechSynthesisUtterance(greeting)
    utterance.lang = 'en-GB'
    utterance.voice = getDeepBritishVoice() || null
    utterance.rate = 1
    utterance.pitch = 0.35
    utterance.volume = 1
    window.speechSynthesis.cancel()
    window.speechSynthesis.resume()
    window.speechSynthesis.speak(utterance)
  }

  useEffect(() => {
    const socket = io(socketServerUrl)
    socketRef.current = socket
    socket.on('server:ready', ({ greeting }) => {
      if (!greeting || !('speechSynthesis' in window)) return
      window.setTimeout(() => speakGreeting(greeting), 250)
    })
    socket.on('connect_error', () => setError('Unable to connect to the assistant server.'))

    return () => {
      recognitionRef.current?.abort()
      window.speechSynthesis?.cancel()
      socket.disconnect()
    }
  }, [])

  const askGrok = (text) => {
    setReply('Thinking…')
    const socket = socketRef.current
    if (!socket?.connected) {
      setReply('')
      setError('Assistant server is not connected.')
      return
    }

    socket.timeout(60000).emit('ai:prompt', {
      responseMode: 'operator',
      messages: [{ role: 'user', content: text }],
    }, (timeoutError, result) => {
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
      setReply(typeof data === 'string' ? data : data.reply || JSON.stringify(data))
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
      {transcript && <p className="transcript">“{transcript}”</p>}
      {reply && <p className="grok-reply">{reply}</p>}
      {error && <p className="voice-error">{error}</p>}
    </section>
  )
}
