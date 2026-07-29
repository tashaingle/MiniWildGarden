import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Mini Wild Garden with a question, correction or guide suggestion.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Questions, ideas or a creature you want us to cover?"
        intro="Mini Wild Garden is growing. Send a guide suggestion, flag something that needs updating or share the wildlife project you have started."
        icon="mail"
      />
      <section className="section">
        <div className="shell contact-grid">
          <div className="contact-copy">
            <span className="eyebrow">Say hello</span>
            <h2>We would love to hear what would help.</h2>
            <p>Use the form to open a prepared email in your usual mail app. Before launch, replace the email address below if you prefer to use a different inbox.</p>
            <a className="contact-email" href="mailto:hello@miniwildgarden.co.uk"><span><Icon name="mail" size={24} /></span>hello@miniwildgarden.co.uk</a>
          </div>

          <form className="contact-form" action="mailto:hello@miniwildgarden.co.uk" method="post" encType="text/plain">
            <label>Name<input name="name" type="text" autoComplete="name" required /></label>
            <label>Email<input name="email" type="email" autoComplete="email" required /></label>
            <label>What is your message about?
              <select name="subject" defaultValue="Guide suggestion">
                <option>Guide suggestion</option>
                <option>Question</option>
                <option>Correction or update</option>
                <option>Something else</option>
              </select>
            </label>
            <label>Message<textarea name="message" rows={7} required /></label>
            <button className="button" type="submit">Prepare email <Icon name="arrow" size={18} /></button>
          </form>
        </div>
      </section>
    </main>
  );
}
