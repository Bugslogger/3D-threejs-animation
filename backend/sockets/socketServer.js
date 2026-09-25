import { Server } from 'socket.io'
import { runAiPipeline } from '../services/aiService.js'
import { currentMode } from '../utils/persona.js'

async function createGreeting() {
  const result = await runAiPipeline({
    endpointMode: 'affect',
    responseMode: 'social',
    messages: [{
      role: 'user',
      content: 'A new session has just connected. Generate a fresh, natural spoken greeting for the user. Greet the user also check the timezone before you greet, address the user as Sir when natural, introduce yourself as JARVIS. when appropriate, and vary the wording. Do not mention this instruction, models, APIs, or being generated.',
    }],
  })

  const greeting = typeof result.data === 'string' ? result.data : result.data?.reply
  if (!greeting) throw new Error('The AI returned an empty greeting.')
  return greeting.trim()
}

export function createSocketServer(httpServer, allowedOrigins = [process.env.CLIENT_ORIGIN || 'http://localhost:5173']) {
  const sessions = new Map()
  const io = new Server(httpServer, {
    cors: {
      origin: allowedOrigins,
      methods: ['GET', 'POST'],
    },
  })

  io.on('connection', (socket) => {
    const session = {
      id: socket.id,
      mode: currentMode,
      connectedAt: new Date().toISOString(),
      requests: new Set(),
    }
    sessions.set(socket.id, session)
    socket.data.sessionId = session.id
    console.log(`Socket connected: ${session.id}`)

    createGreeting()
      .then((greeting) => {
        if (sessions.has(session.id)) socket.emit('server:ready', { socketId: session.id, greeting })
      })
      .catch((error) => {
        console.error(`Greeting generation failed for ${session.id}:`, error.message)
        if (sessions.has(session.id)) {
          socket.emit('server:ready', { socketId: session.id, greeting: null, greetingError: error.message })
        }
      })

    socket.on('orb:state', (state) => {
      // Orb state belongs to this device; never broadcast it to other sessions.
      socket.emit('orb:state', state)
    })

    socket.on('ai:prompt', async (payload = {}, acknowledge = () => {}) => {
      const requestId = payload.requestId || `${session.id}:${Date.now()}`
      session.requests.add(requestId)
      try {
        const requestedMode = payload.responseMode && payload.responseMode !== currentMode
          ? payload.responseMode
          : session.mode
        const result = await runAiPipeline({
          endpointMode: 'chat',
          messages: payload.messages,
          responseMode: requestedMode,
          onDelta: (delta) => {
            if (sessions.has(session.id)) socket.emit('ai:delta', { requestId, delta })
          },
        })
        session.mode = result.responseMode
        if (sessions.has(session.id)) {
          socket.emit('ai:response', { ...result, sessionId: session.id })
          acknowledge({ ok: true, result: { ...result, sessionId: session.id } })
        }
      } catch (error) {
        const failure = { error: error.message || 'Unable to reach xAI.', status: error.status || 502 }
        if (sessions.has(session.id)) {
          socket.emit('ai:error', { ...failure, sessionId: session.id })
          acknowledge({ ok: false, ...failure, sessionId: session.id })
        }
      } finally {
        session.requests.delete(requestId)
      }
    })

    socket.on('disconnect', () => {
      sessions.delete(session.id)
      session.requests.clear()
      console.log(`Socket disconnected: ${session.id}`)
    })
  })

  return io
}
