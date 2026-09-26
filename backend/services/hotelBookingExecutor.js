import { createHash } from 'node:crypto'

const weekdays = { sunday: 0, monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6 }

export function detectHotelBookingIntent(message) {
  if (!/\bbook\b/i.test(message) || !/\b(?:usual|regular)\s+hotel\b/i.test(message)) return null
  const dateMatch = message.match(/\bnext\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/i)
  return {
    type: 'hotel_booking',
    hotelReference: 'usual',
    datePhrase: dateMatch?.[0] || null,
    weekday: dateMatch ? weekdays[dateMatch[1].toLowerCase()] : null,
  }
}

function localDate(now, timeZone) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone, year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(now)
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]))
  return new Date(Date.UTC(Number(values.year), Number(values.month) - 1, Number(values.day)))
}

export function resolveNextWeekday(weekday, timeZone, now = new Date()) {
  const date = localDate(now, timeZone)
  const daysFromMonday = (date.getUTCDay() + 6) % 7
  const targetFromMonday = (weekday + 6) % 7
  date.setUTCDate(date.getUTCDate() - daysFromMonday + 7 + targetFromMonday)
  return date.toISOString().slice(0, 10)
}

function result(status, message, extra = {}) {
  return {
    status,
    report: message,
    executedActions: [],
    verifiedActions: [],
    ...extra,
  }
}

// profile, grants, and provider must come from trusted server state, never
// from the model's response or a client-supplied prompt payload.
export async function executeHotelBooking({ intent, profile, grants = [], provider, now = new Date(), userId }) {
  if (!intent || intent.type !== 'hotel_booking') return null
  const hotel = profile?.usualHotel
  if (!hotel?.id || !hotel?.name || !profile?.timeZone
    || !Number.isInteger(profile?.nights) || profile.nights < 1
    || !Number.isInteger(profile?.guests) || profile.guests < 1) {
    return result('needs_profile', 'I need your usual hotel, time zone, number of nights, and guest count before I can plan a booking.')
  }
  if (!intent.datePhrase) {
    return result('needs_date', 'Which check-in date should I use for the hotel booking?')
  }
  let checkIn
  try {
    checkIn = resolveNextWeekday(intent.weekday, profile.timeZone, now)
  } catch {
    return result('needs_profile', 'Your saved time zone is invalid. Please update it before booking.')
  }
  const grant = typeof userId === 'string' && userId.length > 0 && grants.find((entry) =>
    entry?.tool === 'book_hotel'
    && entry.hotelId === hotel.id
    && entry.userId === userId
    && Date.parse(entry.expiresAt) > now.getTime()
    && typeof entry.checkInFrom === 'string'
    && typeof entry.checkInThrough === 'string'
    && entry.checkInFrom <= checkIn
    && checkIn <= entry.checkInThrough
    && Number.isInteger(entry.maxNights)
    && profile.nights <= entry.maxNights
    && Number.isInteger(entry.maxGuests)
    && profile.guests <= entry.maxGuests
    && typeof entry.maxTotal === 'number'
    && Number.isFinite(entry.maxTotal)
    && entry.maxTotal > 0
    && typeof entry.currency === 'string')
  if (!grant) {
    return result('denied', `I found your usual hotel for ${checkIn}, but I do not have a current delegation to book it.`, { checkIn })
  }
  if (!provider?.quote || !provider?.book || !provider?.verify) {
    return result('unavailable', 'Hotel booking is authorised in principle, but no booking provider is connected.')
  }

  const request = { hotelId: hotel.id, checkIn, nights: profile.nights, guests: profile.guests }
  let quote
  try {
    quote = await provider.quote(request)
  } catch {
    return result('quote_failed', 'I could not obtain a hotel quote, so no booking was made.')
  }
  if (!quote?.quoteId || quote.hotelId !== hotel.id || quote.checkIn !== checkIn
    || quote.nights !== profile.nights || quote.guests !== profile.guests
    || !Number.isFinite(quote.total) || quote.total <= 0
    || quote.currency !== grant.currency
    || !Number.isFinite(Date.parse(quote.expiresAt))
    || Date.parse(quote.expiresAt) <= now.getTime()) {
    return result('invalid_quote', 'The hotel quote could not be verified, so no booking was made.')
  }
  if (quote.total > grant.maxTotal) {
    return result('over_limit', `The quote is ${quote.total} ${quote.currency}, above your delegated limit of ${grant.maxTotal} ${grant.currency}. No booking was made.`)
  }

  const idempotencyKey = createHash('sha256')
    .update(JSON.stringify({ userId, ...request }))
    .digest('hex')
  let booking
  try {
    booking = await provider.book({ quoteId: quote.quoteId, idempotencyKey })
  } catch {
    return result('booking_unconfirmed', 'The booking request did not return a confirmation. Check the provider before retrying.', { executedActions: ['book_hotel'] })
  }
  if (!booking?.bookingId) {
    return result('booking_unconfirmed', 'The booking request returned no booking ID. Check the provider before retrying.', { executedActions: ['book_hotel'] })
  }
  let confirmation
  try {
    confirmation = await provider.verify({ bookingId: booking.bookingId })
  } catch {
    return result('booking_unconfirmed', 'The provider did not verify the booking. Check it before retrying.', { executedActions: ['book_hotel'] })
  }
  if (confirmation?.status !== 'confirmed'
    || confirmation.bookingId !== booking.bookingId
    || confirmation.hotelId !== hotel.id
    || confirmation.checkIn !== checkIn
    || confirmation.nights !== profile.nights
    || confirmation.guests !== profile.guests
    || confirmation.total !== quote.total
    || confirmation.currency !== quote.currency) {
    return result('booking_unconfirmed', 'The provider confirmation did not match the requested booking. Check it before retrying.', { executedActions: ['book_hotel'] })
  }
  return result(
    'verified',
    `Booked ${hotel.name} for ${checkIn}, ${profile.nights} night${profile.nights === 1 ? '' : 's'}, ${profile.guests} guest${profile.guests === 1 ? '' : 's'}. Total: ${quote.total} ${quote.currency}. Confirmation: ${booking.bookingId}.`,
    {
      checkIn,
      bookingId: booking.bookingId,
      executedActions: ['book_hotel'],
      verifiedActions: ['book_hotel'],
    },
  )
}
