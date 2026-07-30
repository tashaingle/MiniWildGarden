# Mini Wild Garden

Practical wildlife gardening guides for British gardens, balconies and small outdoor spaces.

Site: [www.miniwildgarden.co.uk](https://www.miniwildgarden.co.uk)

## Stack

- Next.js App Router
- React 19
- Tailwind CSS 4 (utility + custom CSS in `src/app/globals.css`)
- Resend for contact + newsletter
- Optional GA4 behind cookie consent

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Useful routes

| Route | Purpose |
|-------|---------|
| `/start-this-week` | Beginner first-week path |
| `/guides` | Searchable guide library |
| `/planner` | Habitat score + personalised plan |
| `/my-garden` | Local-only garden notebook (noindex) |
| `/wildlife-guides`, `/garden-guides` | Guide collections |

## Environment

Copy `.env.example` to `.env` and fill values as needed:

- `RESEND_API_KEY`, contact/newsletter from addresses
- `GOOGLE_SITE_VERIFICATION` for Search Console
- GA measurement ID used by the consent-aware analytics component

See `README-CONTACT-NEWSLETTER-ANALYTICS.md` for form and analytics detail.

## SEO and deploy checks

See `SEO-AUDIT.md` for sitemap/host/Search Console and PageSpeed checklist.

`vercel.json` redirects bare domain traffic to `www.miniwildgarden.co.uk`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
