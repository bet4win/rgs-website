"use client";
import React from "react";
import { trackEvent } from "@/app/lib/analytics";

const links = [
  // { label: "Terms", href: "#" },
  // { label: "Privacy", href: "#" },
  // { label: "API documentation", href: "#" },
  // { label: "Contact", href: "mailto:info@bet4.win", onClick: () => trackEvent("cta_click", { label: "footer_contact", cta_type: "email" }) },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line/40 bg-panel-low">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 px-5 py-12 md:flex-row md:px-12">
        <img
          src="/assets/img/b4w-logo.svg"
          alt="Bet4.win"
          width={123}
          height={24}
          className="h-6 w-auto"
        />
        {links.length > 0 && (
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={l.onClick}
                className="font-JetBrainsMono text-[12px] uppercase tracking-[0.05em] !text-muted transition-colors hover:!text-ink focus-visible:outline-none focus-visible:!text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
        <p className="font-SpaceGrotesk text-[13px] text-muted !mb-0">
          © {year} Bet4.win. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
