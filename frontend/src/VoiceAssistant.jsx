import { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'

const socketServerUrl = import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000'
const listeningSilenceTimeout = 80000
const visitorStorageKey = 'jarvis-visitor-session'

function savedVisitorToken() {
  try {
    return window.localStorage.getItem(visitorStorageKey)
  } catch {
    return null
  }
}

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
  const silenceTimerRef = useRef(null)
  const autoListenTimerRef = useRef(null)
  const isListeningRef = useRef(false)
  const isSpeakingRef = useRef(false)
  const transcriptUpdateTimerRef = useRef(null)
  const transcriptRef = useRef('')
  const autoListenRef = useRef(true)
  const streamBufferRef = useRef('')
  const streamQueueRef = useRef([])
  const streamSpeakingRef = useRef(false)
  const streamFinishedRef = useRef(false)
  const streamReceivedRef = useRef(false)
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [reply, setReply] = useState('')
  const [error, setError] = useState('')

  const setSpeaking = (speaking) => {
    isSpeakingRef.current = speaking
    window.dispatchEvent(new CustomEvent('jarvis:speaking', {
      detail: { speaking },
    }))
  }

  const scheduleAutoListening = () => {
    window.clearTimeout(autoListenTimerRef.current)
    clearSilenceTimer()
    if (!autoListenRef.current || isListeningRef.current) return

    autoListenTimerRef.current = window.setTimeout(() => {
      if (!autoListenRef.current || isListeningRef.current) return
      if (window.speechSynthesis?.speaking) {
        scheduleAutoListening()
        return
      }
      // Start a fresh silence window after every completed spoken response.
      clearSilenceTimer()
      startListening(true)
    }, 250)
  }

  const drainStreamSpeech = () => {
    if (streamSpeakingRef.current) return
    const nextChunk = streamQueueRef.current.shift()
    if (!nextChunk) {
      if (streamFinishedRef.current && autoListenRef.current) {
        scheduleAutoListening()
      }
      return
    }

    const utterance = new SpeechSynthesisUtterance(nextChunk)
    const selectedVoice = getPreferredVoice()
    utterance.lang = selectedVoice?.lang || 'en-US'
    utterance.voice = selectedVoice || null
    utterance.rate = 1
    utterance.pitch = 1
    streamSpeakingRef.current = true
    utterance.onstart = () => {
      setSpeaking(true)
      startListening(true, true)
    }
    utterance.onend = () => {
      streamSpeakingRef.current = false
      setSpeaking(false)
      drainStreamSpeech()
    }
    utterance.onerror = () => {
      streamSpeakingRef.current = false
      setSpeaking(false)
      drainStreamSpeech()
    }
    window.speechSynthesis.speak(utterance)
  }

  const queueStreamSpeech = (delta) => {
    streamBufferRef.current += delta
    const sentences = streamBufferRef.current.split(/(?<=[.!?])\s+/)
    streamBufferRef.current = sentences.pop() || ''
    sentences.filter(Boolean).forEach((sentence) => streamQueueRef.current.push(sentence.trim()))

    if (streamBufferRef.current.length > 140) {
      const splitAt = streamBufferRef.current.lastIndexOf(' ')
      if (splitAt > 0) {
        streamQueueRef.current.push(streamBufferRef.current.slice(0, splitAt).trim())
        streamBufferRef.current = streamBufferRef.current.slice(splitAt + 1)
      }
    }
    drainStreamSpeech()
  }

  const finishStreamSpeech = () => {
    streamFinishedRef.current = true
    if (streamBufferRef.current.trim()) {
      streamQueueRef.current.push(streamBufferRef.current.trim())
      streamBufferRef.current = ''
    }
    drainStreamSpeech()
  }

  const speakText = (text) => {
    if (!text) return
    const synthesis = window.speechSynthesis
    if (!synthesis) {
      setError('TTS is unavailable in this browser.')
      return
    }

    const selectedVoice = getPreferredVoice()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = selectedVoice?.lang || 'en-US'
    utterance.voice = selectedVoice || null
    utterance.rate = 1
    utterance.pitch = 1
    utterance.volume = 1
    utterance.onstart = () => {
      setSpeaking(true)
      startListening(true, true)
    }
    utterance.onend = () => {
      setSpeaking(false)
      if (autoListenRef.current) {
        scheduleAutoListening()
      }
    }
    utterance.onerror = (event) => {
      setSpeaking(false)
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

  const clearSilenceTimer = () => {
    window.clearTimeout(silenceTimerRef.current)
  }

  const stopListening = (disableAutoResume = false) => {
    clearSilenceTimer()
    window.clearTimeout(autoListenTimerRef.current)
    if (disableAutoResume) autoListenRef.current = false
    recognitionRef.current?.stop()
    isListeningRef.current = false
    setIsListening(false)
  }

  const armSilenceTimer = (recognition) => {
    clearSilenceTimer()
    silenceTimerRef.current = window.setTimeout(() => {
      autoListenRef.current = false
      recognition.stop()
      isListeningRef.current = false
      setIsListening(false)
    }, listeningSilenceTimeout)
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
      if (availableVoices.length > 0) playPendingGreeting()
    }
    if (synthesis) {
      updateVoices()
      synthesis.addEventListener('voiceschanged', updateVoices)
    }

    const socket = io(socketServerUrl, {
      auth: {
        visitorToken: savedVisitorToken(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
    })
    socketRef.current = socket
    socket.on('visitor:session', ({ visitorToken }) => {
      if (!visitorToken) return
      socket.auth = { ...socket.auth, visitorToken }
      try {
        window.localStorage.setItem(visitorStorageKey, visitorToken)
      } catch {
        // The current connection can still use the session when storage is disabled.
      }
    })
    socket.on('server:ready', ({ greeting, error: greetingError }) => {
      if (greetingError) {
        setError(greetingError)
        return
      }
      if (!greeting) return
      setError('')
      setReply(greeting)
      if (!('speechSynthesis' in window)) return
      pendingGreetingRef.current = greeting
      window.clearTimeout(greetingTimerRef.current)
      greetingTimerRef.current = window.setTimeout(playPendingGreeting, synthesis.getVoices().length > 0 ? 250 : 2000)
    })
    socket.on('connect_error', () => setError('Unable to connect to the assistant server.'))
    socket.on('ai:delta', ({ requestId, delta }) => {
      if (requestId !== activeRequestRef.current || typeof delta !== 'string') return
      streamReceivedRef.current = true
      queueStreamSpeech(delta)
      setReply((current) => current.startsWith('Thinking') ? delta : current + delta)
    })

    return () => {
      clearSilenceTimer()
      window.clearTimeout(autoListenTimerRef.current)
      recognitionRef.current?.abort()
      window.clearTimeout(transcriptUpdateTimerRef.current)
      window.clearTimeout(greetingTimerRef.current)
      pendingGreetingRef.current = null
      synthesis?.removeEventListener('voiceschanged', updateVoices)
      synthesis?.cancel()
      setSpeaking(false)
      socket.disconnect()
    }
  }, [])

  const askGrok = (text) => {
    clearSilenceTimer()
    window.clearTimeout(autoListenTimerRef.current)
    recognitionRef.current?.stop()
    isListeningRef.current = false
    setIsListening(false)
    autoListenRef.current = true
    streamBufferRef.current = ''
    streamQueueRef.current = []
    streamSpeakingRef.current = false
    streamFinishedRef.current = false
    streamReceivedRef.current = false
    window.speechSynthesis?.cancel()
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
      finishStreamSpeech()
      if (!streamReceivedRef.current) speakText(answer)
    })
  }

  const startListening = (automatic = false, interruptionMode = false) => {
    window.clearTimeout(autoListenTimerRef.current)
    if (isListeningRef.current) return
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
      setError('Speech recognition is unavailable in this browser. Use Chrome or Edge.')
      return
    }

    autoListenRef.current = true
    setError('')
    transcriptRef.current = ''
    window.clearTimeout(transcriptUpdateTimerRef.current)
    setTranscript('')
    setReply('')
    if (!interruptionMode) {
      window.speechSynthesis?.cancel()
      setSpeaking(false)
    }
    const recognition = new SpeechRecognition()
    recognition.lang = 'en-US'
    recognition.interimResults = true
    recognition.continuous = true
    recognition.onstart = () => {
      isListeningRef.current = true
      setIsListening(true)
      // Always reset the full idle timeout for this new listening cycle.
      armSilenceTimer(recognition)
    }
    recognition.onresult = (event) => {
      armSilenceTimer(recognition)
      const text = Array.from(event.results).map((result) => result[0].transcript).join('')
      transcriptRef.current = text
      // Interim speech events can fire many times per second. Batch them so
      // recognition stays responsive without re-rendering the whole UI each time.
      if (!transcriptUpdateTimerRef.current) {
        transcriptUpdateTimerRef.current = window.setTimeout(() => {
          setTranscript(transcriptRef.current)
          transcriptUpdateTimerRef.current = null
        }, 50)
      }
      if (isSpeakingRef.current && text.trim()) {
        // User interruption: stop Jarvis immediately and keep this recognition
        // session alive until the user's sentence is final.
        window.speechSynthesis?.cancel()
        setSpeaking(false)
      }
      if (event.results[event.results.length - 1].isFinal) askGrok(text.trim())
    }
    recognition.onerror = (event) => {
      clearSilenceTimer()
      isListeningRef.current = false
      setIsListening(false)
      if (event.error !== 'aborted' && event.error !== 'no-speech') {
        setError(`Microphone error: ${event.error}`)
      }
    }
    recognition.onend = () => {
      clearSilenceTimer()
      isListeningRef.current = false
      setIsListening(false)
    }
    recognitionRef.current = recognition
    try {
      recognition.start()
      isListeningRef.current = true
    } catch (error) {
      isListeningRef.current = false
      setError(`Microphone error: ${error.message}`)
    }
  }

  return (
    <section className="voice-assistant" aria-live="polite">
      {(transcript || reply || error) && (
        <div className="voice-messages">
          {transcript && <p className="transcript">“{transcript}”</p>}
          {reply && <p className="grok-reply">{reply}</p>}
          {error && <p className="voice-error">{error}</p>}
        </div>
      )}
      <button className={`sound-button ${isListening ? 'is-listening' : ''}`} onClick={() => isListening ? stopListening(true) : startListening(false)} aria-label={isListening ? 'Stop listening' : 'Speak to JARVIS'}>
        <span className="sound-waves" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </span>
      </button>
      <p className="voice-status">{isListening ? 'Listening…' : 'Tap to speak'}</p>
    </section>
  )
}
