# Mini Wild Garden SEO audit

Audit date: 29 July 2026

## Implemented in this patch

### Crawlability and indexing

- The XML sitemap now uses the preferred `https://www.miniwildgarden.co.uk` hostname.
- `robots.txt` points to the same sitemap and keeps private/local utility routes out of search results.
- Saved Guides and newsletter-confirmation pages remain `noindex`.
- API routes are excluded from crawling.

### Canonical URLs

- The site-wide preferred hostname is now `www.miniwildgarden.co.uk`.
- Canonicals are set for the homepage, main guide indexes, About, Contact, legal pages, seasonal pages and individual guide pages.
- Generic wildlife and garden guides now receive their own canonical instead of inheriting the homepage canonical.

### Titles, descriptions and social previews

- Every public route has a descriptive title and meta description through static or generated Next.js metadata.
- Individual guides and seasonal pages use article Open Graph metadata and large-image Twitter cards.
- The homepage has a defined site name, description and large preview image.

### Structured data and trust

- Site-level `WebSite` and author `Person` JSON-LD has been added.
- Natasha Card’s BSc Environmental Science is represented as an educational credential without claiming an institution that has not been supplied.
- Generic guides now output `Article` and `BreadcrumbList` structured data.
- Existing flagship bird, butterfly, frog, hedgehog and pond guides retain their specialist structured data.
- The About and Contact content visibly explains the environmental-science background behind the site.

### Content and accessibility

- Guide images use descriptive alt text and Next.js image optimisation.
- Guide pages use visible breadcrumbs and a single primary heading.
- The number badges over guide images now have a dark, bordered, high-contrast treatment.
- The bird cleaning-frequency panel and habitat statistic have responsive spacing so text does not collide.
- Contact and newsletter forms have explicit labels, status messages and consent wording.

### Privacy and measurement

- Google Analytics 4 is consent controlled and does not load under Necessary only.
- Successful enquiries and newsletter requests use GA4 recommended event concepts without sending form contents or email addresses.
- Privacy and cookie notices now cover Resend, newsletter contacts, analytics and local browser storage.

## Deployment checks still required

These checks depend on the live deployment and external services rather than source code:

1. Set `www.miniwildgarden.co.uk` as the primary Vercel domain and confirm the apex domain redirects to it with one permanent redirect.
2. Verify the sitemap returns HTTP 200 and valid XML after deployment.
3. Use Search Console URL Inspection on the homepage and one guide, then request indexing.
4. Test Article, Breadcrumb and WebSite markup with Google’s Rich Results Test or Schema.org validator.
5. Run PageSpeed Insights on mobile. The site already uses WebP and Next Image, but the large photographic library makes live Core Web Vitals testing important.
6. Confirm GA4 Realtime only begins after analytics consent.
7. Confirm Resend SPF/DKIM verification is complete and test contact/newsletter delivery in Gmail and Outlook.

## Suggested Search Console monitoring

Watch these reports during the first month:

- Page indexing: duplicate canonical, crawled-not-indexed and soft-404 warnings.
- Sitemaps: discovered URL count should rise after the new deployment is read.
- Core Web Vitals: focus on mobile LCP for image-heavy guide heroes.
- Performance: queries containing “wildlife garden”, “garden birds”, “hedgehog highway”, “mini pond”, “butterfly friendly garden” and location-specific UK wording.

This is a source-code audit. A live Lighthouse crawl could not be completed from the build environment, so the deployment checks above should be treated as the final verification step.
