import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Ask a wildlife gardening question, share your garden story or suggest a future Mini Wild Garden guide.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Tell us what is happening in your patch."
        intro="Ask a question, share a garden visitor or suggest the guide you would love to read next."
        image="/images/butterfly.webp"
        imageAlt="A butterfly feeding from a bright garden flower"
        focal="48% 48%"
      />
      <section className="section contact-section">
        <div className="shell contact-grid">
          <div className="contact-copy" data-reveal>
            <span className="eyebrow">Write to Mini Wild Garden</span>
            <h2>Every wild corner has a story.</h2>
            <p>The form opens your normal email app so you can review the message before sending it.</p>
            <a className="contact-email" href="mailto:hello@miniwildgarden.co.uk">hello@miniwildgarden.co.uk <span>↗</span></a>
            <div className="contact-note">
              <strong>Useful things to include</strong>
              <p>Your rough location, the size of your space, how much sun it gets and any wildlife you have already noticed.</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
