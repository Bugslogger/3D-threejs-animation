import { aiConfig } from '../utils/ai.config.js'

function validDate(value) {
  const parsed = new Date(`${value}T00:00:00Z`)
  return typeof value === 'string'
    && /^\d{4}-\d{2}-\d{2}$/.test(value)
    && Number.isFinite(parsed.getTime())
    && parsed.toISOString().slice(0, 10) === value
}

export function createHotelDelegation(input, userId, now = new Date()) {
  const hotelId = typeof input?.hotelId === 'string' ? input.hotelId.trim() : ''
  const hotelName = typeof input?.hotelName === 'string' ? input.hotelName.trim() : ''
  const timeZone = typeof input?.timeZone === 'string' ? input.timeZone.trim() : ''
  const currency = typeof input?.currency === 'string' ? input.currency.trim().toUpperCase() : ''
  const expiresAt = new Date(input?.expiresAt)
  if (!userId || !hotelId || hotelId.length > aiConfig.hotelDelegation.maxHotelIdLength
    || !hotelName || hotelName.length > aiConfig.hotelDelegation.maxHotelNameLength) {
    throw new Error('Enter a valid hotel ID and name.')
  }
  try {
    new Intl.DateTimeFormat('en-GB', { timeZone })
  } catch {
    throw new Error('Enter a valid IANA time zone.')
  }
  if (!Number.isInteger(input.nights) || input.nights < 1 || input.nights > aiConfig.hotelDelegation.maxNights
    || !Number.isInteger(input.guests) || input.guests < 1 || input.guests > aiConfig.hotelDelegation.maxGuests) {
    throw new Error('Nights and guests must be positive whole numbers.')
  }
  if (!validDate(input.checkInFrom) || !validDate(input.checkInThrough)
    || input.checkInFrom > input.checkInThrough) {
    throw new Error('Enter a valid check-in date range.')
  }
  if (!Number.isFinite(input.maxTotal) || input.maxTotal <= 0 || input.maxTotal > aiConfig.hotelDelegation.maxTotal
    || !/^[A-Z]{3}$/.test(currency || '')) {
    throw new Error('Enter a positive total limit and a three-letter currency.')
  }
  if (!Number.isFinite(expiresAt.getTime()) || expiresAt <= now
    || expiresAt.getTime() > now.getTime() + aiConfig.hotelDelegation.maxValidityDays * 86_400_000) {
    throw new Error(`Delegation expiry must be within the next ${aiConfig.hotelDelegation.maxValidityDays} days.`)
  }
  return {
    profile: {
      usualHotel: { id: hotelId, name: hotelName },
      timeZone,
      nights: input.nights,
      guests: input.guests,
    },
    grant: {
      tool: 'book_hotel',
      userId,
      hotelId,
      checkInFrom: input.checkInFrom,
      checkInThrough: input.checkInThrough,
      maxNights: input.nights,
      maxGuests: input.guests,
      maxTotal: input.maxTotal,
      currency,
      expiresAt: expiresAt.toISOString(),
    },
  }
}
