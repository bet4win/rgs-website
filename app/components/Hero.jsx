"use client";
import React from "react";
import Image from "next/image";
import { games } from "@/data/games";
import { ArrowRight, Terminal, Shield } from "./Icons";
import { trackEvent } from "@/app/lib/analytics";

// The hero visual is a wall of the real game thumbnails — the art carries the
// colour; the chrome stays quiet. Pick the first six live originals.
const wall = games.filter((g) => g.status === "active").slice(0, 6);

export default function Hero() {
  return (
    <section className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-12 px-5 pb-12 pt-28 md:px-12 md:pt-36 lg:flex-row lg:gap-16">
      {/* Copy */}
      <div className="relative z-10 flex flex-1 flex-col gap-6">
        <div className="inline-flex w-fit items-center gap-2 rounded-md border border-line bg-panel-low px-3 py-2 font-JetBrainsMono text-[12px] text-cyan shadow-[0_0_18px_rgba(34,211,238,0.08)]">
          <Shield className="h-3.5 w-3.5" />
          <span className="opacity-90">
            server_seed_hash · client_seed · nonce → SHA-256 → outcome ✓
          </span>
        </div>

        <h1 className="max-w-2xl font-SpaceGrotesk !text-[clamp(2.2rem,1.4rem+3vw,3.25rem)] !font-bold !leading-[1.08] !tracking-[-0.03em] !text-ink">
          Provably fair originals, built for operators.
        </h1>

        <p className="max-w-xl font-SpaceGrotesk text-[1.05rem] leading-[1.6] text-muted">
          A certified RNG, a single integration, and a new original every month —
          crash, mines, plinko and more, ready to brand as your own.
        </p>

        <div className="mt-1 flex flex-wrap items-center gap-3">
          {/* <a
            href="#integration"
            className="inline-flex items-center gap-2 rounded-md bg-brand-strong px-5 py-3 font-JetBrainsMono text-[13px] font-semibold uppercase tracking-[0.04em] !text-white shadow-[0_0_22px_rgba(37,99,235,0.32)] transition-colors hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Explore the API
            <Terminal className="h-4 w-4" />
          </a> */}
          <a
            href="#games"
            onClick={() => trackEvent("cta_click", { label: "hero_view_games", cta_type: "anchor" })}
            className="inline-flex items-center gap-2 rounded-md bg-brand-strong px-5 py-3 font-JetBrainsMono text-[13px] font-semibold uppercase tracking-[0.04em] !text-white shadow-[0_0_22px_rgba(37,99,235,0.32)] transition-colors hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            View games
            <ArrowRight className="h-4 w-4" />
          </a>
          {/* <a
            href="#games"
            className="machined-surface inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-JetBrainsMono text-[12px] uppercase tracking-[0.06em] !text-ink transition-colors hover:bg-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line"
          >
            View games
            <ArrowRight className="h-4 w-4" />
          </a> */}
        </div>
      </div>

      {/* Game wall — decorative collage; the real game tiles live in #games */}
      <div className="relative w-full flex-1" aria-hidden="true">
        <div
          className="pointer-events-none absolute -inset-10 -z-10 rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.25), transparent 55%), radial-gradient(circle at 70% 70%, rgba(129,140,248,0.22), transparent 55%)",
          }}
        />
        <div className="grid grid-cols-3 gap-3 [transform:rotate(-4deg)]">
          {wall.map((game, i) => (
            <div
              key={game.id}
              className={`overflow-hidden rounded-xl border border-line shadow-2xl ${
                i % 2 === 0 ? "translate-y-3" : ""
              }`}
            >
              <Image
                src={game.image}
                alt=""
                width={256}
                height={256}
                priority={i < 3}
                sizes="(min-width:1024px) 200px, 30vw"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* Fade the wall into the canvas on the left edge */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-transparent to-transparent lg:block [transform:rotate(-4deg)]" />
      </div>
    </section>
  );
}
