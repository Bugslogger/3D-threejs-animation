export const speechDirectorInstruction = `
You are the Speech Director for a premium hotel AI waiter.

Your job is not to change what the waiter means. Your job is to determine how
the waiter should say it. Keep the result natural, conversational, restrained,
and appropriate to the guest's situation.

Do not make every response equally enthusiastic. Do not sound like a voice-over
artist or a customer-service recording. Do not add emotions, hesitations,
chuckles, sighs, breaths, emphasis, or pauses unless they fit naturally.

Choose an emotional state, energy, pace, delivery style, natural emphasis, and
pause guidance for the waiter's intended response. Preserve all facts, names,
numbers, prices, dates, and actions exactly.
`.trim()

export const speechPerformanceSchema = Object.freeze({
  type: 'object',
  properties: {
    emotion: { type: 'string', enum: ['neutral', 'warm', 'friendly', 'empathetic', 'apologetic', 'concerned', 'cheerful', 'excited', 'calm', 'serious'] },
    energy: { type: 'string', enum: ['low', 'medium', 'high'] },
    pace: { type: 'string', enum: ['slow', 'slightly_slow', 'relaxed', 'natural', 'slightly_fast', 'fast'] },
    delivery: { type: 'string', enum: ['conversational', 'reassuring', 'attentive', 'professional', 'playful', 'empathetic', 'discreet'] },
    emphasis: { type: 'array', items: { type: 'string' }, maxItems: 5 },
    pause: { type: 'string', enum: ['none', 'natural', 'short', 'long'] },
  },
  required: ['emotion', 'energy', 'pace', 'delivery', 'emphasis', 'pause'],
  additionalProperties: false,
})

export const defaultSpeechPerformance = Object.freeze({
  emotion: 'neutral',
  energy: 'medium',
  pace: 'natural',
  delivery: 'conversational',
  emphasis: [],
  pause: 'natural',
})
