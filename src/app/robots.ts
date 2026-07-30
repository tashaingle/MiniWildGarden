import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/my-garden", "/saved-guides", "/newsletter-confirmed", "/api/"],
    },
    sitemap: "https://www.miniwildgarden.co.uk/sitemap.xml",
    host: "https://www.miniwildgarden.co.uk",
  };
}
