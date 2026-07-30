# Mini Wild Garden SEO audit

Audit date: 30 July 2026

## Implemented in source

### Crawlability and indexing

- The XML sitemap uses `https://www.miniwildgarden.co.uk`.
- `robots.txt` points to the same sitemap and blocks `/my-garden`, `/saved-guides`, `/newsletter-confirmed` and `/api/`.
- Public beginner path `/start-this-week` is included in the sitemap with high priority.

### Canonical URLs and host preference

- Preferred host: `www.miniwildgarden.co.uk`.
- `vercel.json` permanently redirects bare `miniwildgarden.co.uk` traffic to the `www` host when Vercel serves both.
- Canonicals are set on homepage, guide indexes, About, Contact, legal pages, seasonal pages, beginner path and individual guides.

### Titles, descriptions and social previews

- Public routes use descriptive Next.js metadata.
- Guides and seasonal pages use article Open Graph metadata and large-image Twitter cards.
- Beginner path has dedicated title, description and OG image.

### Structured data and trust

- Site-level `WebSite` and author `Person` JSON-LD.
- Generic guides output `Article` and `BreadcrumbList`; FAQ blocks add `FAQPage` where present.
- Flagship bird, butterfly, frog, hedgehog and pond guides keep specialist structured data.

### Performance notes already in code

- Hero images use higher Next Image quality and reduced CSS upscaling.
- Large below-the-fold homepage images are lazy-loaded.
- WebP assets are used throughout `public/images`.

### Privacy and measurement

- GA4 is consent controlled.
- Contact and newsletter success events do not send message bodies or email addresses.

## Deployment checks still required

These depend on Vercel, DNS and Search Console rather than more code:

1. In Vercel, set `www.miniwildgarden.co.uk` as the primary domain and confirm apex redirects to www with a single 308/301.
2. Open `https://www.miniwildgarden.co.uk/sitemap.xml` and confirm HTTP 200 with the new `/start-this-week` URL listed.
3. In Google Search Console, submit the sitemap and run URL Inspection on:
   - homepage
   - `/start-this-week`
   - one wildlife guide
   - one garden project
4. Rich Results Test on a guide with FAQ content and a flagship guide.
5. PageSpeed Insights (mobile) on homepage + one image-heavy guide. Watch LCP on hero photos.
6. Confirm GA4 Realtime only starts after analytics consent.
7. Confirm Resend SPF/DKIM and send a contact + newsletter test to Gmail and Outlook.

## Suggested Search Console monitoring

Watch in the first month:

- Page indexing: duplicate canonical, crawled-not-indexed, soft-404
- Sitemaps: discovered URL count after deploy
- Core Web Vitals: mobile LCP for guide heroes
- Queries: “wildlife garden”, “garden birds”, “hedgehog highway”, “mini pond”, “start wildlife garden”, “balcony wildlife”

## Asset hygiene

- Production images live in `public/images` as optimised WebP.
- Working originals and unused AI exports belong in local `extra images/` (gitignored) so they do not bloat the deploy.
- Root-level loose JPG folders should not be committed if they are only source material for WebP conversion.
