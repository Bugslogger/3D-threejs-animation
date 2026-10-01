import { Server } from 'socket.io'
import { timingSafeEqual } from 'node:crypto'
import { generateGreeting, runAiPipeline } from '../services/aiService.js'
import { createHotelDelegation } from '../services/hotelDelegation.js'
import { createHotelProvider, hotelProviderConfigured } from '../services/hotelProvider.js'
import { listTools } from '../services/toolSystem.js'
import { localGreetingPeriod, resolveVisitorSession } from '../services/visitorSession.js'
import { aiConfig, getControlToken, getServerSettings } from '../utils/ai.config.js'
import { currentMode } from '../utils/friday.config.js'
import { createXaiRealtimeSession } from '../layers/realtime/xai/session.js'
import { interpretToolResponse, responseText } from '../layers/response/responseInterpreter.js'

function controlTokenMatches(value) {
  const expected = getControlToken()
  if (!expected || typeof value !== 'string') return false
  const providedBytes = Buffer.from(value)
  const expectedBytes = Buffer.from(expected)
  return providedBytes.length === expectedBytes.length
    && timingSafeEqual(providedBytes, expectedBytes)
}

function normalizeAudioChunk(value) {
  if (Buffer.isBuffer(value)) return value
  if (value instanceof ArrayBuffer) return Buffer.from(new Uint8Array(value))
  if (value instanceof Uint8Array) return Buffer.from(value)
  // Socket.IO/JSON transports can represent a serialized Buffer as
  // { type: 'Buffer', data: [...] }.
  if (value && value.type === 'Buffer' && Array.isArray(value.data)) return Buffer.from(value.data)
  if (value && Array.isArray(value.data)) return Buffer.from(value.data)
  return null
}

function toolStatus(session) {
  return {
      builtIn: listTools(),
    hotel: {
      configured: hotelProviderConfigured(),
      connected: Boolean(session.hotelProvider),
      delegated: session.grants.length > 0,
      profile: session.profile,
      grant: session.grants[0] || null,
    },
    unlocked: session.unlocked,
    unlockConfigured: Boolean(getControlToken()),
  }
}

