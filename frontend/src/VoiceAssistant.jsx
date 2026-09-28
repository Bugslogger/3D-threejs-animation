import { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'
import config from './config'

const socketServerUrl = config.socketServerUrl
const listeningSilenceTimeout = 80000
const visitorStorageKey = 'jarvis-visitor-session'

function isMobileBrowser() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
}

function savedVisitorToken() {
  try {
    return window.localStorage.getItem(visitorStorageKey)
  } catch {
    return null
  }
}

export default function VoiceAssistant() {
  const recognitionRef = useRef(null)
  const audioRef = useRef(null)
  const audioUrlRef = useRef(null)
  const audioStreamRef = useRef(null)
  const socketRef = useRef(null)
  const activeRequestRef = useRef(null)
  const requestCounterRef = useRef(0)
  const silenceTimerRef = useRef(null)
  const autoListenTimerRef = useRef(null)
  const isListeningRef = useRef(false)
  const isSpeakingRef = useRef(false)
  const userInteractedRef = useRef(false)
  const autoListenRef = useRef(true)
  const lastConnectionAnnouncementRef = useRef('')
  const lastSubmittedTranscriptRef = useRef('')
  const [isListening, setIsListening] = useState(false)
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
    if (isMobileBrowser() || !autoListenRef.current || isListeningRef.current) return

    autoListenTimerRef.current = window.setTimeout(() => {
      if (!autoListenRef.current || isListeningRef.current) return
      if (audioRef.current && !audioRef.current.paused) {
        scheduleAutoListening()
        return
      }
      // Start a fresh silence window after every completed spoken response.
      clearSilenceTimer()
      startListening(true)
    }, 250)
  }

  const stopAudio = () => {
    audioStreamRef.current = null
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.src = ''
      audioRef.current.onended = null
      audioRef.current.onerror = null
      audioRef.current = null
    }
    if (audioUrlRef.current) {
      URL.revokeObjectURL(audioUrlRef.current)
      audioUrlRef.current = null
    }
  }

  const startSocketAudio = (requestId, contentType = 'audio/mpeg') => {
    stopAudio()
    const stream = {
      requestId,
      contentType,
      chunks: [],
      queue: [],
      sourceBuffer: null,
      mediaSource: null,
      ended: false,
      started: false,
    }
    audioStreamRef.current = stream
    setError('')

    const audio = new Audio()
    audioRef.current = audio
    audio.onplay = () => setSpeaking(true)
    audio.onended = () => {
      setSpeaking(false)
      stopAudio()
      if (autoListenRef.current) scheduleAutoListening()
    }
    audio.onerror = () => {
      setSpeaking(false)
      stopAudio()
      setError('Voice playback failed.')
    }

    if (!('MediaSource' in window) || !MediaSource.isTypeSupported(contentType)) return

    const mediaSource = new MediaSource()
    stream.mediaSource = mediaSource
    audioUrlRef.current = URL.createObjectURL(mediaSource)
    audio.src = audioUrlRef.current
    mediaSource.addEventListener('sourceopen', () => {
      if (audioStreamRef.current !== stream) return
      try {
        stream.sourceBuffer = mediaSource.addSourceBuffer(contentType)
        stream.sourceBuffer.addEventListener('updateend', () => {
          if (!stream.started) {
            stream.started = true
            audio.play().catch(() => setError('Voice playback failed.'))
          }
          appendSocketAudio(stream)
        })
        appendSocketAudio(stream)
      } catch {
        setError('Voice playback failed.')
      }
    }, { once: true })
  }

  const appendSocketAudio = (stream) => {
    const { sourceBuffer, mediaSource } = stream
    if (!sourceBuffer || sourceBuffer.updating || stream.queue.length === 0) {
      if (stream.ended && sourceBuffer && !sourceBuffer.updating && stream.queue.length === 0 && mediaSource.readyState === 'open') {
        mediaSource.endOfStream()
      }
      return
    }
    sourceBuffer.appendBuffer(stream.queue.shift())
  }

  const receiveSocketAudio = (requestId, chunk) => {
    const stream = audioStreamRef.current
    if (!stream || stream.requestId !== requestId || !chunk) return
    const bytes = chunk instanceof ArrayBuffer ? new Uint8Array(chunk) : new Uint8Array(chunk.buffer || chunk)
    stream.chunks.push(bytes)
    stream.queue.push(bytes)
    appendSocketAudio(stream)
  }

  const finishSocketAudio = (requestId) => {
    const stream = audioStreamRef.current
    if (!stream || stream.requestId !== requestId) return
    stream.ended = true
    if (!stream.mediaSource) {
      const audioUrl = URL.createObjectURL(new Blob(stream.chunks, { type: stream.contentType }))
      audioUrlRef.current = audioUrl
      audioRef.current.src = audioUrl
      audioRef.current.play().catch(() => setError('Voice playback failed.'))
      return
    }
    appendSocketAudio(stream)
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
    socket.on('server:ready', ({ error: greetingError }) => {
      if (greetingError) {
        setError(greetingError)
      }
    })
    socket.on('connect', () => {
      lastConnectionAnnouncementRef.current = ''
    })
    socket.on('connect_error', () => {
      const message = 'Unable to connect to the assistant server. Please check your connection.'
      setError(message)
      if (lastConnectionAnnouncementRef.current !== message) {
        lastConnectionAnnouncementRef.current = message
      }
    })
    socket.on('tts:start', ({ requestId, contentType }) => {
      startSocketAudio(requestId, contentType)
    })
    socket.on('tts:chunk', ({ requestId, chunk }) => {
      receiveSocketAudio(requestId, chunk)
    })
    socket.on('tts:end', ({ requestId }) => {
      finishSocketAudio(requestId)
    })
    socket.on('tts:error', ({ requestId, error: ttsError }) => {
      if (audioStreamRef.current?.requestId === requestId) stopAudio()
      setError(ttsError || 'Voice playback failed.')
    })

    return () => {
      clearSilenceTimer()
      window.clearTimeout(autoListenTimerRef.current)
      recognitionRef.current?.abort()
      stopAudio()
      setSpeaking(false)
      socket.disconnect()
    }
  }, [])

  const askGrok = (text) => {
    const cleanText = text?.trim()
    if (!cleanText) return
    if (activeRequestRef.current !== null) return
    clearSilenceTimer()
    window.clearTimeout(autoListenTimerRef.current)
    recognitionRef.current?.stop()
    isListeningRef.current = false
    setIsListening(false)
    autoListenRef.current = true
    stopAudio()
    const requestId = ++requestCounterRef.current
    activeRequestRef.current = requestId
    const socket = socketRef.current
    if (!socket?.connected) {
      setError('Assistant server is not connected.')
      return
    }

    socket.timeout(360000).emit('ai:prompt', {
      requestId,
      responseMode: 'operator',
      messages: [{ role: 'user', content: cleanText }],
    }, (timeoutError, result) => {
      activeRequestRef.current = null
      if (timeoutError) {
        setError('The assistant request timed out.')
        return
      }
      if (!result?.ok) {
        setError(result?.error || 'Grok request failed.')
        return
      }
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
    lastSubmittedTranscriptRef.current = ''
    if (!interruptionMode) {
      stopAudio()
      setSpeaking(false)
    }
    const recognition = new SpeechRecognition()
    recognition.lang = 'en-US'
    recognition.interimResults = !isMobileBrowser()
    recognition.continuous = !isMobileBrowser()
    recognition.onstart = () => {
      isListeningRef.current = true
      setIsListening(true)
      // Always reset the full idle timeout for this new listening cycle.
      armSilenceTimer(recognition)
    }
    recognition.onresult = (event) => {
      armSilenceTimer(recognition)
      const latestResult = event.results[event.results.length - 1]
      const text = latestResult?.[0]?.transcript?.trim() || ''
      if (isSpeakingRef.current && text.trim()) {
        // User interruption: stop Jarvis immediately and keep this recognition
        // session alive until the user's sentence is final.
        stopAudio()
        setSpeaking(false)
      }
      if (latestResult?.isFinal && text && text !== lastSubmittedTranscriptRef.current) {
        lastSubmittedTranscriptRef.current = text
        askGrok(text)
      }
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

  const handleVoiceButtonClick = () => {
    userInteractedRef.current = true
    try {
    } catch {
      // Voice remains enabled for this page session when storage is unavailable.
    }
    if (isListening) {
      stopListening(true)
    } else {
      startListening(false)
    }
  }

  return (
    <section className="voice-assistant" aria-live="polite">
      {error && (
        <div className="voice-messages">
          {error && <p className="voice-error">{error}</p>}
        </div>
      )}
      <button className={`sound-button ${isListening ? 'is-listening' : ''}`} onClick={handleVoiceButtonClick} aria-label={isListening ? 'Stop listening' : 'Speak to JARVIS'}>
        <span className="sound-waves" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </span>
      </button>
      <p className="voice-status">{isListening ? 'Listening…' : 'Tap to speak'}</p>
    </section>
  )
}
