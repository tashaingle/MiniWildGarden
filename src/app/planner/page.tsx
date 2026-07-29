import type { Metadata } from "next";
import { GardenPlanner } from "@/components/GardenPlanner";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Wildlife garden planner",
  description: "Score the core habitat layers in your outdoor space and get a practical next-step plan for water, food, shelter and safe access.",
  alternates: { canonical: "/planner" },
};

export default function PlannerPage() {
  return (
    <main>
      <PageHero
        eyebrow="Interactive garden planner"
        title="What should your garden add next?"
        intro="Check the habitat layers you already have, see a simple score and get three practical next steps tailored to the gaps."
        image="/images/garden-bed.webp"
        imageAlt="A layered wildlife garden with flowers, a pond and places to shelter"
        focal="50% 48%"
      />
      <section className="section planner-section"><div className="shell"><GardenPlanner /></div></section>
    </main>
  );
}
