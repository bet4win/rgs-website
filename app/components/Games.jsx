"use client";
import React from "react";
import Image from "next/image";
import { games } from "@/data/games";
import Link from "next/link";
export default function Games() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-[4.5rem] xl:!py-12 lg:!py-12 md:!py-24">

        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]">
            {/* <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
              What We Do?
            </h2> */}
            <h3 className="!text-[calc(1.315rem_+_0.78vw)] font-bold xl:!text-[1.4rem] !leading-[1.25] ">
              NEW GAME EVERY MONTH
            </h3>
            <p>
              Each game is highly customizable to fit your brand and target audience.
            </p>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {games.map((game) => (
              <div key={game.id} className="relative">
                <figure className="!rounded-[.4rem]">
                  <Link href={game.url} target="_blank" rel="noopener noreferrer">
                    <Image
                      alt={game.title}
                      src={game.image}
                      width={410}
                      height={440}
                    />
                  </Link>
                </figure>
                {game.status !== "active" && (
                  <div className="absolute inset-0 bg-black flex items-center justify-center rounded-[.4rem]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                    <span className="text-white text-lg font-bold uppercase">
                      Coming <br/> {game.status}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* /.row */}
        
        {/* /.grid */}

        {/* /nav */}
      </div>
      {/* /.container */}
    </section>
  );
}
