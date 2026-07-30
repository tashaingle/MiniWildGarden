"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Icon } from "@/components/Icon";

const links = [
  { href: "/start-this-week", label: "Start here" },
  { href: "/guides", label: "Guides" },
  { href: "/seasonal-advice", label: "Seasons" },
  { href: "/planner", label: "Planner" },
  { href: "/about", label: "Our story" },
];

const MOBILE_MQ = "(max-width: 840px)";

export function Header() {
  const pathname = usePathname();
  const navId = useId();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer when the viewport leaves the mobile breakpoint.
  useEffect(() => {
    const media = window.matchMedia(MOBILE_MQ);
    const onChange = () => {
      if (!media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  // Escape, body scroll lock, and basic focus management while the mobile menu is open.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !navRef.current) return;

      const focusable = navRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      // Keep Tab cycling between the menu button and nav links while open on mobile.
      if (event.shiftKey) {
        if (active === first || active === menuButtonRef.current) {
          event.preventDefault();
          if (active === first) menuButtonRef.current?.focus();
          else last.focus();
        }
      } else if (active === last || active === menuButtonRef.current) {
        event.preventDefault();
        if (active === last) menuButtonRef.current?.focus();
        else first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    // Move focus into the menu for keyboard users.
    const firstLink = navRef.current?.querySelector<HTMLElement>("a[href]");
    firstLink?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closeMenu]);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""} ${open ? "site-header--menu-open" : ""}`}>
      <div className="site-header__inner">
        <Link href="/" className="logo" aria-label="Mini Wild Garden home" onClick={closeMenu}>
          <Image
            src="/images/brand/mini-wild-garden-logo.png"
            alt="Mini Wild Garden"
            width={1200}
            height={647}
            priority
            sizes="(max-width: 520px) 100px, 118px"
          />
        </Link>

        <button
          ref={menuButtonRef}
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls={navId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>

        <nav
          ref={navRef}
          id={navId}
          className={`main-nav ${open ? "main-nav--open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} onClick={closeMenu}>
                {link.label}
              </Link>
            );
          })}
          <Link className="nav-cta" href="/my-garden" onClick={closeMenu}>
            My Garden
          </Link>
        </nav>
      </div>
    </header>
  );
}
