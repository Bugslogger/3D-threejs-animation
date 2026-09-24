import 'dotenv/config'
import { createServer } from 'node:http'
import cors from 'cors'
import express from 'express'
import aiRoutes from './routes/aiRoutes.js'
import healthRoutes from './routes/healthRoutes.js'
import { createSocketServer } from './sockets/socketServer.js'

const app = express()
const port = Number(process.env.PORT) || 5000
const clientOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173'
const httpServer = createServer(app)
const io = createSocketServer(httpServer)

app.use(cors({ origin: clientOrigin }))
app.use(express.json())

app.set('io', io)
app.use('/api', healthRoutes)
app.use('/api/ai', aiRoutes)

app.use((_request, response) => {
  response.status(404).json({ error: 'Route not found' })
})

httpServer.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`)
})
