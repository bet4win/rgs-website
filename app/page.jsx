import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Games from "@/app/components/Games";
import React from "react";

export const metadata = {
  title:
    "Bet4.win - Next-Generation Games",
  description:
    "Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
};
export default function DemoPage1() {
  return (
    <>
      <div className="color-navy font-thicccboi">
        <div className="font-THICCCBOI text-[0.85rem]">
          <div className="grow shrink-0">
            <Header />
            <>
              {/* /header */}
              <Hero />

              {/* /section */}
              <Services />

              <Games />
            </>
            <Footer />
          </div>
        </div>
      </div>


    </>
  );
}
