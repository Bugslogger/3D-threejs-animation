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
  const audioRef = useRef(null)
  const audioUrlRef = useRef(null)
  const audioStreamRef = useRef(null)
  const peerConnectionRef = useRef(null)
  const localStreamRef = useRef(null)
  const captureContextRef = useRef(null)
  const captureProcessorRef = useRef(null)
  const pcmContextRef = useRef(null)
  const socketRef = useRef(null)
  const activeRequestRef = useRef(null)
  const requestCounterRef = useRef(0)
  const silenceTimerRef = useRef(null)
  const autoListenTimerRef = useRef(null)
  const isListeningRef = useRef(false)
  const isSpeakingRef = useRef(false)
  const userInteractedRef = useRef(false)
  const autoListenRef = useRef(true)
  const autoStartAttemptedRef = useRef(false)
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
    if (pcmContextRef.current) {
      pcmContextRef.current.close().catch(() => {})
      pcmContextRef.current = null
    }
    if (audioRef.current) {
      audioRef.current.pause?.()
      if ('src' in audioRef.current) audioRef.current.src = ''
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

    if (contentType.startsWith('audio/pcm')) {
      const rate = Number(contentType.match(/rate=(\d+)/)?.[1]) || 24_000
      const AudioContextClass = window.AudioContext || window.webkitAudioContext
      if (!AudioContextClass) {
        setError('Audio playback is unavailable in this browser.')
        return
      }
      const context = new AudioContextClass({ sampleRate: rate, latencyHint: 'interactive' })
      void context.resume().catch(() => {})
      stream.pcm = true
      stream.sampleRate = rate
      stream.nextTime = context.currentTime
      stream.activeSources = 0
      stream.audioContext = context
      stream.pcmQueue = []
      stream.pcmBufferedSeconds = 0
      stream.pcmPlaybackStarted = false
      stream.pcmRemainder = new Uint8Array(0)
      pcmContextRef.current = context
      return
    }

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
    const bytes = chunk instanceof ArrayBuffer
      ? new Uint8Array(chunk)
      : new Uint8Array(chunk.buffer, chunk.byteOffset || 0, chunk.byteLength)
    stream.chunks.push(bytes)
    if (stream.pcm) {
      const combined = new Uint8Array(stream.pcmRemainder.length + bytes.byteLength)
      combined.set(stream.pcmRemainder)
      combined.set(bytes, stream.pcmRemainder.length)
      const usableLength = combined.byteLength - (combined.byteLength % 2)
      stream.pcmRemainder = combined.slice(usableLength)
      if (usableLength > 0) {
        const audioBytes = combined.slice(0, usableLength)
        stream.pcmQueue.push(audioBytes)
        stream.pcmBufferedSeconds += audioBytes.byteLength / 2 / stream.sampleRate
      }
      schedulePcmAudio(stream)
      return
    }
    stream.queue.push(bytes)
    appendSocketAudio(stream)
  }

  const schedulePcmAudio = (stream) => {
    if (!stream.pcm || !stream.audioContext) return
    const forceStart = stream.ended
    if (!stream.pcmPlaybackStarted && !forceStart && stream.pcmBufferedSeconds < 0.25) return
    const context = stream.audioContext
    if (!stream.pcmPlaybackStarted) {
      stream.nextTime = Math.max(context.currentTime + 0.05, stream.nextTime)
      stream.pcmPlaybackStarted = true
    }
    while (stream.pcmQueue.length) {
      const bytes = stream.pcmQueue.shift()
      const samples = new Int16Array(bytes.buffer, bytes.byteOffset, bytes.byteLength / 2)
      const buffer = context.createBuffer(1, samples.length, stream.sampleRate)
      const channel = buffer.getChannelData(0)
      for (let index = 0; index < samples.length; index += 1) channel[index] = samples[index] / 32768
      const source = context.createBufferSource()
      source.buffer = buffer
      source.connect(context.destination)
      const startAt = Math.max(context.currentTime, stream.nextTime)
      source.start(startAt)
      stream.nextTime = startAt + buffer.duration
      stream.activeSources += 1
      setSpeaking(true)
      source.onended = () => {
        stream.activeSources -= 1
        if (stream.ended && stream.activeSources <= 0 && stream.pcmQueue.length === 0 && audioStreamRef.current === stream) {
          setSpeaking(false)
          stopAudio()
          if (autoListenRef.current) scheduleAutoListening()
        }
      }
    }
  }

  const finishSocketAudio = (requestId) => {
    const stream = audioStreamRef.current
    if (!stream || stream.requestId !== requestId) return
    stream.ended = true
    if (stream.pcm) {
      schedulePcmAudio(stream)
      if (stream.activeSources <= 0) {
        setSpeaking(false)
        stopAudio()
        if (autoListenRef.current) scheduleAutoListening()
      }
      return
    }
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
    localStreamRef.current?.getTracks().forEach((track) => track.stop())
    localStreamRef.current = null
    captureProcessorRef.current?.disconnect()
    captureProcessorRef.current = null
    if (captureContextRef.current) {
      captureContextRef.current.close().catch(() => {})
      captureContextRef.current = null
    }
    peerConnectionRef.current?.close()
    peerConnectionRef.current = null
    socketRef.current?.emit('realtime:stop')
    isListeningRef.current = false
    setIsListening(false)
  }

  const armSilenceTimer = (recognition) => {
    clearSilenceTimer()
    silenceTimerRef.current = window.setTimeout(() => {
      autoListenRef.current = false
      recognition.stop?.()
      isListeningRef.current = false
      setIsListening(false)
    }, listeningSilenceTimeout)
  }

  useEffect(() => {
    const unlockAudio = () => {
      if (pcmContextRef.current?.state === 'suspended') {
        void pcmContextRef.current.resume().catch(() => {})
      }
    }
    window.addEventListener('pointerdown', unlockAudio)
    window.addEventListener('touchstart', unlockAudio)
    window.addEventListener('keydown', unlockAudio)
    const socket = io(socketServerUrl, {
      transports: ['websocket'],
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
      if (!autoStartAttemptedRef.current) {
        autoStartAttemptedRef.current = true
        window.setTimeout(() => startListening(true), 0)
      }
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
    socket.on('stt:committed', ({ text }) => {
      if (typeof text === 'string' && text.trim()) {
        // Stop the microphone while the assistant speaks so its own voice is
        // not sent back into STT. It is restarted after playback ends.
        stopListening(false)
        askGrok(text)
      }
    })

    return () => {
      clearSilenceTimer()
      window.clearTimeout(autoListenTimerRef.current)
      stopAudio()
      setSpeaking(false)
      window.removeEventListener('pointerdown', unlockAudio)
      window.removeEventListener('touchstart', unlockAudio)
      window.removeEventListener('keydown', unlockAudio)
      socket.disconnect()
    }
  }, [])

  const askGrok = (text) => {
    const cleanText = text?.trim()
    if (!cleanText) return
    if (activeRequestRef.current !== null) return
    clearSilenceTimer()
    window.clearTimeout(autoListenTimerRef.current)
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

  const startSocketListening = async (interruptionMode = false) => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setError('Microphone audio is unavailable in this browser.')
      return
    }
    if (!socketRef.current?.connected) {
      setError('Assistant server is not connected.')
      return
    }
    try {
      setError('')
      captureProcessorRef.current?.disconnect()
      captureProcessorRef.current = null
      captureContextRef.current?.close().catch(() => {})
      captureContextRef.current = null
      peerConnectionRef.current?.close()
      localStreamRef.current?.getTracks().forEach((track) => track.stop())
      peerConnectionRef.current = null
      localStreamRef.current = null
      if (!interruptionMode) {
        stopAudio()
        setSpeaking(false)
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true, autoGainControl: true },
      })
      localStreamRef.current = stream
      const socket = socketRef.current
      const AudioContextClass = window.AudioContext || window.webkitAudioContext
      if (!AudioContextClass) throw new Error('Audio capture is unavailable in this browser.')
      const context = new AudioContextClass({ sampleRate: 48_000 })
      const source = context.createMediaStreamSource(stream)
      const processor = context.createScriptProcessor(4096, 1, 1)
      const silentGain = context.createGain()
      silentGain.gain.value = 0
      processor.onaudioprocess = (event) => {
        if (!socket.connected || !isListeningRef.current) return
        const input = event.inputBuffer.getChannelData(0)
        const pcm = new Int16Array(input.length)
        for (let index = 0; index < input.length; index += 1) {
          const sample = Math.max(-1, Math.min(1, input[index]))
          pcm[index] = sample < 0 ? sample * 32768 : sample * 32767
        }
        socket.emit('audio:chunk', pcm.buffer)
      }
      source.connect(processor)
      processor.connect(silentGain)
      silentGain.connect(context.destination)
      captureContextRef.current = context
      captureProcessorRef.current = processor
      await new Promise((resolve, reject) => {
        socket.timeout(10_000).emit('realtime:start', {}, (timeoutError, result) => {
          if (timeoutError) reject(new Error('Realtime voice server timed out.'))
          else if (!result?.ok) reject(new Error(result?.error || 'Unable to start realtime voice.'))
          else resolve()
        })
      })
      await context.resume()
      isListeningRef.current = true
      setIsListening(true)
      armSilenceTimer({ stop: () => stopListening(true) })
    } catch (error) {
      localStreamRef.current?.getTracks().forEach((track) => track.stop())
      localStreamRef.current = null
      captureProcessorRef.current?.disconnect()
      captureProcessorRef.current = null
      captureContextRef.current?.close().catch(() => {})
      captureContextRef.current = null
      setIsListening(false)
      setError(error.message || 'Microphone permission failed.')
    }
  }

  const startListening = (_automatic = false, interruptionMode = false) => {
    void startSocketListening(interruptionMode)
  }

  const handleVoiceButtonClick = () => {
    userInteractedRef.current = true
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
