# Onelement production checklist

## Before deployment

- Confirm the exact legal company name, contact information and approved public content.
- Confirm publication rights for every image, video, logo and article.
- Review Privacy Policy and Terms of Use with an authorised legal professional.
- Run `npm ci` in the root, `client` and `server` directories.
- Run `npm run check` from the repository root.
- Confirm dependency audits report no unresolved high or critical vulnerabilities.
- Create and verify a MongoDB backup.
- Confirm seed-only variables are not configured in the production service.

## Render backend

- Confirm the root directory is `server`.
- Confirm `npm ci`, `npm start` and `/health` are configured.
- Configure every variable listed in `server/.env.example` using Render secrets.
- Add and verify `api.onelement.in` as a custom domain.
- Verify both `/health` and `/ready`; readiness must report a connected database.
- Verify unapproved browser origins are rejected.

## GoDaddy frontend

- Build only after the production API is reachable so dynamic SEO routes are generated.
- Upload the contents of `client/dist`, not the `dist` directory itself.
- Confirm hidden files such as `.htaccess` were uploaded.
- Preserve email-related MX and TXT records while changing DNS.
- Verify HTTPS and the `www` to apex-domain redirect.

## Live verification

- Test every page, navigation item, submenu, filter, pagination control and related-content link.
- Test keyboard navigation, Escape handling and visible focus.
- Test common mobile, tablet and desktop widths.
- Confirm unknown routes display the branded 404 page.
- Confirm `/admin/views` is not indexed and requires authentication.
- Validate `robots.txt`, `sitemap.xml`, canonical URLs and structured data.
- Test social previews for the home page and at least one article.
- Run Lighthouse and record the result.
- Submit the sitemap to Google Search Console and Bing Webmaster Tools.

## Monitoring and backup

- Monitor `https://api.onelement.in/health` for uptime.
- Alert on repeated HTTP 5xx responses and MongoDB connection failures.
- Configure recurring MongoDB backups and test a restoration procedure.
- Keep Render, GoDaddy, domain and database ownership in company-controlled accounts with 2FA.

## Rollback

- Keep the previously deployed frontend build until the new release is verified.
- If the frontend fails, restore the previous `public_html` contents.
- If the backend fails, redeploy the previous known-good Render commit.
- If data is damaged, stop writes and restore the verified MongoDB backup.
- Record the failed release, cause and corrective action before redeploying.
