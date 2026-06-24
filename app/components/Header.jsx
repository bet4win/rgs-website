import React from "react";
import Link from "next/link";
import { ArrowRight } from "./Icons";

const NAV = [
  { label: "Platform", href: "#platform" },
  { label: "Games", href: "#games" },
  { label: "Provably Fair", href: "#provably-fair" },
  // { label: "Integration", href: "#integration" },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-line/40 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 md:px-12">
        <Link href="/" className="flex items-center" aria-label="Bet4.win home">
          {/* Real two-tone logo, recoloured to read on the dark canvas */}
          <img
            src="/assets/img/b4w-logo.svg"
            alt="Bet4.win"
            className="h-7 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-JetBrainsMono text-[12px] uppercase tracking-[0.06em] !text-muted transition-colors hover:!text-cyan focus-visible:!text-cyan focus-visible:outline-none"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-md bg-brand-strong px-4 py-2 font-JetBrainsMono text-[12px] font-semibold uppercase tracking-[0.04em] !text-white shadow-[0_0_18px_rgba(37,99,235,0.3)] transition-colors hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          Book a demo
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
