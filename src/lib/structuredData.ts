import { getGuideMeta } from "@/lib/guideMeta";

const site = "https://www.miniwildgarden.co.uk";

const sections = {
  "wildlife-guides": "Wildlife guides",
  "garden-guides": "Garden projects",
} as const;

type GuidePageSchemaInput = {
  section: keyof typeof sections;
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
};

/** Article and breadcrumb markup for the bespoke flagship guide pages. */
export function guidePageSchema({ section, slug, title, description, image, category }: GuidePageSchemaInput) {
  const meta = getGuideMeta(slug);
  const pageUrl = `${site}/${section}/${slug}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: title,
      description,
      image: [`${site}${image}`],
      datePublished: meta.published,
      dateModified: meta.updated,
      inLanguage: "en-GB",
      mainEntityOfPage: pageUrl,
      author: { "@id": `${site}/#author` },
      publisher: { "@id": `${site}/#organization` },
      articleSection: category,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
        { "@type": "ListItem", position: 2, name: sections[section], item: `${site}/${section}` },
        { "@type": "ListItem", position: 3, name: title, item: pageUrl },
      ],
    },
  ];
}
