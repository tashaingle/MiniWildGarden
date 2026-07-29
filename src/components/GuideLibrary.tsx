"use client";

import Image from "next/image";
import Link from "next/link";
import type { ChangeEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import type { LibraryItem } from "@/lib/library";
import { SaveGuideButton } from "@/components/SaveGuideButton";
import { Icon } from "@/components/Icon";

type KindFilter = "all" | "wildlife" | "project";
type EffortFilter = "all" | LibraryItem["effort"];

const effortLabels: Record<LibraryItem["effort"], string> = {
  quick: "Under 30 minutes",
  afternoon: "An afternoon",
  weekend: "A weekend",
  ongoing: "Ongoing",
};

export function GuideLibrary({ items, initialKind = "all" }: { items: LibraryItem[]; initialKind?: KindFilter }) {
  const [ready, setReady] = useState(false);
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<KindFilter>(initialKind);
  const [difficulty, setDifficulty] = useState("all");
  const [effort, setEffort] = useState<EffortFilter>("all");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQuery(params.get("q") ?? "");
    setKind((params.get("type") as KindFilter) || initialKind);
    setDifficulty(params.get("difficulty") ?? "all");
    setEffort((params.get("time") as EffortFilter) || "all");
    setCategory(params.get("category") ?? "all");
    setReady(true);
  }, [initialKind]);

  useEffect(() => {
    if (!ready) return;
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (kind !== "all") params.set("type", kind);
    if (difficulty !== "all") params.set("difficulty", difficulty);
    if (effort !== "all") params.set("time", effort);
    if (category !== "all") params.set("category", category);
    const next = `${window.location.pathname}${params.size ? `?${params.toString()}` : ""}`;
    window.history.replaceState({}, "", next);
  }, [query, kind, difficulty, effort, category, ready]);

  const categories = useMemo(
    () => Array.from(new Set(items.map((item) => item.category))).sort((a, b) => a.localeCompare(b)),
    [items],
  );

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return items.filter((item) => {
      const text = [item.title, item.excerpt, item.category, item.intro, ...item.benefits].join(" ").toLowerCase();
      return (
        (!needle || text.includes(needle)) &&
        (kind === "all" || item.kind === kind) &&
        (difficulty === "all" || item.difficulty === difficulty) &&
        (effort === "all" || item.effort === effort) &&
        (category === "all" || item.category === category)
      );
    });
  }, [items, query, kind, difficulty, effort, category]);

  const quickWins = useMemo(() => items.filter((item) => item.effort === "quick").slice(0, 4), [items]);
  const isDefault = !query && kind === initialKind && difficulty === "all" && effort === "all" && category === "all";

  function reset() {
    setQuery("");
    setKind(initialKind);
    setDifficulty("all");
    setEffort("all");
    setCategory("all");
  }

  return (
    <div className="guide-library">
      {isDefault && initialKind === "all" && (
        <section className="quick-wins" aria-labelledby="quick-wins-title">
          <div className="quick-wins__heading">
            <div>
              <span className="eyebrow">Quick wins</span>
              <h2 id="quick-wins-title">Help wildlife before the kettle boils.</h2>
            </div>
            <p>Small, practical changes that can be started in under half an hour.</p>
          </div>
          <div className="quick-wins__grid">
            {quickWins.map((item, index) => (
              <Link href={item.href} key={item.slug} className="quick-win-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><strong>{item.title}</strong><small>{item.time}</small></div>
                <Icon name="arrow" size={17} />
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="library-panel" aria-labelledby="guide-library-title">
        <div className="library-panel__intro">
          <div>
            <span className="eyebrow">Find your next change</span>
            <h2 id="guide-library-title">Search the field guide.</h2>
          </div>
          <p>Search by animal, habitat or task, then narrow the list to match the time and energy you have.</p>
        </div>

        <div className="library-search">
          <label htmlFor="guide-search">Search every guide</label>
          <div>
            <Icon name="search" size={21} />
            <input
              id="guide-search"
              type="search"
              value={query}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
              placeholder="Try pond, bees, balcony or shelter…"
            />
            {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear search">×</button>}
          </div>
        </div>

        <div className="library-filters" aria-label="Guide filters">
          <label>
            <span>Guide type</span>
            <select value={kind} onChange={(event: ChangeEvent<HTMLSelectElement>) => setKind(event.target.value as KindFilter)}>
              <option value="all">All guides</option>
              <option value="wildlife">Wildlife guides</option>
              <option value="project">Garden projects</option>
            </select>
          </label>
          <label>
            <span>Difficulty</span>
            <select value={difficulty} onChange={(event: ChangeEvent<HTMLSelectElement>) => setDifficulty(event.target.value)}>
              <option value="all">Any difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Weekend project">Weekend project</option>
              <option value="Ongoing">Ongoing</option>
            </select>
          </label>
          <label>
            <span>Time available</span>
            <select value={effort} onChange={(event: ChangeEvent<HTMLSelectElement>) => setEffort(event.target.value as EffortFilter)}>
              <option value="all">Any amount of time</option>
              {Object.entries(effortLabels).map(([value, label]) => <option value={value} key={value}>{label}</option>)}
            </select>
          </label>
          <label>
            <span>Topic</span>
            <select value={category} onChange={(event: ChangeEvent<HTMLSelectElement>) => setCategory(event.target.value)}>
              <option value="all">Every topic</option>
              {categories.map((item) => <option value={item} key={item}>{item}</option>)}
            </select>
          </label>
        </div>

        <div className="library-results-bar" aria-live="polite">
          <strong>{filtered.length} {filtered.length === 1 ? "guide" : "guides"}</strong>
          <span>{query ? `matching “${query}”` : "ready to explore"}</span>
          {!isDefault && <button type="button" onClick={reset}>Reset filters</button>}
        </div>

        {filtered.length > 0 ? (
          <div className="library-grid">
            {filtered.map((item) => (
              <article className="library-card" key={item.slug}>
                <Link href={item.href} className="library-card__image">
                  <Image src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" style={{ objectPosition: item.image.focal }} />
                  <span className="library-card__shade" />
                  <span className="library-card__kind">{item.kind === "wildlife" ? "Wildlife guide" : "Garden project"}</span>
                  <span className="library-card__arrow"><Icon name="arrow" size={18} /></span>
                </Link>
                <div className="library-card__body">
                  <div className="library-card__topline"><span>{item.category}</span><SaveGuideButton slug={item.slug} compact /></div>
                  <Link href={item.href}><h3>{item.title}</h3></Link>
                  <p>{item.excerpt}</p>
                  <div className="library-card__benefits">{item.benefits.slice(0, 3).map((benefit) => <span key={benefit}>{benefit}</span>)}</div>
                  <div className="library-card__meta"><span>{item.readingMinutes} min read</span><i /><span>{effortLabels[item.effort]}</span></div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="library-empty">
            <span aria-hidden="true">⌕</span>
            <h3>No guide matches those filters yet.</h3>
            <p>Try a broader word or clear one of the filters. Wildlife rarely fits into just one category.</p>
            <button className="button button--dark" type="button" onClick={reset}>Show every guide</button>
          </div>
        )}
      </section>
    </div>
  );
}
