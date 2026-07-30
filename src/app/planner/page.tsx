import type { Metadata } from "next";
import { GardenPlanner } from "@/components/GardenPlanner";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Personal wildlife garden planner",
  description: "Create a personalised 30, 60 and 90-day wildlife garden plan shaped by your space, light, time, wildlife interests and household.",
  alternates: { canonical: "/planner" },
};

export default function PlannerPage() {
  return (
    <main>
      <PageHero
        eyebrow="Interactive garden planner"
        title="Your next season starts here."
        intro="Describe your space, check the habitat you already have and build a practical three-step wildlife plan shaped around your time, budget and household."
        image="/images/garden-bed.webp"
        imageAlt="A layered wildlife garden with flowers, a pond and places to shelter"
        focal="50% 48%"
      />
      <section className="section planner-section"><div className="shell"><GardenPlanner /></div></section>
    </main>
  );
}
