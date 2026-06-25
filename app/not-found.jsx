import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Page not found",
  description:
    "This page doesn't exist. Explore Bet4.win's provably-fair RGS and originals catalogue for iGaming operators.",
  robots: { index: false, follow: true },
};

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-bg px-5 text-center text-ink">
      <p className="mb-4 font-JetBrainsMono text-[13px] uppercase tracking-[0.08em] text-cyan">
        Error 404
      </p>
      <h1 className="mb-3 font-SpaceGrotesk !text-[clamp(2rem,1.4rem+2vw,2.75rem)] !font-bold !tracking-[-0.03em]">
        Page not found.
      </h1>
      <p className="mb-8 max-w-md font-SpaceGrotesk leading-[1.6] text-muted">
        The page you are looking for has moved or never existed. Head back to
        the homepage to explore the catalogue.
      </p>
      <Link
        href="/"
        className="rounded-md bg-brand-strong px-6 py-3 font-JetBrainsMono text-[13px] font-semibold uppercase tracking-[0.04em] !text-white shadow-[0_0_22px_rgba(37,99,235,0.32)] transition-colors hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        Go to homepage
      </Link>
    </main>
  );
}
