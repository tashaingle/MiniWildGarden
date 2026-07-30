import type { Metadata } from "next";
import { MyGardenDashboard } from "@/components/MyGardenDashboard";
import { PageHero } from "@/components/PageHero";
import { libraryItems } from "@/lib/library";

export const metadata: Metadata = {
  title: "My Garden",
  description: "Keep your wildlife garden plan, habitat progress, saved guides and wildlife sightings together in one private dashboard.",
  alternates: { canonical: "/my-garden" },
  robots: { index: false, follow: true },
};

export default function MyGardenPage() {
  return (
    <main>
      <PageHero
        eyebrow="Your private garden notebook"
        title="Welcome back to your patch."
        intro="See what to do next, follow your habitat score and keep a simple record of the wildlife beginning to visit."
        image="/images/wildlife-closeup.webp"
        imageAlt="A close view of wildlife among leaves and garden habitat"
        focal="50% 45%"
      />
      <section className="section my-garden-section"><div className="shell"><MyGardenDashboard items={libraryItems} /></div></section>
    </main>
  );
}
