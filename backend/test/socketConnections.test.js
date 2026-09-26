import assert from 'node:assert/strict'
import { createServer } from 'node:http'
import { once } from 'node:events'
import { test } from 'node:test'
import { io as connectClient } from 'socket.io-client'
import { createSocketServer } from '../sockets/socketServer.js'

function dateAhead(days) {
  return new Date(Date.now() + days * 86_400_000).toISOString()
}

function ack(socket, event, payload) {
  return new Promise((resolve, reject) => {
    socket.timeout(5000).emit(event, payload, (error, response) => {
      if (error) reject(error)
      else resolve(response)
    })
  })
}

test('connection greetings are generated with recent context', { timeout: 10000 }, async () => {
  const appHttp = createServer((_request, response) => response.end('ok'))
  const contexts = []
  const ioServer = createSocketServer(appHttp, undefined, {
    greetingGenerator: async (context) => {
      contexts.push(context)
      return `Generated greeting ${context.recentGreetings.length + 1}`
    },
  })
  await new Promise((resolve) => appHttp.listen(0, '127.0.0.1', resolve))
  const greetings = []
  const visits = []
  let visitorToken = null
  try {
    for (let index = 0; index < 3; index += 1) {
      const client = connectClient(`http://127.0.0.1:${appHttp.address().port}`, {
        transports: ['websocket'], autoConnect: false,
        auth: { visitorToken, timeZone: 'UTC' },
      })
      try {
        const visitorSession = once(client, 'visitor:session')
        const ready = once(client, 'server:ready')
        client.connect()
        const visit = (await visitorSession)[0]
        visits.push(visit.isReturning)
        visitorToken = visit.visitorToken
        greetings.push((await ready)[0].greeting)
      } finally {
        client.disconnect()
      }
    }
    assert.deepEqual(greetings, ['Generated greeting 1', 'Generated greeting 2', 'Generated greeting 3'])
    assert.deepEqual(visits, [false, true, true])
    assert.deepEqual(contexts.map((context) => context.isReturning), visits)
    assert.ok(contexts.every((context) => context.timeOfDay))
  } finally {
    await new Promise((resolve) => ioServer.close(resolve))
  }
})

test('failed greeting generation sends an error without fixed greeting text', { timeout: 10000 }, async () => {
  const appHttp = createServer((_request, response) => response.end('ok'))
  const ioServer = createSocketServer(appHttp, undefined, {
    greetingGenerator: async () => { throw new Error('Model unavailable') },
  })
  await new Promise((resolve) => appHttp.listen(0, '127.0.0.1', resolve))
  const client = connectClient(`http://127.0.0.1:${appHttp.address().port}`, {
    transports: ['websocket'], autoConnect: false,
  })
  try {
    const ready = once(client, 'server:ready')
    client.connect()
    const payload = (await ready)[0]
    assert.equal(payload.greeting, undefined)
    assert.match(payload.error, /Greeting unavailable/)
  } finally {
    client.disconnect()
    await new Promise((resolve) => ioServer.close(resolve))
  }
})

test('browser tool connection unlocks, delegates, books, verifies, and revokes', { timeout: 30000 }, async () => {
  const providerCalls = []
  let stay
  const providerHttp = createServer(async (request, response) => {
    const chunks = []
    for await (const chunk of request) chunks.push(chunk)
    const body = chunks.length ? JSON.parse(Buffer.concat(chunks).toString()) : null
    providerCalls.push({ path: request.url, body, auth: request.headers.authorization })
    let data
    if (request.url === '/api/health') data = { status: 'ok' }
    else if (request.url === '/api/quotes') {
      stay = body
      data = { quoteId: 'quote-1', ...stay, total: 240, currency: 'USD', expiresAt: dateAhead(1) }
    } else if (request.url === '/api/bookings' && request.method === 'POST') {
      assert.equal(request.headers['idempotency-key']?.length, 64)
      data = { bookingId: 'booking-1' }
    } else if (request.url === '/api/bookings/booking-1') {
      data = { bookingId: 'booking-1', ...stay, total: 240, currency: 'USD', status: 'confirmed' }
    } else {
      response.writeHead(404).end()
      return
    }
    response.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify(data))
  })
  await new Promise((resolve) => providerHttp.listen(0, '127.0.0.1', resolve))
  process.env.JARVIS_CONTROL_TOKEN = 'test-control-token'
  process.env.HOTEL_PROVIDER_BASE_URL = `http://127.0.0.1:${providerHttp.address().port}/api/`
  process.env.HOTEL_PROVIDER_API_KEY = 'test-provider-key'

  const appHttp = createServer((_request, response) => response.end('ok'))
  const ioServer = createSocketServer(appHttp, undefined, {
    greetingGenerator: async () => 'Generated greeting for booking test',
  })
  await new Promise((resolve) => appHttp.listen(0, '127.0.0.1', resolve))
  const client = connectClient(`http://127.0.0.1:${appHttp.address().port}`, { transports: ['websocket'] })

  try {
    await once(client, 'connect')
    assert.equal((await ack(client, 'tools:status', {})).status.hotel.configured, true)
    assert.equal((await ack(client, 'tools:unlock', { token: 'wrong' })).ok, false)
    assert.equal((await ack(client, 'tools:unlock', { token: 'test-control-token' })).ok, true)
    assert.equal((await ack(client, 'tools:connect', { connector: 'hotel' })).status.hotel.connected, true)

    const delegated = await ack(client, 'tools:delegateHotel', {
      hotelId: 'hotel-1', hotelName: 'The Usual Hotel', timeZone: 'UTC',
      nights: 1, guests: 1,
      checkInFrom: new Date().toISOString().slice(0, 10),
      checkInThrough: dateAhead(30).slice(0, 10),
      maxTotal: 300, currency: 'USD', expiresAt: dateAhead(1),
    })
    assert.equal(delegated.status.hotel.delegated, true)

    const booked = await ack(client, 'ai:prompt', {
      requestId: 1,
      messages: [{ role: 'user', content: 'Book me the usual hotel for next Friday.' }],
    })
    assert.equal(booked.result.authority.decision.status, 'verified')
    assert.match(booked.result.data.reply, /Confirmation: booking-1/)
    assert.deepEqual(providerCalls.map((call) => call.path), [
      '/api/health', '/api/quotes', '/api/bookings', '/api/bookings/booking-1',
    ])
    assert.ok(providerCalls.every((call) => call.auth === 'Bearer test-provider-key'))

    assert.equal((await ack(client, 'tools:disconnect', {})).status.hotel.delegated, false)
    const afterRevoke = await ack(client, 'ai:prompt', {
      requestId: 2,
      messages: [{ role: 'user', content: 'Book me the usual hotel for next Friday.' }],
    })
    assert.equal(afterRevoke.result.authority.decision.status, 'needs_profile')
  } finally {
    client.disconnect()
    await new Promise((resolve) => ioServer.close(resolve))
    await new Promise((resolve) => providerHttp.close(resolve))
    delete process.env.JARVIS_CONTROL_TOKEN
    delete process.env.HOTEL_PROVIDER_BASE_URL
    delete process.env.HOTEL_PROVIDER_API_KEY
  }
})
