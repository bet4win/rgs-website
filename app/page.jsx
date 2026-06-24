import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import TrustBar from "@/app/components/TrustBar";
import Services from "@/app/components/Services";
import Games from "@/app/components/Games";
import ProvablyFair from "@/app/components/ProvablyFair";
import Integration from "@/app/components/Integration";
import ClosingCta from "@/app/components/ClosingCta";
import Footer from "@/app/components/Footer";
import React from "react";

export const metadata = {
  title: "Bet4.win — Provably fair originals, built for operators",
  description:
    "A certified RNG, a single integration, and a new provably-fair original every month. The remote gaming server and originals catalogue for modern iGaming operators.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg font-SpaceGrotesk text-ink antialiased">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <Services />
        <Games />
        <ProvablyFair />
        <Integration />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}
