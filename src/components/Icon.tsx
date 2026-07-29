import type { ReactNode } from "react";

type IconProps = {
  name: string;
  size?: number;
};

export function Icon({ name, size = 28 }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  const stroke = {
    stroke: "currentColor",
    strokeWidth: 2.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const icons: Record<string, ReactNode> = {
    bird: (
      <svg {...common}><path {...stroke} d="M7 31c8-1 11-6 14-13 3 6 8 9 17 8-4 8-12 12-22 10l-5 5 1-8-5-2Z"/><path {...stroke} d="M27 18c4-5 8-5 13-3-3 3-7 5-11 5"/><circle cx="33" cy="16" r="1.4" fill="currentColor"/></svg>
    ),
    bee: (
      <svg {...common}><ellipse {...stroke} cx="24" cy="27" rx="9" ry="12"/><path {...stroke} d="M17 23h14M16 29h16M21 15c-5-7-12-2-9 5 2 4 7 4 11 2M27 15c5-7 12-2 9 5-2 4-7 4-11 2M21 11l-3-4M27 11l3-4"/></svg>
    ),
    hedgehog: (
      <svg {...common}><path {...stroke} d="M8 31c0-11 7-19 18-19 10 0 15 7 15 15 0 8-6 12-15 12H13c-3 0-5-3-5-8Z"/><path {...stroke} d="m11 24-5-5 7 1-2-8 7 5 1-9 5 7 5-8 2 10 8-5-4 9"/><circle cx="33" cy="27" r="1.4" fill="currentColor"/><path {...stroke} d="M39 31h4"/></svg>
    ),
    butterfly: (
      <svg {...common}><path {...stroke} d="M24 22c-3-8-9-13-14-10-6 4-2 16 9 17-9 4-9 13-3 14 5 1 8-6 8-14M24 22c3-8 9-13 14-10 6 4 2 16-9 17 9 4 9 13 3 14-5 1-8-6-8-14M24 18v20M22 15l-4-5M26 15l4-5"/></svg>
    ),
    frog: (
      <svg {...common}><circle {...stroke} cx="16" cy="17" r="6"/><circle {...stroke} cx="32" cy="17" r="6"/><path {...stroke} d="M11 23c-2 3-3 7-3 10 0 5 5 8 16 8s16-3 16-8c0-3-1-7-3-10M17 31c4 3 10 3 14 0"/><circle cx="16" cy="17" r="1.5" fill="currentColor"/><circle cx="32" cy="17" r="1.5" fill="currentColor"/></svg>
    ),
    garden: (
      <svg {...common}><path {...stroke} d="M9 40h30M14 40V19h20v21M11 19h26L24 7 11 19Z"/><path {...stroke} d="M20 40V29h8v11M14 25h20M7 32c5-1 7-5 8-10M41 32c-5-1-7-5-8-10"/></svg>
    ),
    pond: (
      <svg {...common}><path {...stroke} d="M7 31c7-3 10 4 17 1s10 4 17 0M9 38c6-3 10 2 15 0s10 3 15 0M24 28V12M24 13c-6 0-9-4-10-8 6 0 10 2 10 8ZM24 18c6 0 9-4 10-8-6 0-10 2-10 8Z"/></svg>
    ),
    flower: (
      <svg {...common}><circle {...stroke} cx="24" cy="21" r="5"/><path {...stroke} d="M24 16c-4-9 4-12 5-5 6-7 12 0 5 5 9-1 10 7 2 8 5 7-3 11-7 4-3 9-11 5-9-3-9 4-13-5-5-9-8 1-11-7-3-9 0 10 0 21M24 36c-5-4-9-3-12 1M24 32c5-4 9-3 12 1"/></svg>
    ),
    logs: (
      <svg {...common}><rect {...stroke} x="6" y="25" width="36" height="10" rx="5"/><rect {...stroke} x="10" y="15" width="31" height="9" rx="4.5"/><circle {...stroke} cx="36" cy="19.5" r="2"/><circle {...stroke} cx="11" cy="30" r="2"/><path {...stroke} d="M19 15c4-5 8-7 13-8M23 35c5 3 9 4 14 3"/></svg>
    ),
    hedge: (
      <svg {...common}><path {...stroke} d="M8 40h32M15 40V26M24 40V19M33 40V24"/><circle {...stroke} cx="15" cy="20" r="8"/><circle {...stroke} cx="26" cy="15" r="10"/><circle {...stroke} cx="35" cy="21" r="8"/></svg>
    ),
    leaf: (
      <svg {...common}><path {...stroke} d="M39 8C23 8 10 15 10 28c0 7 5 12 12 12 13 0 18-13 17-32Z"/><path {...stroke} d="M10 40c6-10 14-17 25-25M19 28c0-4-1-7-3-10M25 22c4 0 7 1 10 3"/></svg>
    ),
    gate: (
      <svg {...common}><path {...stroke} d="M8 42V10M40 42V10M8 16h32M13 42V16M35 42V16M13 22l22 14M35 22 13 36"/><circle cx="30" cy="31" r="1.5" fill="currentColor"/></svg>
    ),
    sprout: (
      <svg {...common}><path {...stroke} d="M24 41V20M24 24c-9 0-14-5-15-13 9 0 15 4 15 13ZM24 29c9 0 14-5 15-13-9 0-15 4-15 13ZM14 41h20"/></svg>
    ),
    sun: (
      <svg {...common}><circle {...stroke} cx="24" cy="24" r="9"/><path {...stroke} d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M38 10l-4 4M14 34l-4 4"/></svg>
    ),
    snow: (
      <svg {...common}><path {...stroke} d="M24 5v38M8 14l32 20M40 14 8 34M18 8l6 5 6-5M18 40l6-5 6 5M7 21l7 2-1 7M41 27l-7-2 1-7M13 18l1 7-7 2M35 30l-1-7 7-2"/></svg>
    ),
    arrow: (
      <svg {...common}><path {...stroke} d="M9 24h29M29 14l10 10-10 10"/></svg>
    ),
    check: (
      <svg {...common}><path {...stroke} d="m9 25 9 9 21-21"/></svg>
    ),
    clock: (
      <svg {...common}><circle {...stroke} cx="24" cy="24" r="18"/><path {...stroke} d="M24 14v11l8 5"/></svg>
    ),
    menu: (
      <svg {...common}><path {...stroke} d="M8 14h32M8 24h32M8 34h32"/></svg>
    ),
    close: (
      <svg {...common}><path {...stroke} d="m11 11 26 26M37 11 11 37"/></svg>
    ),
    mail: (
      <svg {...common}><rect {...stroke} x="6" y="10" width="36" height="28" rx="4"/><path {...stroke} d="m8 14 16 13 16-13"/></svg>
    ),
  };

  return icons[name] ?? icons.leaf;
}
