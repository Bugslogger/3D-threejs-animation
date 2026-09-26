// Runtime settings for the active backend. Persona, mode, and model choices
// remain in jarvis.config.js.
export const aiConfig = Object.freeze({
  xai: Object.freeze({
    baseURL: 'https://api.x.ai/v1',
    timeoutMs: 120_000,
    maxOutputTokens: 4_096,
    reasoningEffort: 'low',
    stream: true,
  }),
  greeting: Object.freeze({
    timeoutMs: 10_000,
    maxRetries: 0,
    maxOutputTokens: 96,
    maxLength: 180,
    recentCount: 5,
  }),
  visitor: Object.freeze({ maxAgeDays: 180, maxTokenLength: 160 }),
  hotelProvider: Object.freeze({ timeoutMs: 12_000 }),
  tools: Object.freeze({ maxTimeZoneLength: 80 }),
  hotelDelegation: Object.freeze({
    maxHotelIdLength: 100,
    maxHotelNameLength: 120,
    maxNights: 30,
    maxGuests: 20,
    maxTotal: 1_000_000,
    maxValidityDays: 30,
  }),
  session: Object.freeze({ maxHistoryMessages: 50 }),
  server: Object.freeze({
    defaultPort: 5_000,
    defaultClientOrigin: 'http://localhost:5173',
    useSystemCAByDefault: true,
    additionalAllowedOrigins: Object.freeze([
      'exp://192.168.1.7:8081',
      'exp://192.168.1.7:8082',
      'http://192.168.1.7:8081',
      'http://192.168.1.7:8082',
      'https://odus-ai-interface.firebaseapp.com'
    ]),
  }),
})

// Read environment settings when requested so tests and deployments can set
// them after modules are imported. Secrets are never exported as constants.
export function getXaiSettings() {
  return {
    apiKey: process.env.XAI_API_KEY?.trim(),
    baseURL: process.env.XAI_BASE_URL || aiConfig.xai.baseURL,
    timeout: aiConfig.xai.timeoutMs,
  }
}

export function getHotelProviderSettings() {
  return {
    baseURL: process.env.HOTEL_PROVIDER_BASE_URL,
    apiKey: process.env.HOTEL_PROVIDER_API_KEY,
  }
}

export function getControlToken() {
  return process.env.JARVIS_CONTROL_TOKEN
}

export function getVisitorSecret() {
  return process.env.JARVIS_VISITOR_SECRET?.trim()
}

export function getServerSettings() {
  return {
    port: Number(process.env.PORT) || aiConfig.server.defaultPort,
    allowedOrigins: [
      process.env.CLIENT_ORIGIN || aiConfig.server.defaultClientOrigin,
      ...aiConfig.server.additionalAllowedOrigins,
    ],
  }
}
