"use client";

import type { ChangeEvent } from "react";
import { useMemo, useState } from "react";

export type GlossaryTerm = {
  term: string;
  definition: string;
};

export function GlossarySearch({ terms }: { terms: GlossaryTerm[] }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return needle
      ? terms.filter((item) => `${item.term} ${item.definition}`.toLowerCase().includes(needle))
      : terms;
  }, [query, terms]);

  const grouped = useMemo(() => {
    return filtered.reduce<Record<string, GlossaryTerm[]>>((groups, item) => {
      const letter = item.term[0].toUpperCase();
      groups[letter] = [...(groups[letter] ?? []), item];
      return groups;
    }, {});
  }, [filtered]);

  return (
    <div className="glossary-search">
      <label htmlFor="glossary-query">Search wildlife gardening terms</label>
      <input id="glossary-query" type="search" value={query} onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)} placeholder="Try nectar, marginal plant or hibernation…" />
      <p aria-live="polite">{filtered.length} {filtered.length === 1 ? "term" : "terms"}</p>
      {filtered.length ? (
        <div className="glossary-groups">
          {Object.entries(grouped).sort(([a], [b]) => a.localeCompare(b)).map(([letter, items]) => (
            <section key={letter}>
              <span>{letter}</span>
              <dl>
                {items.map((item) => <div key={item.term}><dt>{item.term}</dt><dd>{item.definition}</dd></div>)}
              </dl>
            </section>
          ))}
        </div>
      ) : (
        <div className="glossary-empty"><h2>No matching term yet.</h2><p>Try a shorter or more general word.</p></div>
      )}
    </div>
  );
}
