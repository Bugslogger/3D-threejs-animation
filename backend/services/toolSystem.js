import { aiConfig } from '../utils/ai.config.js'

function plainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

const tools = new Map([
  ['get_current_time', {
    description: 'Read the current time in an IANA time zone. Defaults to UTC.',
    kind: 'read',
    parameters: { timeZone: 'optional IANA time zone, such as Asia/Kolkata' },
    validate(args) {
      if (!plainObject(args) || Object.keys(args).some((key) => key !== 'timeZone')) return null
      const timeZone = args.timeZone ?? 'UTC'
      if (typeof timeZone !== 'string' || timeZone.length > aiConfig.tools.maxTimeZoneLength) return null
      try {
        new Intl.DateTimeFormat('en-GB', { timeZone })
        return { timeZone }
      } catch {
        return null
      }
    },
    async execute(args) {
      const instant = new Date()
      return {
        instant: instant.toISOString(),
        timeZone: args.timeZone,
        display: new Intl.DateTimeFormat('en-GB', {
          dateStyle: 'full',
          timeStyle: 'long',
          timeZone: args.timeZone,
        }).format(instant),
      }
    },
    verify(result, args) {
      return result.timeZone === args.timeZone
        && Number.isFinite(Date.parse(result.instant))
        && typeof result.display === 'string'
        && result.display.length > 0
    },
    report(result) {
      return `The current time in ${result.timeZone} is ${result.display}.`
    },
  }],
  ['convert_temperature', {
    description: 'Convert a numeric temperature between Celsius and Fahrenheit.',
    kind: 'read',
    parameters: { value: 'finite number', from: 'C or F', to: 'C or F' },
    validate(args) {
      if (!plainObject(args) || Object.keys(args).some((key) => !['value', 'from', 'to'].includes(key))) return null
      if (typeof args.value !== 'number' || !Number.isFinite(args.value)) return null
      if (!['C', 'F'].includes(args.from) || !['C', 'F'].includes(args.to)) return null
      return { value: args.value, from: args.from, to: args.to }
    },
    async execute(args) {
      const value = args.from === args.to ? args.value
        : args.from === 'C' ? args.value * 9 / 5 + 32
          : (args.value - 32) * 5 / 9
      return { input: args.value, from: args.from, to: args.to, value }
    },
    verify(result, args) {
      const expected = args.from === args.to ? args.value
        : args.from === 'C' ? args.value * 9 / 5 + 32
          : (args.value - 32) * 5 / 9
      return Number.isFinite(result.value)
        && Math.abs(result.value - expected) < 1e-9
    },
    report(result) {
      return `${result.input} °${result.from} is ${Number(result.value.toFixed(4))} °${result.to}.`
    },
  }],
])

export function listTools() {
  return [...tools.entries()].map(([name, tool]) => ({
    name,
    description: tool.description,
    kind: tool.kind,
    parameters: tool.parameters,
  }))
}

export function authorizeToolCall(call, grants = []) {
  if (!call) return { status: 'no_action', call: null }
  if (!plainObject(call) || typeof call.name !== 'string') {
    return { status: 'invalid', reason: 'Malformed tool call.' }
  }
  const tool = tools.get(call.name)
  if (!tool) return { status: 'unavailable', reason: `Tool ${call.name} is not registered.` }
  const args = tool.validate(call.arguments)
  if (!args) return { status: 'invalid', reason: `Invalid arguments for ${call.name}.` }
  if (tool.kind !== 'read') {
    const allowed = grants.some((grant) => grant?.tool === call.name && Date.parse(grant.expiresAt) > Date.now())
    if (!allowed) return { status: 'denied', reason: `No active grant for ${call.name}.` }
  }
  return { status: 'authorized', name: call.name, arguments: args }
}

export async function executeTool(decision) {
  if (decision.status !== 'authorized') return { status: 'not_executed', verified: false }
  const tool = tools.get(decision.name)
  try {
    const result = await tool.execute(decision.arguments)
    const verified = tool.verify(result, decision.arguments)
    return {
      status: verified ? 'completed' : 'verification_failed',
      name: decision.name,
      result: verified ? result : undefined,
      verified,
      report: verified ? tool.report(result) : undefined,
    }
  } catch (error) {
    return { status: 'failed', name: decision.name, verified: false, error: error.message }
  }
}
