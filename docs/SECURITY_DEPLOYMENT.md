# Onelement GoDaddy and Render deployment

## Production addresses

- Website: `https://onelement.in`
- Website alias: `https://www.onelement.in`
- API: `https://api.onelement.in/api`
- Render service hostname: `onelement.onrender.com`

## GoDaddy DNS

Create a CNAME record with name `api` and value `onelement.onrender.com`. The
root `@` A record must continue to point to the IPv4 address assigned to the
GoDaddy cPanel hosting account. Point `www` to `@` with a CNAME. Do not delete
MX or email-related TXT records.

Add `api.onelement.in` under the Render service's Custom Domains settings,
create the DNS record, and then verify the domain in Render.

## Render configuration

- Root directory: `server`
- Build command: `npm ci`
- Start command: `npm start`
- Health check path: `/health`

Configure these Render environment variables:

- `NODE_ENV=production`
- `MONGO_URI=<production MongoDB connection string>`
- `FRONTEND_ORIGINS=https://onelement.in,https://www.onelement.in`
- `VIEW_STATS_USERNAME=<private username>`
- `VIEW_STATS_PASSWORD=<strong unique password of at least 12 characters>`
- `TRUST_PROXY=1`
- `SHUTDOWN_TIMEOUT_MS=10000`

Do not place database credentials or administration passwords in any `VITE_`
variable. Vite variables are visible in the browser bundle.

## GoDaddy frontend deployment

Run `npm ci` and `npm run build` inside `client`. Upload the contents of `dist`
directly into the GoDaddy document root, normally `public_html`. Preserve the
generated `.htaccess`, `robots.txt`, and `sitemap.xml` files.

Build after the production API is reachable. The build creates route-specific
HTML metadata and sitemap entries for every available blog and technology.

The production client calls `https://api.onelement.in/api`. Public blog and
technology reads are intentionally accessible. Create, update, and delete
operations remain unavailable until the authenticated administration project
is implemented.

## Security boundary

CORS prevents other browser origins from reading API responses, but it is not
authentication and does not block Postman. Public information visible on a
website cannot be made impossible to retrieve with another HTTP client. Data
integrity is protected by keeping mutation routes disabled, validating inputs,
limiting request rates, and requiring authentication for private statistics.

## Database readiness and seeding

Use `/health` for process uptime and `/ready` when confirming that MongoDB is
connected. Seed scripts replace existing content and are blocked unless
`SEED_CONFIRMATION=replace-all-content` is explicitly provided. Production also
requires `ALLOW_PRODUCTION_SEED=true`; create and verify a backup before using it.

The complete release, verification and rollback procedure is in
`docs/PRODUCTION_CHECKLIST.md`.
