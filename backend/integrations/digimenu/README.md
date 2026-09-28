# Digimenu integration

This directory contains the server-side integration for placing orders through
the external Digimenu system.

Planned boundaries:

- `client.js` — unauthenticated HTTP client for the menu GET endpoint
- `menuActions.js` — ODUS menu-action knowledge and menu summaries
- `tools.js` — registered assistant tools for menu lookup
- `mappers.js` — convert internal menu/order data to Digimenu payloads
- `webhooks.js` — order-status callbacks from Digimenu, if supported

Do not put Digimenu credentials in source code. Configure them in the backend
environment instead:

```env
DIGIMENU_ENV=production
DIGIMENU_BASE_URL=https://auth.digimenu.ai
DIGIMENU_MENU_PATH=/api/restaurant/get_menu_items_by_taguid
DIGIMENU_TAG_UID=04AC71D2141990
DIGIMENU_API_KEY=...
DIGIMENU_STORE_ID=...
DIGIMENU_RESTAURANT_ID=128
DIGIMENU_TABLE_ID=356
```

Supported environments:

- Production: `https://auth.digimenu.ai`
- Staging: `https://auth.digimenu.in`

Set `DIGIMENU_ENV=staging` when testing against the staging system.

The read-only `get_digimenu_menu` AI tool calls the unauthenticated GET route
using `taguid`. The restaurant ID, table ID, and table name are read from the
Digimenu response.