export function createSocketServer(httpServer, allowedOrigins = getServerSettings().allowedOrigins, { greetingGenerator = generateGreeting } = {}) {
  const sessions = new Map()
  const recentGreetings = []
  let greetingQueue = Promise.resolve()
  const nextGreeting = (context) => {
    const task = greetingQueue.then(async () => {
      const greeting = await greetingGenerator({ recentGreetings: [...recentGreetings], ...context })
      if (typeof greeting !== 'string' || !greeting.trim()) throw new Error('Greeting generator returned no text.')
      recentGreetings.push(greeting.trim())
      if (recentGreetings.length > aiConfig.greeting.recentCount) recentGreetings.shift()
      return greeting.trim()
    })
    greetingQueue = task.catch(() => {})
    return task
  }

  const io = new Server(httpServer, {
    cors: {
      origin: allowedOrigins,
      methods: ['GET', 'POST'],
    },
  })

  io.on('connection', (socket) => {
    const visitor = resolveVisitorSession(socket.handshake.auth?.visitorToken)
    const timeOfDay = localGreetingPeriod(socket.handshake.auth?.timeZone)
    const session = {
      id: socket.id,
      visitorId: visitor.visitorId,
      mode: currentMode,
      connectedAt: new Date().toISOString(),
      requests: new Set(),
      history: [],
      unlocked: false,
      hotelProvider: null,
      profile: null,
      grants: [],
      hasPrompted: false,
      realtime: null,
    }
    sessions.set(socket.id, session)
    socket.data.sessionId = session.id
    console.log(`Socket connected: ${session.id}`)

    socket.emit('visitor:session', { visitorToken: visitor.visitorToken, isReturning: visitor.isReturning })
    nextGreeting({ isReturning: visitor.isReturning, timeOfDay }).then((greeting) => {
      if (sessions.has(session.id) && !session.hasPrompted) {
        // Keep the greeting metadata for session compatibility. Playback is
        // delivered separately through the tts:* binary events.
        socket.emit('server:ready', { socketId: session.id, greeting })
      }
    }).catch((error) => {
      console.warn('Greeting generation failed:', error.message)
      if (sessions.has(session.id) && !session.hasPrompted) {
        socket.emit('server:ready', { socketId: session.id, error: 'Greeting unavailable. Check the assistant server configuration.' })
      }
    })
    socket.emit('tools:status', toolStatus(session))

    const startRealtime = () => {
      session.realtime?.close()
      const realtimeRequestId = `realtime:${session.id}`
      session.realtime = createXaiRealtimeSession({
          onAudioStart: () => socket.emit('tts:start', { requestId: realtimeRequestId, contentType: 'audio/pcm;rate=24000' }),
          onAudio: (chunk) => socket.emit('tts:chunk', { requestId: realtimeRequestId, chunk }),
          onAudioEnd: () => socket.emit('tts:end', { requestId: realtimeRequestId }),
          onError: (error) => socket.emit('tts:error', { requestId: realtimeRequestId, error }),
          onFunctionCall: async (event, realtimeSocket) => {
            try {
              const args = typeof event.arguments === 'string'
                ? JSON.parse(event.arguments || '{}')
                : (event.arguments && typeof event.arguments === 'object' ? event.arguments : {})
              const { authorizeToolCall, executeTool } = await import('../services/toolSystem.js')
              const authority = authorizeToolCall({ name: event.name, arguments: args }, session.grants)
              const result = await executeTool(authority)
              const outputText = responseText(interpretToolResponse({
                toolName: event.name,
                toolResult: result,
                authority,
              }))
              realtimeSocket.send({
                type: 'conversation.item.create',
                item: { type: 'function_call_output', call_id: String(event.call_id), output: outputText },
              })
              realtimeSocket.send({ type: 'response.create' })
            } catch (error) {
              socket.emit('tts:error', { requestId: realtimeRequestId, error: error.message })
            }
          },
      })
      return session.realtime
    }

    socket.on('realtime:start', (_payload, acknowledge = () => {}) => {
      try {
        startRealtime()
        acknowledge({ ok: true })
      } catch (error) {
        acknowledge({ ok: false, error: error.message || 'Unable to start realtime voice.' })
      }
    })

    socket.on('audio:chunk', (chunk) => {
      if (!session.realtime) startRealtime()
      const bytes = normalizeAudioChunk(chunk)
      if (bytes?.length) session.realtime?.appendAudio(bytes)
    })

    socket.on('realtime:stop', (_payload, acknowledge = () => {}) => {
      session.realtime?.close()
      session.realtime = null
      acknowledge({ ok: true })
    })

    socket.on('tools:status', (_payload, acknowledge = () => {}) => {
      acknowledge({ ok: true, status: toolStatus(session) })
    })

    socket.on('tools:unlock', ({ token } = {}, acknowledge = () => {}) => {
      if (!controlTokenMatches(token)) {
        acknowledge({ ok: false, error: 'Invalid control token or token not configured.' })
        return
      }
      session.unlocked = true
      socket.emit('tools:status', toolStatus(session))
      acknowledge({ ok: true, status: toolStatus(session) })
    })

    socket.on('tools:connect', async ({ connector } = {}, acknowledge = () => {}) => {
      if (!session.unlocked || connector !== 'hotel') {
        acknowledge({ ok: false, error: 'Unlock tool controls and select a supported connector.' })
        return
      }
      try {
        const provider = createHotelProvider()
        await provider.connect()
        session.hotelProvider = provider
        socket.emit('tools:status', toolStatus(session))
        acknowledge({ ok: true, status: toolStatus(session) })
      } catch (error) {
        acknowledge({ ok: false, error: error.message })
      }
    })

    socket.on('tools:delegateHotel', (payload = {}, acknowledge = () => {}) => {
      if (!session.unlocked || !session.hotelProvider) {
        acknowledge({ ok: false, error: 'Connect the hotel provider first.' })
        return
      }
      try {
        const delegation = createHotelDelegation(payload, session.id)
        session.profile = delegation.profile
        session.grants = [delegation.grant]
        socket.emit('tools:status', toolStatus(session))
        acknowledge({ ok: true, status: toolStatus(session) })
      } catch (error) {
        acknowledge({ ok: false, error: error.message })
      }
    })

    socket.on('tools:disconnect', (_payload, acknowledge = () => {}) => {
      session.hotelProvider = null
      session.profile = null
      session.grants = []
      socket.emit('tools:status', toolStatus(session))
      acknowledge({ ok: true, status: toolStatus(session) })
    })

    socket.on('orb:state', (state) => {
      // Orb state belongs to this device; never broadcast it to other sessions.
      socket.emit('orb:state', state)
    })

    socket.on('ai:prompt', async (payload = {}, acknowledge = () => {}) => {
      session.hasPrompted = true
      const requestId = payload.requestId || `${session.id}:${Date.now()}`
      if (session.requests.size > 0) {
        acknowledge({ ok: false, error: 'Another request is still in progress.', status: 409, sessionId: session.id })
        return
      }
      session.requests.add(requestId)
      try {
        const userMessage = payload.messages?.at(-1)
        if (userMessage?.role !== 'user' || typeof userMessage.content !== 'string' || !userMessage.content.trim()) {
          const error = new Error('A non-empty user message is required.')
          error.status = 400
          throw error
        }
        const requestedMode = payload.responseMode && payload.responseMode !== currentMode
          ? payload.responseMode
          : session.mode
        const result = await runAiPipeline({
          endpointMode: 'chat',
          messages: [...session.history, { role: 'user', content: userMessage.content }],
          responseMode: requestedMode,
          grants: session.grants,
          trustedContext: {
            userId: session.id,
            profile: session.profile,
            hotelProvider: session.hotelProvider,
          },
        })
        session.mode = result.responseMode
        session.history.push(
          { role: 'user', content: userMessage.content },
          { role: 'assistant', content: result.data.reply },
        )
        session.history = session.history.slice(-aiConfig.session.maxHistoryMessages)
        if (sessions.has(session.id)) {
          const socketResult = {
            requestId,
            responseMode: result.responseMode,
            models: result.models,
            authority: result.authority,
            usage: result.usage,
            sessionId: session.id,
          }
          socket.emit('ai:response', socketResult)
          acknowledge({ ok: true, result: socketResult })
        }
      } catch (error) {
        const failure = { error: error.message || 'Unable to reach xAI.', status: error.status || 502 }
        if (sessions.has(session.id)) {
          socket.emit('ai:error', { ...failure, sessionId: session.id })
          socket.emit('tts:error', { requestId, error: failure.error })
          acknowledge({ ok: false, ...failure, sessionId: session.id })
        }
      } finally {
        session.requests.delete(requestId)
      }
    })

    socket.on('disconnect', () => {
      session.realtime?.close()
      sessions.delete(session.id)
      session.requests.clear()
      console.log(`Socket disconnected: ${session.id}`)
    })
  })

  return io
}
