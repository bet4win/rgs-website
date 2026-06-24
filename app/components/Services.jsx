import React from "react";
import Image from "next/image";

const items = [
  {
    img: "/assets/img/icons/gaming/server.png",
    title: "Remote Gaming Server",
    body: "One battle-tested platform to launch, manage and report on every game — built to handle massive concurrency without degradation.",
  },
  {
    img: "/assets/img/icons/gaming/fair.png",
    title: "Provably Fair RNG",
    body: "Certified random number generation. Every result is independently verifiable — trust by math, not by promise.",
  },
  {
    img: "/assets/img/icons/gaming/originals.png",
    title: "Next-gen Originals",
    body: "A curated suite of fast-paced originals with social, multiplayer and crypto-native mechanics built on our fair engine.",
  },
  {
    img: "/assets/img/icons/gaming/retention.png",
    title: "Promos & Retention",
    body: "Tournaments, free bets, jackpots and leaderboards via API — the levers that lift player lifetime value.",
  },
];

export default function Services() {
  return (
    <section id="platform" className="mx-auto max-w-[1280px] px-5 py-20 md:px-12">
      <div className="mb-10">
        <h2 className="font-SpaceGrotesk !text-[1.6rem] !font-bold !tracking-[-0.02em] !text-ink">
          Engineered for scale
        </h2>
        <p className="mt-1 font-SpaceGrotesk text-muted">
          The complete infrastructure for modern operators.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map(({ img, title, body }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-xl border border-line bg-panel p-6 transition-colors hover:border-line/0 hover:ring-1 hover:ring-cyan/40"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan/10 opacity-60 blur-[40px] transition-opacity duration-300 group-hover:opacity-100" />
            <Image
              src={img}
              alt=""
              width={256}
              height={256}
              className="mb-5 w-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="mb-2 font-SpaceGrotesk !text-[1.15rem] !font-semibold !text-ink">
              {title}
            </h3>
            <p className="font-SpaceGrotesk text-[0.9rem] leading-[1.55] text-muted">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
