import { aiConfig, getHotelProviderSettings } from '../utils/ai.config.js'

function providerUrl(value) {
  if (!value) return null
  const url = new URL(value)
  const local = ['localhost', '127.0.0.1', '::1'].includes(url.hostname)
  if (url.protocol !== 'https:' && !(local && url.protocol === 'http:')) {
    throw new Error('HOTEL_PROVIDER_BASE_URL must use HTTPS, except for localhost.')
  }
  if (url.username || url.password || url.search || url.hash) {
    throw new Error('HOTEL_PROVIDER_BASE_URL must not contain credentials, a query, or a fragment.')
  }
  return new URL(url.href.replace(/\/?$/, '/'))
}

export function hotelProviderConfigured() {
  const { baseURL, apiKey } = getHotelProviderSettings()
  return Boolean(baseURL && apiKey)
}

export function createHotelProvider({
  baseURL = getHotelProviderSettings().baseURL,
  apiKey = getHotelProviderSettings().apiKey,
  fetchImpl = fetch,
} = {}) {
  const base = providerUrl(baseURL)
  if (!base || !apiKey) throw new Error('Hotel provider URL and API key are not configured.')

  async function request(path, { method = 'GET', body, idempotencyKey } = {}) {
    const response = await fetchImpl(new URL(path, base), {
      method,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        ...(body ? { 'Content-Type': 'application/json' } : {}),
        ...(idempotencyKey ? { 'Idempotency-Key': idempotencyKey } : {}),
      },
      ...(body ? { body: JSON.stringify(body) } : {}),
      signal: AbortSignal.timeout(aiConfig.hotelProvider.timeoutMs),
    })
    if (!response.ok) throw new Error(`Hotel provider returned HTTP ${response.status}.`)
    return response.json()
  }

  return {
    async connect() {
      const health = await request('health')
      if (health?.status !== 'ok') throw new Error('Hotel provider health check failed.')
      return true
    },
    quote(stay) {
      return request('quotes', { method: 'POST', body: stay })
    },
    book({ quoteId, idempotencyKey }) {
      return request('bookings', { method: 'POST', body: { quoteId }, idempotencyKey })
    },
    verify({ bookingId }) {
      return request(`bookings/${encodeURIComponent(bookingId)}`)
    },
  }
}
