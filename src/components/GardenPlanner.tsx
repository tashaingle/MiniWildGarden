"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";
import { Icon } from "@/components/Icon";
import {
  buildPersonalPlan,
  createInitialPlannerState,
  habitatLayers,
  habitatScore,
  PLANNER_EVENT,
  PLANNER_STORAGE_KEY,
  profileSummary,
  restorePlannerState,
  safetyWarnings,
  seasonForMonth,
  type HabitatId,
  type PlannerJourneyState,
  type PlannerProfile,
  type WildlifeInterest,
} from "@/lib/planner";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const interestOptions: { value: WildlifeInterest; label: string }[] = [
  { value: "birds", label: "Birds" },
  { value: "bees", label: "Bees" },
  { value: "butterflies", label: "Butterflies" },
  { value: "hedgehogs", label: "Hedgehogs" },
  { value: "frogs", label: "Frogs" },
  { value: "insects", label: "Insects" },
];

export function GardenPlanner() {
  const [state, setState] = useState<PlannerJourneyState>(createInitialPlannerState);
  const [shareMessage, setShareMessage] = useState("");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const stored = window.localStorage.getItem(PLANNER_STORAGE_KEY);
        if (stored) setState(restorePlannerState(stored));
      } catch {
        // Start fresh if storage is unavailable or invalid.
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const score = habitatScore(state.answers);
  const allRecommendations = useMemo(
    () => buildPersonalPlan(state.profile, state.answers),
    [state.profile, state.answers],
  );
  const activePlan = useMemo(() => {
    const actions = buildPersonalPlan(state.profile, {});
    return state.activePlanIds.flatMap((id) => {
      const action = actions.find((item) => item.id === id);
      return action ? [action] : [];
    });
  }, [state.profile, state.activePlanIds]);
  const warnings = useMemo(
    () => safetyWarnings(state.profile, activePlan),
    [state.profile, activePlan],
  );
  const level = score >= 88 ? "A connected mini ecosystem" : score >= 63 ? "A strong wildlife patch" : score >= 38 ? "A promising starting point" : "A blank canvas with huge potential";
  const beforeScore = state.initialScore ?? score;
  const profileSeason = seasonForMonth(state.profile.month);

  function save(next: PlannerJourneyState) {
    setState(next);
    try {
      window.localStorage.setItem(PLANNER_STORAGE_KEY, JSON.stringify(next));
      window.dispatchEvent(new Event(PLANNER_EVENT));
    } catch {
      // The planner still works during this visit.
    }
  }

  function updateProfile<K extends keyof PlannerProfile>(key: K, value: PlannerProfile[K]) {
    save({ ...state, profile: { ...state.profile, [key]: value }, profileReady: false });
  }

  function toggleInterest(interest: WildlifeInterest) {
    const exists = state.profile.interests.includes(interest);
    const interests = exists
      ? state.profile.interests.filter((item) => item !== interest)
      : [...state.profile.interests, interest];
    updateProfile("interests", interests);
  }

  function generatePlan() {
    const recommendations = buildPersonalPlan(state.profile, state.answers).slice(0, 3);
    const baseline = state.initialScore ?? score;
    save({
      ...state,
      profileReady: true,
      activePlanIds: recommendations.map((item) => item.id),
      completedTasks: state.completedTasks.filter((id) => recommendations.some((item) => item.id === id)),
      initialScore: baseline,
      history: state.history.length ? state.history : [{ date: new Date().toISOString(), score: baseline, label: "Journey started" }],
    });
  }

  function toggleLayer(id: HabitatId) {
    const answers = { ...state.answers, [id]: !state.answers[id] };
    save({ ...state, answers });
  }

  function toggleTask(id: HabitatId) {
    const done = state.completedTasks.includes(id);
    const completedTasks = done
      ? state.completedTasks.filter((item) => item !== id)
      : [...state.completedTasks, id];
    const answers = { ...state.answers, [id]: !done };
    const nextScore = habitatScore(answers);
    const history = done
      ? state.history
      : [...state.history, { date: new Date().toISOString(), score: nextScore, label: activePlan.find((item) => item.id === id)?.title ?? "Task completed" }].slice(-8);
    save({ ...state, completedTasks, answers, history });
  }

  function reset() {
    const next = createInitialPlannerState();
    setState(next);
    try {
      window.localStorage.removeItem(PLANNER_STORAGE_KEY);
      window.dispatchEvent(new Event(PLANNER_EVENT));
    } catch {
      // Nothing else is needed.
    }
  }

  async function sharePlan() {
    const steps = activePlan.map((item, index) => `${index + 1}. ${item.title} (${item.time}, ${item.cost})`).join("\n");
    const text = `My Mini Wild Garden plan for a ${profileSummary(state.profile)}:\n${steps}\nHabitat score: ${beforeScore} ÔåÆ ${score}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "My Mini Wild Garden plan", text, url: window.location.href });
        setShareMessage("Plan shared");
      } else {
        await navigator.clipboard.writeText(text);
        setShareMessage("Plan copied");
      }
    } catch (error) {
      if ((error as Error).name !== "AbortError") setShareMessage("Copying was not available");
    }
    window.setTimeout(() => setShareMessage(""), 2500);
  }

  return (
    <div className="planner planner--journey">
      <section className="planner-setup" aria-labelledby="planner-profile-title">
        <div className="planner-setup__intro">
          <span className="eyebrow">Step 1 ┬À Your space</span>
          <h2 id="planner-profile-title">Make the advice fit your life.</h2>
          <p>Tell us what you are working with. Your answers stay on this device and can be changed at any time.</p>
        </div>

        <div className="planner-profile-grid">
          <label><span>Outdoor space</span><select value={state.profile.spaceType} onChange={(event) => updateProfile("spaceType", event.target.value as PlannerProfile["spaceType"])}><option value="garden">Garden</option><option value="courtyard">Courtyard</option><option value="balcony">Balcony</option><option value="window-boxes">Window boxes</option></select></label>
          <label><span>Approximate size</span><select value={state.profile.size} onChange={(event) => updateProfile("size", event.target.value as PlannerProfile["size"])}><option value="tiny">Tiny ┬À under 5m┬▓</option><option value="small">Small ┬À 5ÔÇô25m┬▓</option><option value="medium">Medium ┬À 25ÔÇô100m┬▓</option><option value="large">Large ┬À over 100m┬▓</option></select></label>
          <label><span>Light</span><select value={state.profile.light} onChange={(event) => updateProfile("light", event.target.value as PlannerProfile["light"])}><option value="sun">Mostly sunny</option><option value="partial-shade">Partial shade</option><option value="shade">Mostly shade</option></select></label>
          <label><span>Your home</span><select value={state.profile.tenure} onChange={(event) => updateProfile("tenure", event.target.value as PlannerProfile["tenure"])}><option value="owning">I own it</option><option value="renting">I rent it</option></select></label>
          <label><span>Time each week</span><select value={state.profile.weeklyTime} onChange={(event) => updateProfile("weeklyTime", event.target.value as PlannerProfile["weeklyTime"])}><option value="15-minutes">About 15 minutes</option><option value="one-hour">About one hour</option><option value="two-hours">About two hours</option><option value="half-day">Half a day or more</option></select></label>
          <label><span>Plan for</span><select value={state.profile.month} onChange={(event) => updateProfile("month", Number(event.target.value))}>{months.map((month, index) => <option value={index + 1} key={month}>{month}</option>)}</select></label>
        </div>

        <div className="planner-household">
          <span>Safety context</span>
          <label><input type="checkbox" checked={state.profile.children} onChange={(event) => updateProfile("children", event.target.checked)} /> Children use this space</label>
          <label><input type="checkbox" checked={state.profile.pets} onChange={(event) => updateProfile("pets", event.target.checked)} /> Pets use this space</label>
        </div>

        <fieldset className="planner-interests">
          <legend>Main wildlife interests</legend>
          <div>{interestOptions.map((item) => <label className={state.profile.interests.includes(item.value) ? "is-selected" : ""} key={item.value}><input type="checkbox" checked={state.profile.interests.includes(item.value)} onChange={() => toggleInterest(item.value)} />{item.label}</label>)}</div>
        </fieldset>
      </section>

      <section aria-labelledby="habitat-check-title">
        <div className="planner-section-heading">
          <div><span className="eyebrow">Step 2 ┬À What is here now?</span><h2 id="habitat-check-title">Check your habitat layers.</h2></div>
          <p>Be honest rather than generous. The gaps are what make your plan useful.</p>
        </div>
        <div className="planner-grid" aria-label="Wildlife garden assessment">
          {habitatLayers.map((question, index) => (
            <label className={`planner-question ${state.answers[question.id] ? "is-checked" : ""}`} key={question.id}>
              <input type="checkbox" checked={Boolean(state.answers[question.id])} onChange={() => toggleLayer(question.id)} />
              <span className="planner-question__number">{String(index + 1).padStart(2, "0")}</span>
              <span className="planner-question__check" aria-hidden="true"><Icon name="check" size={20} /></span>
              <strong>{question.title}</strong>
              <p>{question.copy}</p>
            </label>
          ))}
        </div>
        <button className="button button--dark planner-generate" type="button" onClick={generatePlan}>
          {state.profileReady ? "Refresh my plan" : "Create my personal plan"} <Icon name="arrow" size={17} />
        </button>
      </section>

      {state.profileReady && (
        <>
          <section className="planner-score" aria-live="polite">
            <div className="planner-score__ring" style={{ "--score": `${score * 3.6}deg` } as CSSProperties}>
              <span><strong>{score}</strong><small>/100</small></span>
            </div>
            <div>
              <span className="eyebrow">Your habitat score</span>
              <h2>{level}</h2>
              <p>Your plan is prioritised for a {profileSummary(state.profile)}, {state.profile.tenure === "renting" ? "with reversible changes" : "with permanent changes available"}, during {profileSeason}.</p>
              <div className="planner-score__change"><span>Started at <strong>{beforeScore}</strong></span><Icon name="arrow" size={17} /><span>Now <strong>{score}</strong></span></div>
            </div>
          </section>

          {activePlan.length ? (
            <>
              <section className="planner-weekend">
                <div><span className="eyebrow">Do this this weekend</span><h2>{activePlan[0].title}</h2><p>{activePlan[0].detail}</p></div>
                <div className="planner-weekend__facts"><span><small>Time</small>{activePlan[0].time}</span><span><small>Estimated cost</small>{activePlan[0].cost}</span><Link href={activePlan[0].href}>Open the guide <Icon name="arrow" size={16} /></Link></div>
              </section>

              <section className="planner-roadmap" aria-labelledby="roadmap-title">
                <div className="planner-section-heading"><div><span className="eyebrow">Your seasonal roadmap</span><h2 id="roadmap-title">A practical 30/60/90-day plan.</h2></div><p>Complete tasks in order, or adapt them around weather and the needs of your space.</p></div>
                <div className="planner-roadmap__grid">
                  {activePlan.map((item, index) => {
                    const done = state.completedTasks.includes(item.id);
                    return (
                      <article className={done ? "is-complete" : ""} key={item.id}>
                        <div className="planner-roadmap__top"><span>{[30, 60, 90][index]} days</span><label><input type="checkbox" checked={done} onChange={() => toggleTask(item.id)} /><i><Icon name="check" size={16} /></i>{done ? "Completed" : "Mark complete"}</label></div>
                        <h3>{item.title}</h3>
                        <p>{item.detail}</p>
                        <div className="planner-roadmap__meta"><span>{item.time}</span><span>{item.cost}</span></div>
                        <small>{item.why}</small>
                        {item.safety && <div className="planner-task-warning"><strong>Safety</strong>{item.safety}</div>}
                        <Link href={item.href}>Read the step-by-step guide <Icon name="arrow" size={15} /></Link>
                      </article>
                    );
                  })}
                </div>
              </section>
            </>
          ) : (
            <section className="planner-complete"><span className="eyebrow">Every layer covered</span><h2>Your job now is to observe.</h2><p>Maintain water and shelter, notice what visits, and avoid adding features simply for the sake of it.</p></section>
          )}

          {warnings.length > 0 && (
            <section className="planner-safety" aria-labelledby="planner-safety-title">
              <div><span aria-hidden="true">!</span><div><span className="eyebrow">Safety notes for your plan</span><h2 id="planner-safety-title">Make habitat without creating hazards.</h2></div></div>
              <ul>{warnings.map((warning) => <li key={warning}>{warning}</li>)}</ul>
            </section>
          )}

          {state.history.length > 0 && (
            <section className="planner-history">
              <div><span className="eyebrow">Progress history</span><h2>Watch the habitat build.</h2></div>
              <ol>{state.history.slice().reverse().map((record) => <li key={`${record.date}-${record.label}`}><time>{new Date(record.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</time><span>{record.label}</span><strong>{record.score}/100</strong></li>)}</ol>
            </section>
          )}

          <section className="planner-next">
            <div><span className="eyebrow">Keep your plan</span><h2>Take it into the garden.</h2><p>Your progress is saved on this device. Print a clean checklist or share the three-step plan.</p></div>
            <div className="planner-actions">
              <button className="button button--dark" type="button" onClick={() => window.print()}>Print my plan</button>
              <button className="button button--outline" type="button" onClick={sharePlan}>Share my plan</button>
              <button type="button" onClick={reset}>Start again</button>
              <span role="status" aria-live="polite">{shareMessage}</span>
            </div>
          </section>

          <section className="planner-follow-on" aria-label="What to do next">
            <div>
              <span className="eyebrow">Keep going</span>
              <h2>Turn this plan into a habit.</h2>
              <p>Track progress, match the season, and save guides you want to return to.</p>
            </div>
            <div className="planner-follow-on__grid">
              <Link href="/my-garden" className="planner-follow-card">
                <Icon name="check" size={24} />
                <strong>My Garden</strong>
                <p>See your score, plan and wildlife notes in one place on this device.</p>
                <span>Open My Garden <Icon name="arrow" size={16} /></span>
              </Link>
              <Link href={`/seasonal-advice/${profileSeason}`} className="planner-follow-card">
                <Icon name="sun" size={24} />
                <strong>This season&apos;s jobs</strong>
                <p>Match your next steps to what wildlife needs right now.</p>
                <span>Seasonal advice <Icon name="arrow" size={16} /></span>
              </Link>
              <Link href="/guides?time=quick" className="planner-follow-card">
                <Icon name="clock" size={24} />
                <strong>Quick wins</strong>
                <p>If time is short, start with changes you can finish in under half an hour.</p>
                <span>Browse quick projects <Icon name="arrow" size={16} /></span>
              </Link>
            </div>
          </section>
        </>
      )}

      {!state.profileReady && allRecommendations.length === 0 && (
        <p className="planner-ready-note">You already have every core habitat layer. Generate your plan for maintenance and safety guidance.</p>
      )}
    </div>
  );
}
