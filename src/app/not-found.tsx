import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <main className="not-found">
      <Image src="/images/hedgehog.webp" alt="A hedgehog peeking through a garden fence" fill priority sizes="100vw" />
      <span className="not-found__shade" />
      <div className="not-found__inner">
        <span className="eyebrow eyebrow--light">404 · Off the path</span>
        <h1>This trail has gone a little wild.</h1>
        <p>The page may have moved, but there is plenty more habitat to explore.</p>
        <Link className="button button--lime" href="/">Return to the garden <Icon name="arrow" size={18} /></Link>
      </div>
    </main>
  );
}
