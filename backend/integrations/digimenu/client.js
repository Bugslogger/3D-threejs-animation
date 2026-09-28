import { getDigimenuConfig } from './config.js'

function menuEndpoint(config, { taguid, restaurantId, tableId } = {}) {
  if (!config.menuPath) {
    throw new Error('DIGIMENU_MENU_PATH is not configured.')
  }

  const url = new URL(config.menuPath, `${config.baseURL.replace(/\/$/, '')}/`)
  const resolvedTagUid = taguid ?? config.tagUid
  const resolvedRestaurantId = restaurantId ?? config.restaurantId
  const resolvedTableId = tableId ?? config.tableId
  if (!resolvedTagUid) throw new Error('DIGIMENU_TAG_UID is not configured.')
  url.searchParams.set('taguid', String(resolvedTagUid))
  if (resolvedRestaurantId) url.searchParams.set('restaurantid', String(resolvedRestaurantId))
  if (resolvedTableId) url.searchParams.set('tableid', String(resolvedTableId))
  return url
}

function flattenMenu(payload) {
  const data = payload?.data
  const cards = Array.isArray(data?.menucards) ? data.menucards : []
  const items = cards.flatMap((card) => (Array.isArray(card.menucategories) ? card.menucategories : [])
    .flatMap((category) => (Array.isArray(category.menuitems) ? category.menuitems : [])
      .map((item) => ({
        ...item,
        menucard: card.menucard,
        menucardid: card.menucardid,
        menucategory: category.menucategory,
        menucategoryid: category.menucategoryid,
      }))))

  return {
    statuscode: payload?.statuscode,
    message: payload?.message,
    restaurantid: data?.restaurantid,
    restaurantlogo: data?.restaurantlogo,
    tableid: data?.tableid,
    tablename: data?.tablename,
    menucards: cards,
    items,
  }
}

export function createDigimenuClient({ fetchImpl = fetch, config = getDigimenuConfig() } = {}) {
  return {
    async getMenu({ restaurantId, tableId } = {}) {
      const response = await fetchImpl(menuEndpoint(config, { restaurantId, tableId }), {
        method: 'GET',
        headers: { Accept: 'application/json' },
        signal: AbortSignal.timeout(config.timeoutMs),
      })
      if (!response.ok) throw new Error(`Digimenu menu request returned HTTP ${response.status}.`)
      return flattenMenu(await response.json())
    },
  }
}

export { flattenMenu }
