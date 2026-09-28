import { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'
import config from './config'

const socketServerUrl = config.socketServerUrl
const ttsUrl = config.ttsUrl
const listeningSilenceTimeout = 80000
const visitorStorageKey = 'jarvis-visitor-session'
const audioReadyStorageKey = 'jarvis-audio-ready'

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
  const audioAbortRef = useRef(null)
  const socketRef = useRef(null)
  const activeRequestRef = useRef(null)
  const requestCounterRef = useRef(0)
  const silenceTimerRef = useRef(null)
  const autoListenTimerRef = useRef(null)
  const isListeningRef = useRef(false)
  const isSpeakingRef = useRef(false)
  const userInteractedRef = useRef(false)
  const transcriptUpdateTimerRef = useRef(null)
  const transcriptRef = useRef('')
  const autoListenRef = useRef(true)
  const lastConnectionAnnouncementRef = useRef('')
  const lastSubmittedTranscriptRef = useRef('')
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

  const canAutoplayAudio = () => {
    try {
      return window.localStorage.getItem(audioReadyStorageKey) === 'true'
    } catch {
      return false
    }
  }

  const stopAudio = () => {
    audioAbortRef.current?.abort()
    audioAbortRef.current = null
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.onended = null
      audioRef.current.onerror = null
      audioRef.current = null
    }
    if (audioUrlRef.current) {
      URL.revokeObjectURL(audioUrlRef.current)
      audioUrlRef.current = null
    }
  }

  const speakText = async (text, performance = null) => {
    if (!text || (!userInteractedRef.current && !canAutoplayAudio())) return
    stopListening(false)
    stopAudio()
    const abortController = new AbortController()
    audioAbortRef.current = abortController
    try {
      setError('')
      const response = await fetch(ttsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ speech: text, performance }),
        signal: abortController.signal,
      })
      if (!response.ok) {
        const result = await response.json().catch(() => ({}))
        throw new Error(result.error || `TTS request failed with HTTP ${response.status}.`)
      }

      // The backend proxies ElevenLabs' streaming response. Use MediaSource
      // where available so playback begins with the first audio chunks instead
      // of waiting for the entire MP3 to download.
      const canStream = response.body
        && 'MediaSource' in window
        && MediaSource.isTypeSupported('audio/mpeg')

      if (!canStream) {
        const audioUrl = URL.createObjectURL(await response.blob())
        audioUrlRef.current = audioUrl
        const audio = new Audio(audioUrl)
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
        await audio.play()
        return
      }

      const mediaSource = new MediaSource()
      const audioUrl = URL.createObjectURL(mediaSource)
      audioUrlRef.current = audioUrl
      const audio = new Audio(audioUrl)
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

      await new Promise((resolve, reject) => {
        let sourceBuffer
        let ended = false
        let started = false
        const chunks = []

        const appendNext = () => {
          if (!sourceBuffer || sourceBuffer.updating || chunks.length === 0) {
            if (ended && sourceBuffer && !sourceBuffer.updating && chunks.length === 0 && mediaSource.readyState === 'open') {
              mediaSource.endOfStream()
            }
            return
          }
          sourceBuffer.appendBuffer(chunks.shift())
        }

        const readStream = async () => {
          try {
            const reader = response.body.getReader()
            while (true) {
              const { done, value } = await reader.read()
              if (done) break
              if (value?.byteLength) chunks.push(value)
              appendNext()
            }
            ended = true
            appendNext()
          } catch (error) {
            if (error.name !== 'AbortError') reject(error)
          }
        }

        mediaSource.addEventListener('sourceopen', () => {
          try {
            sourceBuffer = mediaSource.addSourceBuffer('audio/mpeg')
            sourceBuffer.addEventListener('updateend', () => {
              if (!started && audio.readyState >= HTMLMediaElement.HAVE_METADATA) {
                started = true
                audio.play().then(resolve).catch(reject)
              }
              appendNext()
            })
            void readStream()
          } catch (error) {
            reject(error)
          }
        }, { once: true })
      })
    } catch (error) {
      setSpeaking(false)
      if (error.name !== 'AbortError') setError(error.message || 'Voice playback failed.')
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
      if (canAutoplayAudio()) {
        window.setTimeout(() => speakText(greeting), 250)
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
        speakText(message)
      }
    })
    socket.on('ai:delta', ({ requestId, delta }) => {
      if (requestId !== activeRequestRef.current || typeof delta !== 'string') return
      setReply((current) => current.startsWith('Thinking') ? delta : current + delta)
    })

    return () => {
      clearSilenceTimer()
      window.clearTimeout(autoListenTimerRef.current)
      recognitionRef.current?.abort()
      window.clearTimeout(transcriptUpdateTimerRef.current)
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
      messages: [{ role: 'user', content: cleanText }],
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
      const answer = typeof data === 'string' ? data : data.speech || data.reply || JSON.stringify(data)
      setReply(answer)
      void speakText(answer, typeof data === 'string' ? null : data.performance)
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
    lastSubmittedTranscriptRef.current = ''
    window.clearTimeout(transcriptUpdateTimerRef.current)
    setTranscript('')
    setReply('')
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
      window.localStorage.setItem(audioReadyStorageKey, 'true')
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
      {(transcript || reply || error) && (
        <div className="voice-messages">
          {transcript && <p className="transcript">“{transcript}”</p>}
          {reply && <p className="grok-reply">{reply}</p>}
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
