import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-orbit" aria-hidden="true"><span /><span /><span /></div>
      <div className="shell site-footer__top">
        <div className="footer-statement" data-reveal>
          <span className="eyebrow eyebrow--light">A garden is never just a garden</span>
          <h2>Make one corner wilder.</h2>
          <p>Practical, beautiful ideas for gardens, balconies and every tiny patch in between.</p>
        </div>
        <div className="footer-nav">
          <div>
            <strong>Explore</strong>
            <Link href="/guides">All guides</Link>
            <Link href="/wildlife-guides">Wildlife guides</Link>
            <Link href="/garden-guides">Garden projects</Link>
            <Link href="/seasonal-advice">Seasonal advice</Link>
            <Link href="/planner">Garden planner</Link>
          </div>
          <div>
            <strong>Field notes</strong>
            <Link href="/saved-guides">Saved guides</Link>
            <Link href="/faqs">Common questions</Link>
            <Link href="/glossary">Glossary</Link>
            <Link href="/about">Our story</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <strong>Site information</strong>
            <Link href="/privacy">Privacy</Link>
            <Link href="/cookies">Cookies &amp; preferences</Link>
            <a href="#top">Back to the canopy ↑</a>
          </div>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <Link href="/" className="footer-logo" aria-label="Mini Wild Garden home">
          <Image
            src="/images/brand/mini-wild-garden-logo.png"
            alt="Mini Wild Garden"
            width={1200}
            height={647}
            sizes="180px"
          />
        </Link>
        <span>© {new Date().getFullYear()} Mini Wild Garden</span>
        <span>Made in Britain for the wildlife next door.</span>
      </div>
    </footer>
  );
}
