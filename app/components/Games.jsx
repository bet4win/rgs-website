"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { games } from "@/data/games";
import { ArrowRight, Clock } from "./Icons";
import GameModal from "./GameModal";
import { trackEvent } from "@/app/lib/analytics";

const isLive = (game) => game.status === "active";

// Shareable URL slug for a game (matches the ?game= param + the OG card name).
const slugFor = (game) => game.title.toLowerCase();
const findBySlug = (slug) => {
  if (!slug) return null;
  const s = slug.toLowerCase();
  return games.find((g) => isLive(g) && (g.id === s || slugFor(g) === s)) || null;
};

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

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
          sizes="(min-width:1024px) 200px, (min-width:768px) 23vw, 45vw"
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
          aria-hidden="true"
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
        <span
          className="font-JetBrainsMono text-[10px] uppercase tracking-[0.05em] text-muted"
          aria-hidden="true"
        >
          {live ? "Play" : "Soon"}
        </span>
      </div>
    </div>
  );

  return live ? (
    <button
      type="button"
      onClick={() => {
        trackEvent("game_launch", { game_id: game.id, game_title: game.title });
        onLaunch(game);
      }}
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
  const sectionRef = useRef(null);
  // Tracks whether the currently-open modal added its own history entry (a tile
  // click), vs. having been opened by a shared/deep link (the param was already
  // in the URL on load). Determines how we tidy up on close.
  const pushedRef = useRef(false);

  // Open a game: reflect it in the URL so it can be shared, and add a history
  // entry so the browser Back button closes the modal.
  const openGame = (game) => {
    const params = new URLSearchParams(window.location.search);
    params.set("game", slugFor(game));
    window.history.pushState(null, "", `?${params}`);
    pushedRef.current = true;
    setActive(game);
  };

  const closeGame = () => {
    if (pushedRef.current) {
      pushedRef.current = false;
      window.history.back(); // pops our entry → popstate handler clears `active`
      return;
    }
    // Opened via a shared/deep link: strip the param in place so closing never
    // navigates the visitor off the site.
    const params = new URLSearchParams(window.location.search);
    params.delete("game");
    const qs = params.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
    setActive(null);
  };

  // Keep the modal in sync with Back/Forward navigation.
  useEffect(() => {
    const onPop = () => {
      pushedRef.current = false;
      setActive(findBySlug(new URLSearchParams(window.location.search).get("game")));
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Initial deep link: open (and scroll to) the shared game on first load.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const match = findBySlug(params.get("game"));
    if (!match) return;

    const utmParams = Object.fromEntries(
      UTM_KEYS.flatMap((k) => {
        const v = params.get(k);
        return v ? [[k, v]] : [];
      })
    );

    // Small delay so the scroll animates visibly from the hero
    const timer = setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(match);
      trackEvent("game_launch", {
        game_id: match.id,
        game_title: match.title,
        source: "deep_link",
        ...utmParams,
      });
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="games"
      ref={sectionRef}
      aria-labelledby="games-heading"
      className="mx-auto max-w-[1280px] px-5 py-20 md:px-12"
    >
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-JetBrainsMono text-[12px] uppercase tracking-[0.08em] text-cyan">
            A new original every month
          </p>
          <h2
            id="games-heading"
            className="mt-2 font-SpaceGrotesk !text-[1.6rem] !font-bold !tracking-[-0.02em] !text-ink"
          >
            The catalogue
          </h2>
          <p className="mt-2 max-w-xl font-SpaceGrotesk text-[0.9rem] leading-[1.55] text-muted">
            Provably-fair originals you can launch as a casino game provider —
            crash, mines, plinko, dice and more — each demo-playable below and
            fully brandable for your platform.
          </p>
        </div>
        <a
          href="#contact"
          onClick={() => trackEvent("cta_click", { label: "request_deck", cta_type: "anchor" })}
          className="inline-flex items-center gap-1.5 font-JetBrainsMono text-[12px] uppercase tracking-[0.06em] !text-brand transition-colors hover:!text-cyan focus-visible:outline-none focus-visible:!text-cyan"
        >
          Request the full deck
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} onLaunch={openGame} />
        ))}
      </div>

      <GameModal game={active} onClose={closeGame} />
    </section>
  );
}
