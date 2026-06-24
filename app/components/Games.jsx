"use client";
import React, { useState } from "react";
import Image from "next/image";
import { games } from "@/data/games";
import { ArrowRight, Clock } from "./Icons";
import GameModal from "./GameModal";

const isLive = (game) => game.status === "active";

function GameCard({ game, onLaunch }) {
  const live = isLive(game);

  const tile = (
    <div
      className={`group relative overflow-hidden rounded-xl border border-line bg-panel transition-transform duration-300 ${
        live ? "hover:-translate-y-1 hover:ring-1 hover:ring-cyan/50" : ""
      }`}
    >
      <div className="relative aspect-square">
        <Image
          src={game.image}
          alt={game.title}
          fill
          sizes="(min-width:992px) 16vw, (min-width:768px) 25vw, 33vw"
          className={`object-cover !rounded-b-[0] transition-transform duration-300 ${
            live ? "group-hover:scale-[1.04]" : "grayscale"
          }`}
        />
        <span
          className={`absolute right-2 top-2 inline-flex items-center gap-1 rounded border px-1.5 py-0.5 font-JetBrainsMono text-[10px] uppercase tracking-[0.05em] backdrop-blur ${
            live
              ? "border-line bg-bg/70 text-cyan"
              : "border-line bg-bg/70 text-muted"
          }`}
        >
          {live ? (
            <>
              <span className="h-1.5 w-1.5 rounded-full bg-cyan b4w-pulse" />
              Live
            </>
          ) : (
            <>
              <Clock className="h-3 w-3" />
              {game.status}
            </>
          )}
        </span>
      </div>
      <div className="flex items-center justify-between px-3 py-2">
        <span className="font-SpaceGrotesk text-[0.95rem] font-semibold !text-ink">
          {game.title}
        </span>
        <span className="font-JetBrainsMono text-[10px] uppercase tracking-[0.05em] text-muted">
          {live ? "Play" : "Soon"}
        </span>
      </div>
    </div>
  );

  return live ? (
    <button
      type="button"
      onClick={() => onLaunch(game)}
      className="block w-full rounded-xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      aria-label={`Play ${game.title} demo`}
    >
      {tile}
    </button>
  ) : (
    tile
  );
}

export default function Games() {
  const [active, setActive] = useState(null);

  return (
    <section id="games" className="mx-auto max-w-[1280px] px-5 py-20 md:px-12">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-JetBrainsMono text-[12px] uppercase tracking-[0.08em] text-cyan">
            A new original every month
          </p>
          <h2 className="mt-2 font-SpaceGrotesk !text-[1.6rem] !font-bold !tracking-[-0.02em] !text-ink">
            The catalogue
          </h2>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 font-JetBrainsMono text-[12px] uppercase tracking-[0.06em] !text-brand transition-colors hover:!text-cyan focus-visible:outline-none focus-visible:!text-cyan"
        >
          Request the full deck
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} onLaunch={setActive} />
        ))}
      </div>

      <GameModal game={active} onClose={() => setActive(null)} />
    </section>
  );
}
