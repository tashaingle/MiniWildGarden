import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Our story",
  description: "Why Mini Wild Garden exists and the practical, evidence-informed approach behind every wildlife gardening guide.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our story"
        title="Wildlife gardening without the guilt, jargon or grand redesign."
        intro="Mini Wild Garden exists to make helping nature feel beautiful, achievable and relevant to the space you actually have."
        image="/images/uk-garden.webp"
        imageAlt="A lush British garden with flowers, trees and a wildlife pond"
        focal="50% 52%"
      />

      <section className="section about-editorial">
        <div className="shell about-editorial__grid">
          <div className="about-editorial__statement" data-reveal>
            <span className="eyebrow">Why this matters</span>
            <h2>Nature does not stop at the edge of a reserve.</h2>
          </div>
          <div className="about-editorial__copy" data-reveal>
            <p>It moves through fences, rooftops, pots, lawns, drains, hedges and forgotten corners. Our gardens can become stepping stones between larger habitats, even when they are small.</p>
            <p>Created by Tash Card, an Environmental Science graduate and lifelong animal lover, Mini Wild Garden turns ecological principles into calm, practical actions that fit ordinary British homes.</p>
          </div>
        </div>
      </section>

      <section className="about-collage">
        <div className="shell about-collage__grid">
          <figure className="about-collage__main" data-reveal><Image src="/images/hands-gardening.webp" alt="Hands planting seedlings in a wildlife-friendly garden" fill sizes="(max-width: 800px) 100vw, 62vw" /></figure>
          <figure className="about-collage__side" data-reveal><Image src="/images/bee.webp" alt="A bee collecting pollen from a yellow flower" fill sizes="(max-width: 800px) 100vw, 30vw" /></figure>
          <blockquote data-reveal>“The goal is not a perfect garden. It is a garden with more relationships.”</blockquote>
        </div>
      </section>

      <section className="section principles">
        <div className="shell">
          <div className="section-heading" data-reveal><div><span className="eyebrow">Our principles</span><h2>Beautiful. Useful. Alive.</h2></div><p>Every guide is built around a few simple ideas that work together.</p></div>
          <div className="principles-grid">
            <article data-reveal><span>01</span><Icon name="sprout" size={32} /><h3>Start small</h3><p>Make one achievable change, observe what happens and build from there.</p></article>
            <article data-reveal><span>02</span><Icon name="garden" size={32} /><h3>Connect habitats</h3><p>Food, water, shelter and safe movement are strongest when they form a network.</p></article>
            <article data-reveal><span>03</span><Icon name="leaf" size={32} /><h3>Work with nature</h3><p>Choose the right plants, avoid unnecessary chemicals and allow natural processes time.</p></article>
            <article data-reveal><span>04</span><Icon name="bee" size={32} /><h3>Share the garden</h3><p>Chewed leaves, fallen seeds and a little untidiness are signs that the space is being used.</p></article>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <Image src="/images/garden-bed.webp" alt="A flower-rich wildlife garden surrounding a pond" fill sizes="100vw" />
        <span className="about-cta__shade" />
        <div className="shell about-cta__content" data-reveal>
          <span className="eyebrow eyebrow--light">Begin with curiosity</span>
          <h2>What is already living in your garden?</h2>
          <Link className="button button--lime" href="/wildlife-guides">Meet your visitors <Icon name="arrow" size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
