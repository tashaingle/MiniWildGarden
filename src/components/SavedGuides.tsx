"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { LibraryItem } from "@/lib/library";
import { EVENT_NAME, SaveGuideButton, STORAGE_KEY } from "@/components/SaveGuideButton";
import { Icon } from "@/components/Icon";

function readSaved(): string[] {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value ? JSON.parse(value) : [];
  } catch {
    return [];
  }
}

export function SavedGuides({ items }: { items: LibraryItem[] }) {
  const [slugs, setSlugs] = useState<string[]>([]);

  useEffect(() => {
    const update = () => setSlugs(readSaved());
    update();
    window.addEventListener(EVENT_NAME, update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener(EVENT_NAME, update);
      window.removeEventListener("storage", update);
    };
  }, []);

  const saved = useMemo(() => slugs.flatMap((slug) => {
    const item = items.find((guide) => guide.slug === slug);
    return item ? [item] : [];
  }), [items, slugs]);

  if (saved.length === 0) {
    return (
      <div className="saved-empty">
        <span aria-hidden="true">♡</span>
        <h2>Your field notebook is empty.</h2>
        <p>Tap the heart on any guide to keep it here. Saved guides stay on this device and do not require an account.</p>
        <Link className="button button--dark" href="/guides">Browse the guide library <Icon name="arrow" size={18} /></Link>
      </div>
    );
  }

  return (
    <div className="saved-guides-grid">
      {saved.map((item) => (
        <article className="saved-guide-card" key={item.slug}>
          <Link href={item.href} className="saved-guide-card__image">
            <Image src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 760px) 100vw, 33vw" style={{ objectPosition: item.image.focal }} />
            <span />
          </Link>
          <div>
            <div className="saved-guide-card__top"><small>{item.kind === "wildlife" ? "Wildlife guide" : "Garden project"}</small><SaveGuideButton slug={item.slug} compact /></div>
            <Link href={item.href}><h3>{item.title}</h3></Link>
            <p>{item.excerpt}</p>
            <Link className="text-link" href={item.href}>Open guide <span>→</span></Link>
          </div>
        </article>
      ))}
    </div>
  );
}
