import { Router } from 'express'
import { streamTts } from '../controllers/ttsController.js'

const router = Router()

router.post('/', streamTts)

export default router
