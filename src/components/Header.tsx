"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { Icon } from "@/components/Icon";

const links = [
  { href: "/wildlife-guides", label: "Wildlife guides" },
  { href: "/garden-guides", label: "Garden projects" },
  { href: "/seasonal-advice", label: "Seasonal advice" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <BrandMark compact />
          <span>
            <strong>Mini Wild Garden</strong>
            <small>Small spaces. Wilder lives.</small>
          </span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>

        <nav className={`main-nav ${open ? "main-nav--open" : ""}`} aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link className="button button--small" href="/contact" onClick={() => setOpen(false)}>
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
