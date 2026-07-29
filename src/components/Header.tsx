"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { Icon } from "@/components/Icon";

const links = [
  { href: "/wildlife-guides", label: "Wildlife" },
  { href: "/garden-guides", label: "Projects" },
  { href: "/seasonal-advice", label: "Seasons" },
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
          <BrandMark compact />
          <span>
            <strong>Mini Wild Garden</strong>
            <small>Make space for the wild</small>
          </span>
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
          <Link className="nav-cta" href="/garden-guides" onClick={() => setOpen(false)}>
            Start a project <Icon name="arrow" size={15} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
