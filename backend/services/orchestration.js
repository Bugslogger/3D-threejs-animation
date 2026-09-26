import { autonomy, sosPolicy } from '../utils/jarvis.config.js'
import { authorizeToolCall, executeTool, listTools } from './toolSystem.js'

// Perception records only information the app actually received.
export function perceive(messages) {
  const conversation = messages.filter((message) =>
    ['user', 'assistant'].includes(message?.role) && typeof message.content === 'string')
  const latestUserMessage = [...conversation].reverse().find((message) => message.role === 'user')
  return {
    conversation,
    latestUserMessage: latestUserMessage.content,
    availableTools: listTools(),
    observations: [{ source: 'user', content: latestUserMessage.content }],
  }
}

export function modelIntentAndSituation(perception) {
  return {
    intent: {
      literalRequest: perception.latestUserMessage,
      objective: 'To be inferred by the reasoning model; not independently verified',
      constraints: [],
      preferences: [],
      urgency: 'unknown',
    },
    situation: {
      observations: perception.observations,
      externalDataAvailable: false,
      activeToolNames: perception.availableTools,
    },
  }
}

export function checkAuthority(proposedAction, toolCall, grants = []) {
  if (toolCall) return authorizeToolCall(toolCall, grants)
  if (!proposedAction) return { status: 'no_action', proposedAction: null, reason: null }
  return {
    status: 'unavailable',
    proposedAction,
    reason: 'No external action tools or delegated grants are configured.',
  }
}

export async function executeAndVerify(authority) {
  const outcome = await executeTool(authority)
  return {
    outcome,
    executedActions: outcome.status === 'completed' ? [outcome.name] : [],
    verifiedActions: outcome.verified ? [outcome.name] : [],
  }
}

export function reportOutcome(draft, authority, toolResults) {
  if (authority.status === 'authorized') {
    if (toolResults.outcome.verified) return toolResults.outcome.report
    return 'The tool did not produce a verified result. I cannot confirm that action succeeded.'
  }
  if (authority.status === 'no_action') return draft
  if (authority.status === 'invalid' || authority.status === 'denied') return `I could not run the requested tool: ${authority.reason}`
  if (authority.proposedAction) {
    return `I can't perform ${authority.proposedAction} from this app. I can help you plan it or guide you through it.`
  }
  if (authority.reason) return `I can't run that tool: ${authority.reason}`
  return 'I cannot verify that action.'
}

export function capabilityState() {
  return {
    configuredAutonomyLevel: autonomy.defaultLevel,
    effectiveExternalActionLevel: 0,
    sosConfigured: sosPolicy.enabled,
    sosOperational: false,
    availableActions: listTools().map((tool) => tool.name),
  }
}
