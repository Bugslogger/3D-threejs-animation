export const digimenuMenuActions = Object.freeze([
  Object.freeze({
    name: 'browse_menu',
    description: 'Show all currently available Digimenu menu cards, categories, items, and prices.',
    tool: 'get_digimenu_menu',
  }),
  Object.freeze({
    name: 'inspect_category',
    description: 'List the available items and prices in a requested Digimenu category.',
    tool: 'get_digimenu_menu',
  }),
  Object.freeze({
    name: 'inspect_item',
    description: 'Give details and price for a requested Digimenu item.',
    tool: 'get_digimenu_menu',
  }),
  Object.freeze({
    name: 'place_order',
    description: 'Place an order through Digimenu.',
    tool: null,
    available: false,
    reason: 'Digimenu order-placement API has not been configured yet.',
  }),
])

export function menuActionKnowledge() {
  return digimenuMenuActions.map(({ name, description, available = true, reason }) => ({
    name,
    description,
    available,
    ...(reason ? { reason } : {}),
  }))
}

export function summarizeMenu(menu) {
  return {
    restaurantId: menu?.restaurantid ?? null,
    tableId: menu?.tableid ?? null,
    tableName: menu?.tablename ?? null,
    actions: menuActionKnowledge(),
    categories: (menu?.items || []).map((item) => ({
      card: item.menucard,
      category: item.menucategory,
      item: item.menuitem,
      description: item.description || '',
      price: item.price,
      currency: item.currency || null,
      available: item.isactive === true && item.isdeleted !== true,
    })),
  }
}

export function formatMenuForWaiter(menu) {
  const summary = summarizeMenu(menu)
  const availableItems = summary.categories.filter((item) => item.available)
  const grouped = new Map()

  for (const item of availableItems) {
    const groupName = item.category || item.card || 'Other items'
    if (!grouped.has(groupName)) grouped.set(groupName, [])
    grouped.get(groupName).push(item)
  }

  const location = summary.tableName
    ? ` for ${summary.tableName}`
    : ''
  const lines = [`I’ve checked the menu${location}. We have ${availableItems.length} available item${availableItems.length === 1 ? '' : 's'}.`]

  for (const [category, items] of grouped) {
    lines.push(`${category}:`)
    for (const item of items) {
      const price = Number.isFinite(Number(item.price))
        ? Number(item.price).toLocaleString('en-IN')
        : 'price unavailable'
      const description = item.description?.trim()
      lines.push(`- ${item.item}, priced at ${price}${description ? `. ${description}` : ''}`)
    }
  }

  if (availableItems.length === 0) {
    lines.push('I could not find any currently available items.')
  }

  return lines.join('\n')
}
