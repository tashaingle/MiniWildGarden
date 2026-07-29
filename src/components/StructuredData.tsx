const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.miniwildgarden.co.uk/#website",
      url: "https://www.miniwildgarden.co.uk/",
      name: "Mini Wild Garden",
      description: "Practical wildlife gardening guides for British gardens, balconies and small spaces.",
      inLanguage: "en-GB",
      publisher: { "@id": "https://www.miniwildgarden.co.uk/#author" },
    },
    {
      "@type": "Person",
      "@id": "https://www.miniwildgarden.co.uk/#author",
      name: "Natasha Card",
      url: "https://www.miniwildgarden.co.uk/about",
      jobTitle: "Environmental science graduate and wildlife gardening writer",
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "BSc Environmental Science",
      },
      knowsAbout: [
        "environmental science",
        "wildlife gardening",
        "garden biodiversity",
        "British garden wildlife",
      ],
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
    />
  );
}
