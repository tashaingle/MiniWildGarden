import type { MetadataRoute } from "next";
import { libraryItems } from "@/lib/library";
import { seasons } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.miniwildgarden.co.uk";
  const updated = new Date("2026-07-30T00:00:00Z");
  const staticPages = [
    "",
    "/start-this-week",
    "/guides",
    "/wildlife-guides",
    "/garden-guides",
    "/seasonal-advice",
    "/planner",
    "/faqs",
    "/glossary",
    "/about",
    "/contact",
    "/privacy",
    "/cookies",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: updated,
      changeFrequency: path === "" || path === "/start-this-week" ? "weekly" as const : "monthly" as const,
      priority: path === "" ? 1 : path === "/start-this-week" || path === "/guides" ? 0.9 : 0.7,
    })),
    ...libraryItems.map((item) => ({
      url: `${base}${item.href}`,
      lastModified: new Date(`${item.updated}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...seasons.map((season) => ({
      url: `${base}/seasonal-advice/${season.slug}`,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
