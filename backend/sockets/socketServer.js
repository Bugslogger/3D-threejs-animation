import { Server } from 'socket.io'
import { runAiPipeline } from '../services/aiService.js'
import { voice } from '../utils/persona.js'

export function createSocketServer(httpServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
      methods: ['GET', 'POST'],
    },
  })

  io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id}`)
    socket.emit('server:ready', { socketId: socket.id, greeting: voice.greeting[0] })

    socket.on('orb:state', (state) => {
      socket.broadcast.emit('orb:state', state)
    })

    socket.on('ai:prompt', async (payload = {}, acknowledge = () => {}) => {
      try {
        const result = await runAiPipeline({
          endpointMode: 'chat',
          messages: payload.messages,
          responseMode: payload.responseMode,
          onDelta: (delta) => socket.emit('ai:delta', { requestId: payload.requestId, delta }),
        })
        socket.emit('ai:response', result)
        acknowledge({ ok: true, result })
      } catch (error) {
        const failure = { error: error.message || 'Unable to reach xAI.', status: error.status || 502 }
        socket.emit('ai:error', failure)
        acknowledge({ ok: false, ...failure })
      }
    })

    socket.on('disconnect', () => {
      console.log(`Socket disconnected: ${socket.id}`)
    })
  })

  return io
}
