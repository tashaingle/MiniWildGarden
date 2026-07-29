"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";

const links = [
  { href: "/guides", label: "Guides" },
  { href: "/seasonal-advice", label: "Seasons" },
  { href: "/planner", label: "Garden planner" },
  { href: "/about", label: "Our story" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-header__inner">
        <Link href="/" className="logo" aria-label="Mini Wild Garden home" onClick={() => setOpen(false)}>
          <Image
            src="/images/brand/mini-wild-garden-logo.png"
            alt="Mini Wild Garden"
            width={1200}
            height={647}
            priority
            sizes="(max-width: 520px) 104px, 126px"
          />
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>

        <nav id="main-navigation" className={`main-nav ${open ? "main-nav--open" : ""}`} aria-label="Main navigation">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            );
          })}
          <Link className="nav-cta" href="/saved-guides" onClick={() => setOpen(false)}>
            Saved guides <span aria-hidden="true">♡</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
