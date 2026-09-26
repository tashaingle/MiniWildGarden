import type { MetadataRoute } from "next";

// Private pages (My Garden, saved guides, confirmations) stay crawlable so
// search engines can read their noindex tags; blocking them here would hide
// that tag and let the bare URLs appear in results.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://www.miniwildgarden.co.uk/sitemap.xml",
    host: "https://www.miniwildgarden.co.uk",
  };
}
