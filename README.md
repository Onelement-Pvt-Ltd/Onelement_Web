# Onelement Energy website

Public website and read-only content API for Onelement Energy.

## Project structure

- `client` — React and Vite frontend deployed as static files on GoDaddy.
- `server` — Express and MongoDB API deployed on Render.
- `docs` — deployment, security and handover documentation.

## Local development

1. Install dependencies in the root, `client`, and `server` directories with `npm ci`.
2. Copy each `.env.example` file to `.env` and provide local values.
3. Run both applications with `npm run dev` from the repository root.

## Quality checks

- `npm run lint` — frontend linting.
- `npm test` — frontend and backend tests.
- `npm run build` — sitemap generation and production frontend build.
- `npm run check` — linting, frontend tests, backend tests, production build and SEO validation.

## Production deployment

The website is built from `client` and the contents of `client/dist` are uploaded to the GoDaddy document root. The API runs from `server` on Render. See `docs/SECURITY_DEPLOYMENT.md` for the environment variables, DNS records, HTTPS setup and security boundary.

Do not commit `.env` files. Do not run seed scripts against production without confirming the target database and creating a backup.
