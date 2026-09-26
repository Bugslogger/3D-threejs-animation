import assert from 'node:assert/strict'
import { test } from 'node:test'
import { detectHotelBookingIntent, executeHotelBooking, resolveNextWeekday } from '../services/hotelBookingExecutor.js'

const now = new Date('2026-09-26T10:00:00.000Z')
const intent = detectHotelBookingIntent('Book me the usual hotel for next Friday.')
const profile = {
  usualHotel: { id: 'hotel-1', name: 'The Usual Hotel' },
  timeZone: 'UTC',
  nights: 1,
  guests: 1,
}
const grant = {
  tool: 'book_hotel',
  userId: 'user-1',
  hotelId: 'hotel-1',
  checkInFrom: '2026-10-01',
  checkInThrough: '2026-10-03',
  maxNights: 1,
  maxGuests: 1,
  maxTotal: 500,
  currency: 'USD',
  expiresAt: '2026-09-27T00:00:00.000Z',
}

function provider(overrides = {}) {
  return {
    quote: async (request) => ({
      quoteId: 'quote-1',
      ...request,
      total: 320,
      currency: 'USD',
      expiresAt: '2026-09-26T11:00:00.000Z',
      ...overrides.quote,
    }),
    book: async () => ({ bookingId: 'booking-1' }),
    verify: async () => ({
      bookingId: 'booking-1',
      hotelId: 'hotel-1',
      checkIn: '2026-10-02',
      nights: 1,
      guests: 1,
      total: 320,
      currency: 'USD',
      status: 'confirmed',
      ...overrides.verify,
    }),
  }
}

test('executor recognises the request and resolves next Friday in the saved time zone', () => {
  assert.equal(intent.type, 'hotel_booking')
  assert.equal(resolveNextWeekday(intent.weekday, 'UTC', now), '2026-10-02')
})

test('delegated booking is executed and reported only after provider verification', async () => {
  const calls = []
  const adapter = provider()
  const book = adapter.book
  adapter.book = async (request) => {
    calls.push(request)
    return book(request)
  }
  const outcome = await executeHotelBooking({
    intent, profile, grants: [grant], provider: adapter, now, userId: 'user-1',
  })
  assert.equal(outcome.status, 'verified')
  assert.deepEqual(outcome.verifiedActions, ['book_hotel'])
  assert.match(outcome.report, /Confirmation: booking-1/)
  assert.equal(calls.length, 1)
  assert.match(calls[0].idempotencyKey, /^[0-9a-f]{64}$/)
})

test('missing delegation prevents a provider call', async () => {
  let quoted = false
  const adapter = provider()
  adapter.quote = async () => { quoted = true }
  const outcome = await executeHotelBooking({
    intent, profile, grants: [], provider: adapter, now, userId: 'user-1',
  })
  assert.equal(outcome.status, 'denied')
  assert.equal(quoted, false)
})

test('a quote above the grant limit cannot be booked', async () => {
  let booked = false
  const adapter = provider({ quote: { total: 600 } })
  adapter.book = async () => { booked = true }
  const outcome = await executeHotelBooking({
    intent, profile, grants: [grant], provider: adapter, now, userId: 'user-1',
  })
  assert.equal(outcome.status, 'over_limit')
  assert.equal(booked, false)
})

test('a mismatched provider confirmation is never reported as success', async () => {
  const outcome = await executeHotelBooking({
    intent, profile, grants: [grant], provider: provider({ verify: { hotelId: 'other' } }), now, userId: 'user-1',
  })
  assert.equal(outcome.status, 'booking_unconfirmed')
  assert.deepEqual(outcome.executedActions, ['book_hotel'])
  assert.deepEqual(outcome.verifiedActions, [])
})

test('missing profile or provider blocks the booking', async () => {
  const missingProfile = await executeHotelBooking({ intent, now, userId: 'user-1' })
  assert.equal(missingProfile.status, 'needs_profile')
  const missingProvider = await executeHotelBooking({ intent, profile, grants: [grant], now, userId: 'user-1' })
  assert.equal(missingProvider.status, 'unavailable')
})
