import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/saved-guides"] },
    sitemap: "https://miniwildgarden.co.uk/sitemap.xml",
    host: "https://miniwildgarden.co.uk",
  };
}
