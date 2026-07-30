"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { Icon } from "@/components/Icon";
import { EVENT_NAME as SAVED_EVENT, STORAGE_KEY as SAVED_STORAGE_KEY } from "@/components/SaveGuideButton";
import type { LibraryItem } from "@/lib/library";
import {
  seasonalFocus,
  SIGHTINGS_EVENT,
  SIGHTINGS_STORAGE_KEY,
  sortSightings,
  type SightingCategory,
  type WildlifeSighting,
} from "@/lib/myGarden";
import {
  buildPersonalPlan,
  createInitialPlannerState,
  habitatScore,
  PLANNER_EVENT,
  PLANNER_STORAGE_KEY,
  profileSummary,
  restorePlannerState,
  type PlannerJourneyState,
} from "@/lib/planner";

const categories: { value: SightingCategory; label: string }[] = [
  { value: "bird", label: "Bird" },
  { value: "bee", label: "Bee" },
  { value: "butterfly", label: "Butterfly or moth" },
  { value: "hedgehog", label: "Hedgehog" },
  { value: "frog", label: "Frog or amphibian" },
  { value: "insect", label: "Other insect" },
  { value: "other", label: "Something else" },
];

function readStringArray(key: string) {
  const value = window.localStorage.getItem(key);
  return value ? JSON.parse(value) as string[] : [];
}

function readSightings() {
  const value = window.localStorage.getItem(SIGHTINGS_STORAGE_KEY);
  return value ? sortSightings(JSON.parse(value) as WildlifeSighting[]) : [];
}

