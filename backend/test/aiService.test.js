import assert from 'node:assert/strict'
import { createServer } from 'node:http'
import { after, before, test } from 'node:test'
import { generateGreeting, runAiPipeline, preservesContent } from '../services/aiService.js'
import { resolveResponseMode } from '../utils/jarvis.config.js'
import { capabilityState, checkAuthority, executeAndVerify, modelIntentAndSituation, perceive } from '../services/orchestration.js'
import { authorizeToolCall, executeTool, listTools } from '../services/toolSystem.js'

let server
let baseURL
let replies
const requestedModels = []
const requestedBodies = []

before(async () => {
  server = createServer(async (request, response) => {
    const chunks = []
    for await (const chunk of request) chunks.push(chunk)
    const body = JSON.parse(Buffer.concat(chunks).toString())
    requestedModels.push(body.model)
    requestedBodies.push(body)
    const reply = replies.shift()
    response.writeHead(200, { 'content-type': 'text/event-stream' })
    response.write(`data: ${JSON.stringify({ type: 'response.output_text.delta', delta: reply })}\n\n`)
    response.end(`data: ${JSON.stringify({ type: 'response.completed', response: { output_text: reply, usage: { output_tokens: 2 } } })}\n\n`)
  })
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
  baseURL = `http://127.0.0.1:${server.address().port}/v1`
  process.env.XAI_API_KEY = 'test-key'
  process.env.XAI_BASE_URL = baseURL
})

after(async () => {
  await new Promise((resolve) => server.close(resolve))
  delete process.env.XAI_API_KEY
  delete process.env.XAI_BASE_URL
})

test('affect may change spacing but cannot change facts or URL punctuation', () => {
  assert.equal(preservesContent('Route B takes 25 minutes.', 'Route B\n\ntakes 25 minutes.'), true)
  assert.equal(preservesContent('Route B takes 25 minutes.', 'Route B takes 20 minutes.'), false)
  assert.equal(preservesContent('https://example.com/a?b=1', 'https://example.com/a?b=2'), false)
  assert.equal(preservesContent('Do not go', 'Donot go'), false)
  assert.equal(preservesContent('const x = 1;', 'const\nx = 1;'), false)
})

test('explicit mode instruction overrides the session mode', () => {
  assert.equal(resolveResponseMode({ requestedMode: 'operator', messages: [{ role: 'user', content: 'Use raw mode for this code.' }] }), 'raw')
})

test('perception lists real tools without claiming external observations or action grants', () => {
  const perception = perceive([{ role: 'user', content: 'Take me to the airport' }])
  const state = modelIntentAndSituation(perception)
  assert.equal(state.intent.literalRequest, 'Take me to the airport')
  assert.equal(state.situation.externalDataAvailable, false)
  assert.deepEqual(perception.availableTools.map((tool) => tool.name), ['get_current_time', 'convert_temperature'])
  assert.equal(capabilityState().configuredAutonomyLevel, 3)
  assert.equal(capabilityState().effectiveExternalActionLevel, 0)
  assert.equal(capabilityState().sosConfigured, true)
  assert.equal(capabilityState().sosOperational, false)
})

test('pipeline falls back to reasoning draft when affect changes a fact', async () => {
  replies = [JSON.stringify({ reply: 'Route B takes 25 minutes.', proposedAction: null, toolCall: null }), 'Route B takes 20 minutes.']
  requestedModels.length = 0
  const deltas = []
  const result = await runAiPipeline({
    messages: [{ role: 'user', content: 'How long is route B?' }],
    onDelta: (delta) => deltas.push(delta),
  })
  assert.equal(result.data.reply, 'Route B takes 25 minutes.')
  assert.deepEqual(deltas, ['Route B takes 25 minutes.'])
  assert.deepEqual(requestedModels, ['grok-4.7', 'grok-4-1-fast'])
  assert.equal(requestedBodies.at(-2).text.format.type, 'json_schema')
  assert.deepEqual(requestedBodies.at(-2).text.format.schema.required, ['reply', 'proposedAction', 'toolCall'])
  assert.equal(requestedBodies.at(-1).text, undefined)
  assert.deepEqual(result.authority.executedActions, [])
})

test('raw mode bypasses affect and preserves exact output', async () => {
  replies = [JSON.stringify({ reply: 'const n = 25;', proposedAction: null, toolCall: null })]
  requestedModels.length = 0
  const result = await runAiPipeline({
    responseMode: 'raw',
    messages: [{ role: 'user', content: 'Use raw mode and show code.' }],
  })
  assert.equal(result.data.reply, 'const n = 25;')
  assert.deepEqual(requestedModels, ['grok-4.7'])
})

test('greeting comes from the personality model and avoids recent text', async () => {
  replies = ['Good morning, Sir. What can I help you with?']
  requestedModels.length = 0
  const greeting = await generateGreeting({
    recentGreetings: ['What are we solving today?'],
    isReturning: true,
    timeOfDay: 'morning',
  })
  assert.equal(greeting, 'Good morning, Sir. What can I help you with?')
  assert.deepEqual(requestedModels, ['grok-4-1-fast'])
  assert.equal(requestedBodies.at(-1).max_output_tokens, 96)
  assert.match(requestedBodies.at(-1).input[1].content, /What are we solving today/)
  assert.match(requestedBodies.at(-1).input[1].content, /returning-visitor session/)
  assert.match(requestedBodies.at(-1).input[1].content, /local time is morning/)
})

