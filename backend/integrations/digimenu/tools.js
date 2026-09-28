import { createDigimenuClient } from './client.js'
import { formatMenuForWaiter, menuActionKnowledge } from './menuActions.js'

function plainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

export const digimenuTools = new Map([
  ['get_digimenu_menu', {
    description: `Read the complete Digimenu menu, categories, items, descriptions, availability, and prices. Available menu actions: ${menuActionKnowledge().filter((action) => action.available).map((action) => action.name).join(', ')}.`,
    kind: 'read',
    parameters: {
      taguid: 'optional Digimenu table tag UID; defaults to DIGIMENU_TAG_UID',
      restaurantId: 'optional Digimenu restaurant ID',
      tableId: 'optional Digimenu table ID',
    },
    validate(args) {
      if (!plainObject(args) || Object.keys(args).some((key) => !['taguid', 'restaurantId', 'tableId'].includes(key))) return null
      if (args.taguid !== undefined && (typeof args.taguid !== 'string' || !/^[A-Za-z0-9]+$/.test(args.taguid))) return null
      for (const value of [args.restaurantId, args.tableId]) {
        if (value !== undefined && value !== null && !/^\d+$/.test(String(value))) return null
      }
      return {
        ...(args.taguid !== undefined ? { taguid: args.taguid } : {}),
        ...(args.restaurantId !== undefined ? { restaurantId: String(args.restaurantId) } : {}),
        ...(args.tableId !== undefined ? { tableId: String(args.tableId) } : {}),
      }
    },
    async execute(args) {
      return createDigimenuClient().getMenu(args)
    },
    verify(result) {
      return result && Array.isArray(result.items) && Array.isArray(result.menucards)
    },
    report(result) {
      return formatMenuForWaiter(result)
    },
  }],
])
