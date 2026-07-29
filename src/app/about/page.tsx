import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description: "Why Mini Wild Garden exists and how small outdoor spaces can make more room for wildlife.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Mini Wild Garden"
        title="Wildlife gardening without the pressure to be perfect."
        intro="Mini Wild Garden is here to make nature-friendly gardening feel achievable, even when your space, time or budget is limited."
        icon="flower"
      />

      <section className="section">
        <div className="shell about-story">
          <div className="about-story__copy">
            <span className="eyebrow">Why this site exists</span>
            <h2>Small gardens can do big things.</h2>
            <p>Advice about wildlife gardening can quickly become overwhelming. Long plant lists, expensive makeovers and perfect meadow photographs can make it feel as though a normal garden will never be enough.</p>
            <p>Mini Wild Garden takes a different approach: understand what wildlife needs, start with one realistic change and build a more connected habitat over time.</p>
            <p>That might mean a bowl of water beside a pot of flowers. It might mean leaving leaves beneath a hedge, adding a log pile or letting one patch of grass grow longer. Small actions still count.</p>
          </div>
          <div className="about-values">
            <div><span><Icon name="sprout" size={28} /></span><h3>Achievable</h3><p>Ideas designed for ordinary gardens, renters, beginners and busy people.</p></div>
            <div><span><Icon name="leaf" size={28} /></span><h3>Useful</h3><p>Every guide focuses on what the habitat or animal actually needs.</p></div>
            <div><span><Icon name="garden" size={28} /></span><h3>Flexible</h3><p>Use the space you have, whether it is a lawn, patio, balcony or doorstep.</p></div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="shell values-banner">
          <div><span className="eyebrow eyebrow--light">Our promise</span><h2>Clear guidance. Gentle encouragement. No garden shaming.</h2></div>
          <Link className="button button--light" href="/wildlife-guides">Start exploring <Icon name="arrow" size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