test('greeting retries a salutation for the wrong local time', async () => {
  replies = ['Good morning, Sir. What shall we build?', 'Good evening, Sir. What shall we build?']
  requestedModels.length = 0
  const greeting = await generateGreeting({ timeOfDay: 'evening', isReturning: true })
  assert.equal(greeting, 'Good evening, Sir. What shall we build?')
  assert.deepEqual(requestedModels, ['grok-4-1-fast', 'grok-4-1-fast'])
})

test('authority gate rejects unavailable actions and tool layer verifies none', async () => {
  replies = [JSON.stringify({ reply: 'I sent the message.', proposedAction: 'send a message', toolCall: null })]
  requestedModels.length = 0
  const result = await runAiPipeline({
    messages: [{ role: 'user', content: 'Send a message to Alex.' }],
  })
  assert.match(result.data.reply, /can't perform send a message/)
  assert.equal(result.authority.decision.status, 'unavailable')
  assert.deepEqual(result.authority.executedActions, [])
  assert.deepEqual(requestedModels, ['grok-4.7'])
  assert.deepEqual((await executeAndVerify(checkAuthority('send a message'))).verifiedActions, [])
})

test('registered time tool executes and reports a verified result', async () => {
  replies = [JSON.stringify({
    reply: 'I will check the time.',
    proposedAction: null,
    toolCall: { name: 'get_current_time', arguments: { timeZone: 'UTC' } },
  })]
  requestedModels.length = 0
  const result = await runAiPipeline({
    responseMode: 'raw',
    messages: [{ role: 'user', content: 'What time is it in UTC? Use raw mode.' }],
  })
  assert.match(result.data.reply, /The current time in UTC is/)
  assert.deepEqual(result.authority.verifiedActions, ['get_current_time'])
  assert.equal(result.authority.outcome.verified, true)
  assert.deepEqual(requestedModels, ['grok-4.7'])
})

test('tool gate rejects invalid arguments and unknown tools', async () => {
  assert.equal(authorizeToolCall({ name: 'convert_temperature', arguments: { value: 'hot', from: 'C', to: 'F' } }).status, 'invalid')
  assert.equal(authorizeToolCall({ name: 'send_message', arguments: {} }).status, 'unavailable')
  const decision = authorizeToolCall({ name: 'convert_temperature', arguments: { value: 100, from: 'C', to: 'F' } })
  const outcome = await executeTool(decision)
  assert.equal(outcome.verified, true)
  assert.equal(outcome.result.value, 212)
  assert.equal(listTools().length, 2)
})

test('hotel booking uses executor state without consulting either model', async () => {
  replies = [JSON.stringify({
    reply: 'I booked your hotel.',
    proposedAction: null,
    toolCall: null,
  })]
  requestedModels.length = 0
  const result = await runAiPipeline({
    messages: [{ role: 'user', content: 'Book me the usual hotel for next Friday.' }],
  })
  assert.equal(result.authority.decision.status, 'needs_profile')
  assert.match(result.data.reply, /I need your usual hotel/)
  assert.deepEqual(result.authority.verifiedActions, [])
  assert.deepEqual(requestedModels, [])
})

test('pipeline reports a hotel booking only after trusted provider verification', async () => {
  replies = [JSON.stringify({
    reply: 'I already booked it.',
    proposedAction: 'book a hotel',
    toolCall: null,
  })]
  requestedModels.length = 0
  let requestedStay
  const tomorrow = new Date(Date.now() + 86_400_000).toISOString()
  const hotelProvider = {
    quote: async (request) => {
      requestedStay = request
      return { quoteId: 'quote-1', ...request, total: 240, currency: 'USD', expiresAt: tomorrow }
    },
    book: async ({ idempotencyKey }) => {
      assert.match(idempotencyKey, /^[0-9a-f]{64}$/)
      return { bookingId: 'booking-1' }
    },
    verify: async () => ({
      bookingId: 'booking-1',
      ...requestedStay,
      total: 240,
      currency: 'USD',
      status: 'confirmed',
    }),
  }
  const result = await runAiPipeline({
    responseMode: 'raw',
    messages: [{ role: 'user', content: 'Book me the usual hotel for next Friday. Use raw mode.' }],
    grants: [{
      tool: 'book_hotel', userId: 'user-1', hotelId: 'hotel-1',
      checkInFrom: '2026-01-01', checkInThrough: '2030-12-31',
      maxNights: 1, maxGuests: 1, maxTotal: 300, currency: 'USD',
      expiresAt: tomorrow,
    }],
    trustedContext: {
      userId: 'user-1',
      profile: {
        usualHotel: { id: 'hotel-1', name: 'The Usual Hotel' },
        timeZone: 'UTC', nights: 1, guests: 1,
      },
      hotelProvider,
    },
  })
  assert.equal(result.authority.decision.status, 'verified')
  assert.deepEqual(result.authority.verifiedActions, ['book_hotel'])
  assert.match(result.data.reply, /Confirmation: booking-1/)
  assert.doesNotMatch(result.data.reply, /I already booked it/)
  assert.deepEqual(requestedModels, [])
})
