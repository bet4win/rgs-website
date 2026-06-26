import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import TrustBar from "@/app/components/TrustBar";
import Services from "@/app/components/Services";
import Games from "@/app/components/Games";
import ProvablyFair from "@/app/components/ProvablyFair";
import Theming from "@/app/components/Theming";
import ClosingCta from "@/app/components/ClosingCta";
import Footer from "@/app/components/Footer";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/app/lib/site";
import { games } from "@/data/games";
import React from "react";

// Per-game share cards: when "/" is opened/shared with ?game=<slug> (set by the
// Games modal), emit that game's title + 1200x630 art card for social unfurls.
// Reading searchParams makes "/" server-rendered; canonical stays "/" so search
// engines consolidate every ?game= variant onto the homepage (no duplicate URLs).
export async function generateMetadata({ searchParams }) {
  const sp = await searchParams;
  const raw = Array.isArray(sp?.game) ? sp.game[0] : sp?.game;
  const slug = (raw || "").toLowerCase();
  const game = slug
    ? games.find(
        (g) =>
          g.status === "active" &&
          (g.id === slug || g.title.toLowerCase() === slug),
      )
    : null;

  if (!game) {
    // Defaults (title/description/OG) inherit from the root layout.
    return { alternates: { canonical: "/" } };
  }

  const title = `Play ${game.title} · Provably-fair original — Bet4.win`;
  const description = `Try the ${game.title} demo from Bet4.win — a certified, provably-fair original you can verify yourself and brand as your own.`;
  const image = `/og/${game.title.toLowerCase()}.jpg`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      url: "/",
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: `${game.title} — Bet4.win` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

// schema.org entity graph: who we are (Organization), the site (WebSite), and
// the product (SoftwareApplication = the RGS). @id-linked so search engines
// resolve them as one entity. featureList is sourced only from live page copy.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/assets/img/b4w-logo.svg`,
      description: SITE_DESCRIPTION,
      email: "info@bet4.win",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "info@bet4.win",
        availableLanguage: "en",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#rgs`,
      name: "Bet4.win Remote Gaming Server",
      url: SITE_URL,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Remote Gaming Server (RGS)",
      operatingSystem: "Web-based",
      provider: { "@id": `${SITE_URL}/#organization` },
      description:
        "A certified provably-fair Remote Gaming Server and originals catalogue for iGaming operators: one integration, a new original every month, fully white-labelled.",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "iGaming operators",
      },
      featureList: [
        "Certified provably-fair RNG",
        "Single API integration",
        "A new provably-fair original every month",
        "White-label branding across the full catalogue",
        "Tournaments, free bets, jackpots and leaderboards via API",
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg font-SpaceGrotesk text-ink antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-strong focus:px-4 focus:py-2 focus:font-JetBrainsMono focus:text-[13px] focus:!text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-grow">
        <Hero />
        <TrustBar />
        <Services />
        <Games />
        <ProvablyFair />
        <Theming />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}
