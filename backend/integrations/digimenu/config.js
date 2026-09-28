const environments = Object.freeze({
  production: Object.freeze({
    baseURL: 'https://auth.digimenu.ai',
  }),
  staging: Object.freeze({
    baseURL: 'https://auth.digimenu.in',
  }),
})

export function getDigimenuConfig() {
  const environment = process.env.DIGIMENU_ENV?.trim().toLowerCase() || 'production'
  const selected = environments[environment]

  if (!selected) {
    throw new Error('DIGIMENU_ENV must be either production or staging.')
  }

  return {
    environment,
    baseURL: process.env.DIGIMENU_BASE_URL?.trim() || selected.baseURL,
    menuPath: process.env.DIGIMENU_MENU_PATH?.trim() || '/api/restaurant/get_menu_items_by_taguid',
    apiKey: process.env.DIGIMENU_API_KEY?.trim(),
    storeId: process.env.DIGIMENU_STORE_ID?.trim(),
    restaurantId: process.env.DIGIMENU_RESTAURANT_ID?.trim(),
    tableId: process.env.DIGIMENU_TABLE_ID?.trim(),
    tagUid: process.env.DIGIMENU_TAG_UID?.trim(),
    timeoutMs: Number(process.env.DIGIMENU_TIMEOUT_MS) || 12_000,
  }
}

export { environments }
