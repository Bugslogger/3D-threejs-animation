import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { aiConfig, getVisitorSecret } from '../utils/ai.config.js'

let processSecret

function localSecret() {
  if (processSecret) return processSecret
  const path = new URL('../.visitor-secret', import.meta.url)
  try {
    processSecret = readFileSync(path, 'utf8').trim()
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
    const candidate = randomBytes(32).toString('hex')
    try {
      writeFileSync(path, candidate, { flag: 'wx', mode: 0o600 })
      processSecret = candidate
    } catch (writeError) {
      if (writeError.code !== 'EEXIST') throw writeError
      processSecret = readFileSync(path, 'utf8').trim()
    }
  }
  if (!processSecret) throw new Error('Visitor signing secret is empty.')
  return processSecret
}

function signature(value, secret) {
  return createHmac('sha256', secret).update(value).digest('base64url')
}

export function resolveVisitorSession(token, { now = new Date(), secret = getVisitorSecret() || localSecret() } = {}) {
  const currentSeconds = Math.floor(now.getTime() / 1000)
  if (typeof token === 'string' && token.length <= aiConfig.visitor.maxTokenLength) {
    const match = /^(v1\.[0-9a-f]{32}\.\d{10})\.([A-Za-z0-9_-]{43})$/.exec(token)
    if (match) {
      const issuedAt = Number(match[1].split('.').at(-1))
      const expected = Buffer.from(signature(match[1], secret))
      const actual = Buffer.from(match[2])
      if (actual.length === expected.length && timingSafeEqual(actual, expected)
        && issuedAt <= currentSeconds + 300
        && currentSeconds - issuedAt <= aiConfig.visitor.maxAgeDays * 86_400) {
        return { visitorId: match[1].split('.')[1], visitorToken: token, isReturning: true }
      }
    }
  }
  const visitorId = randomBytes(16).toString('hex')
  const payload = `v1.${visitorId}.${currentSeconds}`
  return { visitorId, visitorToken: `${payload}.${signature(payload, secret)}`, isReturning: false }
}

export function localGreetingPeriod(timeZone, now = new Date()) {
  if (typeof timeZone !== 'string' || !timeZone.trim()) return null
  try {
    const hour = Number(new Intl.DateTimeFormat('en-GB', {
      timeZone, hour: '2-digit', hourCycle: 'h23',
    }).format(now))
    if (hour >= 5 && hour < 12) return 'morning'
    if (hour >= 12 && hour < 17) return 'afternoon'
    if (hour >= 17 && hour < 22) return 'evening'
    return 'night'
  } catch {
    return null
  }
}
