import assert from 'node:assert/strict'
import { test } from 'node:test'
import { createHotelDelegation } from '../services/hotelDelegation.js'
import { createHotelProvider } from '../services/hotelProvider.js'

test('delegation is scoped to the socket user, hotel, dates, price, and expiry', () => {
  const { profile, grant } = createHotelDelegation({
    hotelId: 'hotel-1',
    hotelName: 'The Usual Hotel',
    timeZone: 'Asia/Kolkata',
    nights: 1,
    guests: 2,
    checkInFrom: '2026-10-01',
    checkInThrough: '2026-10-31',
    maxTotal: 400,
    currency: 'inr',
    expiresAt: '2026-09-27T12:00:00.000Z',
  }, 'socket-user', new Date('2026-09-26T12:00:00.000Z'))
  assert.equal(profile.usualHotel.id, 'hotel-1')
  assert.equal(grant.userId, 'socket-user')
  assert.equal(grant.maxTotal, 400)
  assert.equal(grant.currency, 'INR')
  assert.equal(grant.checkInThrough, '2026-10-31')
})

test('delegation rejects invalid dates and expired authority', () => {
  const input = {
    hotelId: 'hotel-1', hotelName: 'Hotel', timeZone: 'UTC',
    nights: 1, guests: 1, checkInFrom: '2026-02-31',
    checkInThrough: '2026-10-31', maxTotal: 100, currency: 'USD',
    expiresAt: '2026-09-27T00:00:00.000Z',
  }
  assert.throws(() => createHotelDelegation(input, 'user', new Date('2026-09-26T00:00:00Z')), /date range/)
  assert.throws(() => createHotelDelegation({
    ...input, checkInFrom: '2026-10-01', expiresAt: '2026-09-25T00:00:00.000Z',
  }, 'user', new Date('2026-09-26T00:00:00Z')), /expiry/)
})

test('provider adapter uses the configured host, bearer credential, and idempotency key', async () => {
  const requests = []
  const provider = createHotelProvider({
    baseURL: 'https://booking.example.test/api/',
    apiKey: 'server-secret',
    fetchImpl: async (url, init) => {
      requests.push({ url: String(url), init })
      if (String(url).endsWith('/health')) return { ok: true, json: async () => ({ status: 'ok' }) }
      if (String(url).endsWith('/quotes')) return { ok: true, json: async () => ({ quoteId: 'quote-1' }) }
      if (String(url).endsWith('/bookings')) return { ok: true, json: async () => ({ bookingId: 'booking-1' }) }
      return { ok: true, json: async () => ({ status: 'confirmed' }) }
    },
  })
  await provider.connect()
  await provider.quote({ hotelId: 'hotel-1' })
  await provider.book({ quoteId: 'quote-1', idempotencyKey: 'dedupe-1' })
  await provider.verify({ bookingId: 'booking-1' })
  assert.deepEqual(requests.map((request) => request.url), [
    'https://booking.example.test/api/health',
    'https://booking.example.test/api/quotes',
    'https://booking.example.test/api/bookings',
    'https://booking.example.test/api/bookings/booking-1',
  ])
  assert.ok(requests.every((request) => request.init.headers.Authorization === 'Bearer server-secret'))
  assert.equal(requests[2].init.headers['Idempotency-Key'], 'dedupe-1')
})

test('provider adapter rejects insecure remote URLs', () => {
  assert.throws(() => createHotelProvider({ baseURL: 'http://booking.example.test/', apiKey: 'key' }), /HTTPS/)
})
