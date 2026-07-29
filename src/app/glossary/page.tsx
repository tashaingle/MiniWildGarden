import type { Metadata } from "next";
import { GlossarySearch, type GlossaryTerm } from "@/components/GlossarySearch";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Wildlife gardening glossary",
  description: "A plain-English glossary of common wildlife gardening, pond, pollinator and habitat terms.",
  alternates: { canonical: "/glossary" },
};

const terms: GlossaryTerm[] = [
  { term: "Annual", definition: "A plant that completes its life cycle in one growing season, often flowering and setting seed quickly." },
  { term: "Bare ground", definition: "A small open patch of unmulched soil. Some solitary bees use sunny, well-drained bare ground for nesting." },
  { term: "Biodiversity", definition: "The variety of living organisms in a place, including plants, animals, fungi and microorganisms." },
  { term: "Blanket weed", definition: "Long strands of algae that can grow rapidly in nutrient-rich pond water." },
  { term: "Caterpillar food plant", definition: "A plant eaten by the caterpillar stage of a butterfly or moth. It may be different from the flowers used by adults." },
  { term: "Connected habitat", definition: "Gardens and green spaces linked by safe routes so wildlife can move between feeding, nesting and shelter areas." },
  { term: "Dead wood", definition: "Fallen or cut timber left to decay. It supports fungi, beetles and many other organisms." },
  { term: "Deciduous", definition: "A plant that loses its leaves seasonally, usually in autumn or winter in the UK." },
  { term: "Escape route", definition: "A shallow edge, ramp or stable structure that lets wildlife climb out of water or another potential trap." },
  { term: "Food web", definition: "The linked feeding relationships between plants, insects, birds, mammals, amphibians and other organisms." },
  { term: "Ground cover", definition: "Low-growing plants that protect the soil and create cool, sheltered routes for small wildlife." },
  { term: "Habitat", definition: "The place and conditions that provide an organism with food, water, shelter and space." },
  { term: "Hibernation", definition: "A period of greatly reduced activity used by some animals to survive colder months and limited food." },
  { term: "Host plant", definition: "A plant on which an insect lays eggs or its young feed. In butterfly gardening this often means a caterpillar food plant." },
  { term: "Marginal plant", definition: "A pond plant that grows around shallow edges with its roots in wet soil or water and leaves above the surface." },
  { term: "Native plant", definition: "A plant that arrived and established naturally in a region over a long historical period. Native status alone does not guarantee suitability for every garden." },
  { term: "Nectar", definition: "A sugar-rich liquid produced by flowers and used as an energy source by many insects and some birds." },
  { term: "Overwintering", definition: "Surviving through winter in a resting stage, shelter or protected location." },
  { term: "Peat-free compost", definition: "Growing media made without peat extraction, helping protect peatland habitats and stored carbon." },
  { term: "Perennial", definition: "A plant that lives for more than two years and usually returns across several growing seasons." },
  { term: "Pollen", definition: "Fine grains produced by flowers that contain male reproductive cells and are also an important food for many insects." },
  { term: "Pollinator", definition: "An animal that moves pollen between flowers. Bees, hoverflies, butterflies, moths and beetles all pollinate plants." },
  { term: "Pond shelf", definition: "A level area at a chosen depth used to support baskets of marginal or aquatic plants." },
  { term: "Seed head", definition: "The dried flower structure containing seeds. Leaving some standing can provide food and winter shelter." },
  { term: "Solitary bee", definition: "A bee that nests independently rather than living in a large social colony. The UK has many solitary bee species." },
  { term: "Wildlife corridor", definition: "A connected strip or sequence of habitat that helps wildlife move safely through a wider landscape." },
];

export default function GlossaryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Plain-English field notes"
        title="Understand the language of a living garden."
        intro="Search the terms that appear across wildlife gardening guides, from bare ground and pond shelves to food webs and overwintering."
        image="/images/wildflowers.webp"
        imageAlt="A varied patch of flowers creating food and structure for wildlife"
        focal="50% 50%"
      />
      <section className="section glossary-section"><div className="shell"><GlossarySearch terms={terms} /></div></section>
    </main>
  );
}
