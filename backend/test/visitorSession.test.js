import assert from 'node:assert/strict'
import { test } from 'node:test'
import { localGreetingPeriod, resolveVisitorSession } from '../services/visitorSession.js'

const secret = 'test-visitor-secret'
const now = new Date('2026-09-27T10:00:00.000Z')

test('signed visitor session distinguishes first and returning connections', () => {
  const first = resolveVisitorSession(null, { now, secret })
  assert.equal(first.isReturning, false)
  const returning = resolveVisitorSession(first.visitorToken, { now, secret })
  assert.equal(returning.isReturning, true)
  assert.equal(returning.visitorId, first.visitorId)
  assert.equal(returning.visitorToken, first.visitorToken)

  const tamperedLast = first.visitorToken.endsWith('A') ? 'B' : 'A'
  const tampered = resolveVisitorSession(`${first.visitorToken.slice(0, -1)}${tamperedLast}`, { now, secret })
  assert.equal(tampered.isReturning, false)
  const expired = resolveVisitorSession(first.visitorToken, {
    now: new Date('2027-05-01T10:00:00.000Z'), secret,
  })
  assert.equal(expired.isReturning, false)
})

test('greeting period follows the visitor time zone', () => {
  const instant = new Date('2026-09-27T13:00:00.000Z')
  assert.equal(localGreetingPeriod('Asia/Kolkata', instant), 'evening')
  assert.equal(localGreetingPeriod('America/Los_Angeles', instant), 'morning')
  assert.equal(localGreetingPeriod('UTC', instant), 'afternoon')
  assert.equal(localGreetingPeriod('Invalid/Zone', instant), null)
  assert.equal(localGreetingPeriod(undefined, instant), null)
})
