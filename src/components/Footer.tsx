import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

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
            <Link href="/wildlife-guides">Wildlife guides</Link>
            <Link href="/garden-guides">Garden projects</Link>
            <Link href="/seasonal-advice">Seasonal advice</Link>
          </div>
          <div>
            <strong>Mini Wild Garden</strong>
            <Link href="/about">Our story</Link>
            <Link href="/contact">Contact</Link>
            <a href="#top">Back to the canopy ↑</a>
          </div>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <Link href="/" className="footer-logo"><BrandMark compact /><span>Mini Wild Garden</span></Link>
        <span>© {new Date().getFullYear()} Mini Wild Garden</span>
        <span>Made in Britain for the wildlife next door.</span>
      </div>
    </footer>
  );
}
