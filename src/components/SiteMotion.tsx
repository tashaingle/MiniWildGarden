"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    let observer: IntersectionObserver | null = null;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8%", threshold: 0.12 },
      );

      revealItems.forEach((item) => observer?.observe(item));
    }

    const cleanups: Array<() => void> = [];

    // Pointer parallax is decorative only; skip entirely when reduced motion is preferred.
    if (!reducedMotion) {
      const parallaxRoots = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax-root]"));
      parallaxRoots.forEach((element) => {
        const onPointerMove = (event: PointerEvent) => {
          const rect = element.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          element.style.setProperty("--pointer-x", x.toFixed(3));
          element.style.setProperty("--pointer-y", y.toFixed(3));
        };

        const onPointerLeave = () => {
          element.style.setProperty("--pointer-x", "0");
          element.style.setProperty("--pointer-y", "0");
        };

        element.addEventListener("pointermove", onPointerMove);
        element.addEventListener("pointerleave", onPointerLeave);

        cleanups.push(() => {
          element.removeEventListener("pointermove", onPointerMove);
          element.removeEventListener("pointerleave", onPointerLeave);
        });
      });
    }

    // Keep the last two words of every heading together so titles never end
    // on a single stranded word. Re-applied when headings re-render.
    document.querySelectorAll<HTMLElement>("h1, h2, h3").forEach(joinLastWords);
    const headingObserver = new MutationObserver((mutations) => {
      mutations.forEach(({ target }) => {
        const element = target instanceof Element ? target : target.parentElement;
        const heading = element?.closest<HTMLElement>("h1, h2, h3");
        if (heading) joinLastWords(heading);
        else if (element) element.querySelectorAll<HTMLElement>("h1, h2, h3").forEach(joinLastWords);
      });
    });
    headingObserver.observe(document.body, { childList: true, subtree: true, characterData: true });

    return () => {
      observer?.disconnect();
      headingObserver.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [pathname]);

  return null;
}

function joinLastWords(heading: HTMLElement) {
  const text = heading.textContent ?? "";
  // One- and two-word titles would become a single unbreakable unit.
  if (text.trim().split(/\s+/).length < 3) return;

  const nodes: Text[] = [];
  const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);

  let seenWord = false;
  for (let n = nodes.length - 1; n >= 0; n -= 1) {
    const value = nodes[n].data;
    for (let i = value.length - 1; i >= 0; i -= 1) {
      if (value[i] === " " && seenWord) return;
      if (/\s/.test(value[i])) {
        if (!seenWord) continue;
        nodes[n].data = `${value.slice(0, i)} ${value.slice(i + 1)}`;
        return;
      }
      seenWord = true;
    }
  }
}