export function MyGardenDashboard({ items }: { items: LibraryItem[] }) {
  const [planner, setPlanner] = useState<PlannerJourneyState>(createInitialPlannerState);
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [sightings, setSightings] = useState<WildlifeSighting[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [journalMessage, setJournalMessage] = useState("");

  useEffect(() => {
    const sync = () => {
      try {
        const plannerValue = window.localStorage.getItem(PLANNER_STORAGE_KEY);
        setPlanner(plannerValue ? restorePlannerState(plannerValue) : createInitialPlannerState());
        setSavedSlugs(readStringArray(SAVED_STORAGE_KEY));
        setSightings(readSightings());
      } catch {
        // Keep the empty dashboard usable when storage is unavailable.
      }
      setHydrated(true);
    };
    const frame = window.requestAnimationFrame(sync);
    window.addEventListener(PLANNER_EVENT, sync);
    window.addEventListener(SAVED_EVENT, sync);
    window.addEventListener(SIGHTINGS_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener(PLANNER_EVENT, sync);
      window.removeEventListener(SAVED_EVENT, sync);
      window.removeEventListener(SIGHTINGS_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const score = habitatScore(planner.answers);
  const beforeScore = planner.initialScore ?? score;
  const planActions = useMemo(() => buildPersonalPlan(planner.profile, {}), [planner.profile]);
  const activePlan = useMemo(
    () => planner.activePlanIds.flatMap((id) => {
      const action = planActions.find((item) => item.id === id);
      return action ? [action] : [];
    }),
    [planner.activePlanIds, planActions],
  );
  const nextAction = activePlan.find((item) => !planner.completedTasks.includes(item.id));
  const savedItems = useMemo(
    () => savedSlugs.flatMap((slug) => {
      const item = items.find((guide) => guide.slug === slug);
      return item ? [item] : [];
    }),
    [items, savedSlugs],
  );
  const focus = seasonalFocus(planner.profile);

  function persistPlanner(next: PlannerJourneyState) {
    setPlanner(next);
    try {
      window.localStorage.setItem(PLANNER_STORAGE_KEY, JSON.stringify(next));
      window.dispatchEvent(new Event(PLANNER_EVENT));
    } catch {
      // Keep the current-page update when storage is unavailable.
    }
  }

  function completeNextAction() {
    if (!nextAction) return;
    const answers = { ...planner.answers, [nextAction.id]: true };
    const nextScore = habitatScore(answers);
    persistPlanner({
      ...planner,
      answers,
      completedTasks: [...new Set([...planner.completedTasks, nextAction.id])],
      history: [...planner.history, {
        date: new Date().toISOString(),
        score: nextScore,
        label: nextAction.title,
      }].slice(-8),
    });
  }

  function saveSightings(next: WildlifeSighting[]) {
    const sorted = sortSightings(next);
    setSightings(sorted);
    try {
      window.localStorage.setItem(SIGHTINGS_STORAGE_KEY, JSON.stringify(sorted));
      window.dispatchEvent(new Event(SIGHTINGS_EVENT));
    } catch {
      // Keep the journal usable for this visit.
    }
  }

  function addSighting(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const species = String(form.get("species") ?? "").trim().slice(0, 80);
    if (species.length < 2) {
      setJournalMessage("Please name what you saw.");
      return;
    }
    const now = new Date();
    const observedAt = String(form.get("observedAt") ?? "") || now.toISOString().slice(0, 10);
    const sighting: WildlifeSighting = {
      id: crypto.randomUUID(),
      species,
      category: String(form.get("category") ?? "other") as SightingCategory,
      location: String(form.get("location") ?? "").trim().slice(0, 80),
      notes: String(form.get("notes") ?? "").trim().slice(0, 500),
      observedAt,
      createdAt: now.toISOString(),
    };
    saveSightings([sighting, ...sightings]);
    formElement.reset();
    setJournalMessage("Sighting added to your garden journal.");
  }

  function removeSighting(id: string) {
    saveSightings(sightings.filter((item) => item.id !== id));
    setJournalMessage("Sighting removed.");
  }

  if (!hydrated) {
    return <div className="my-garden-loading" role="status">Opening your garden notebook…</div>;
  }

  if (!planner.profileReady) {
    return (
      <section className="my-garden-empty">
        <span className="eyebrow">Your garden starts with a plan</span>
        <h2>Build your first habitat journey.</h2>
        <p>Complete the personalised planner once and this dashboard will keep your next task, score and seasonal progress together.</p>
        <Link className="button button--dark" href="/planner">Create my garden plan <Icon name="arrow" size={17} /></Link>
      </section>
    );
  }

  return (
    <div className="my-garden-dashboard">
      <section className="my-garden-overview">
        <div>
          <span className="eyebrow eyebrow--light">Your living garden record</span>
          <h2>{profileSummary(planner.profile)}</h2>
          <p>A private dashboard saved on this device. Keep the momentum going one useful action and one observation at a time.</p>
          <Link href="/planner">Edit garden profile <Icon name="arrow" size={15} /></Link>
        </div>
        <div className="my-garden-score" style={{ "--score": `${score * 3.6}deg` } as CSSProperties}>
          <span><strong>{score}</strong><small>/100</small></span>
        </div>
        <dl>
          <div><dt>Score gained</dt><dd>+{Math.max(0, score - beforeScore)}</dd></div>
          <div><dt>Plan tasks done</dt><dd>{planner.completedTasks.length}/{planner.activePlanIds.length}</dd></div>
          <div><dt>Sightings logged</dt><dd>{sightings.length}</dd></div>
          <div><dt>Guides saved</dt><dd>{savedItems.length}</dd></div>
        </dl>
      </section>

      <div className="my-garden-primary-grid">
        <section className="my-garden-next">
          <span className="eyebrow">Your next best action</span>
          {nextAction ? (
            <>
              <h2>{nextAction.title}</h2>
              <p>{nextAction.detail}</p>
              <div><span>{nextAction.time}</span><span>{nextAction.cost}</span></div>
              {nextAction.safety && <aside><strong>Safety note</strong>{nextAction.safety}</aside>}
              <footer>
                <button className="button button--dark" type="button" onClick={completeNextAction}>Mark complete</button>
                <Link href={nextAction.href}>Open guide <Icon name="arrow" size={15} /></Link>
              </footer>
            </>
          ) : (
            <>
              <h2>Your three-step plan is complete.</h2>
              <p>Refresh the planner to choose the next habitat gaps, or spend time observing what has changed.</p>
              <Link className="button button--dark" href="/planner">Refresh my plan</Link>
            </>
          )}
        </section>

        <section className={`my-garden-season my-garden-season--${focus.season}`}>
          <span className="eyebrow">{focus.season} focus</span>
          <h2>{focus.title}</h2>
          <p>{focus.copy}</p>
          <ul>{focus.tasks.map((task) => <li key={task}><Icon name="check" size={15} />{task}</li>)}</ul>
          <Link href={focus.href}>See all {focus.season} advice <Icon name="arrow" size={15} /></Link>
        </section>
      </div>

      <section className="my-garden-progress">
        <div><span className="eyebrow">Habitat progress</span><h2>Your garden is changing.</h2><p>The score is a planning prompt, not a scientific survey. The history helps you notice momentum.</p></div>
        <div className="my-garden-progress__bar"><span style={{ width: `${score}%` }} /></div>
        <ol>{planner.history.slice(-5).reverse().map((record) => <li key={`${record.date}-${record.label}`}><time>{new Date(record.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</time><span>{record.label}</span><strong>{record.score}/100</strong></li>)}</ol>
      </section>

      <section className="my-garden-journal">
        <div className="my-garden-journal__heading"><div><span className="eyebrow">Wildlife journal</span><h2>What visited today?</h2></div><p>Record simple observations. A few notes over time can reveal which changes are working.</p></div>
        <div className="my-garden-journal__grid">
          <form onSubmit={addSighting}>
            <label><span>What did you see?</span><input name="species" maxLength={80} placeholder="e.g. robin, bumblebee, frog" required /></label>
            <div><label><span>Type</span><select name="category">{categories.map((item) => <option value={item.value} key={item.value}>{item.label}</option>)}</select></label><label><span>Date <small>optional</small></span><input name="observedAt" type="date" /></label></div>
            <label><span>Where? <small>optional</small></span><input name="location" maxLength={80} placeholder="Pond edge, balcony planter…" /></label>
            <label><span>Notes <small>optional</small></span><textarea name="notes" maxLength={500} rows={3} placeholder="What was it doing?" /></label>
            <button className="button button--dark" type="submit">Add sighting</button>
            <p role="status" aria-live="polite">{journalMessage}</p>
          </form>
          <div className="my-garden-sightings">
            {sightings.length ? sightings.slice(0, 6).map((sighting) => (
              <article key={sighting.id}>
                <div><span>{sighting.category}</span><time>{new Date(`${sighting.observedAt}T12:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</time></div>
                <h3>{sighting.species}</h3>
                {sighting.location && <strong>{sighting.location}</strong>}
                {sighting.notes && <p>{sighting.notes}</p>}
                <button type="button" onClick={() => removeSighting(sighting.id)}>Remove</button>
              </article>
            )) : <div className="my-garden-sightings__empty"><span aria-hidden="true">◎</span><h3>Your first visitor goes here.</h3><p>Add anything you notice, even a common bird or bee is useful evidence.</p></div>}
          </div>
        </div>
      </section>

      <section className="my-garden-saved">
        <div className="my-garden-journal__heading"><div><span className="eyebrow">Your field shelf</span><h2>Saved for this garden.</h2></div><Link href="/saved-guides">View all saved guides <Icon name="arrow" size={15} /></Link></div>
        {savedItems.length ? (
          <div>{savedItems.slice(0, 3).map((item) => <Link href={item.href} key={item.slug}><figure><Image src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 760px) 100vw, 33vw" style={{ objectPosition: item.image.focal }} /></figure><span>{item.category}</span><h3>{item.title}</h3></Link>)}</div>
        ) : (
          <div className="my-garden-saved__empty"><p>Save useful guides and they will appear here beside your plan.</p><Link className="button button--dark" href="/guides">Browse the guide library</Link></div>
        )}
      </section>
    </div>
  );
}
