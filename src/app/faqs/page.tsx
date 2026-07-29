import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Wildlife gardening questions",
  description: "Clear answers to common UK wildlife gardening questions about ponds, feeding, hedgehogs, pollinators and small spaces.",
  alternates: { canonical: "/faqs" },
};

const sections = [
  {
    title: "Getting started",
    questions: [
      ["Do I need a large garden to help wildlife?", "No. A flowering pot, shallow water dish, climbing plant or undisturbed corner can all be useful. Small spaces work best when they add several layers rather than trying to copy a full-sized garden."],
      ["What is the single best first change?", "Safe water is often the fastest habitat upgrade, but the best first step depends on what is missing. Use the garden planner to check food, water, shelter and access before choosing a project."],
      ["Does a wildlife garden have to look messy?", "No. Mown edges, defined paths and grouped planting can make habitat look intentional. The aim is to leave useful structure, not abandon every part of the garden."],
    ],
  },
  {
    title: "Food and feeding",
    questions: [
      ["Should I feed birds all year?", "Bird feeding can continue through the year when feeders are kept clean and the food is suitable. Natural food from flowers, seed heads, insects and berries should remain part of the garden too."],
      ["Can I give hedgehogs milk?", "No. Offer fresh water instead. If supplementary food is needed, use suitable meat-based cat or dog food and keep the feeding area hygienic."],
      ["Which flowers are best for bees?", "Choose a sequence of open, nectar-rich flowers from spring into autumn. Flowering herbs, lavender, salvia, catmint, marjoram, cosmos and sedum can all be useful when they suit the site."],
    ],
  },
  {
    title: "Ponds and amphibians",
    questions: [
      ["Will a tiny pond still help?", "Yes. Even a watertight container can provide drinking water and support insects when it includes shallow landing places and a safe route out."],
      ["Should I move frogspawn into my pond?", "No. Let amphibians arrive naturally. Moving animals, plants or pond water can spread disease and unwanted species between sites."],
      ["Does a wildlife pond need a pump?", "Usually not. Still water supports many pond species. Good planting, low nutrient levels and patience are often more useful than constant circulation."],
    ],
  },
  {
    title: "Safety and garden care",
    questions: [
      ["Are pesticides compatible with a wildlife garden?", "Broad treatments can remove both the target animal and the food relied on by predators. Start with plant health, barriers, hand removal and tolerance of minor damage."],
      ["How can I make a pond safer?", "Include a broad shallow edge or stable escape ramp that reaches dry ground. Consider children, pets and visitors when choosing the position and design."],
      ["When should I cut hedges?", "Check carefully for active nests before cutting. Major work is best planned outside the busiest nesting period, while light maintenance should still be preceded by a close inspection."],
    ],
  },
];

export default function FaqPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sections.flatMap((section) => section.questions.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    }))),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <PageHero
        eyebrow="Wildlife gardening questions"
        title="Clear answers for kinder gardens."
        intro="Practical answers to the questions that appear when a garden starts becoming a habitat."
        image="/images/wildlife-closeup.webp"
        imageAlt="A close view of wildlife using a miniature garden habitat"
        focal="50% 50%"
      />
      <section className="section faq-hub"><div className="shell faq-hub__grid">
        <aside><span className="eyebrow">Browse by subject</span>{sections.map((section, index) => <a href={`#faq-${index + 1}`} key={section.title}>{String(index + 1).padStart(2, "0")} · {section.title}</a>)}</aside>
        <div>{sections.map((section, index) => <section id={`faq-${index + 1}`} key={section.title}><span className="eyebrow">{String(index + 1).padStart(2, "0")}</span><h2>{section.title}</h2>{section.questions.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</section>)}</div>
      </div></section>
      <section className="section section--forest"><div className="shell next-step next-step--light"><div><span className="eyebrow eyebrow--light">Need a practical next step?</span><h2>Turn the answer into habitat.</h2></div><Link className="button button--lime" href="/guides">Search all guides</Link></div></section>
    </main>
  );
}
