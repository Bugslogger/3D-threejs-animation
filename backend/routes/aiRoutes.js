import { Router } from 'express'
import { createAiCompletion } from '../controllers/aiController.js'

const router = Router()
router.post('/:mode', createAiCompletion)

export default router
