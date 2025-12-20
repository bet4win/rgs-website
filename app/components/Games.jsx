"use client";
import React from "react";
import Image from "next/image";
import { products } from "@/data/products";
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

        <div className="itemgrid grid-view projects-masonry shop !mb-16">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-50px] xl:!mt-[-80px] lg:!mt-[-80px] md:!mt-[-80px] isotope">
            {products.map((product) => (
              <div
                key={product.id}
                className="project item group md:w-4/12 lg:w-6/12 xl:w-2/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !px-[15px] !mt-[50px] xl:!mt-[80px] lg:!mt-[80px] md:!mt-[80px] max-w-full"
              >
                <figure className="!rounded-[.4rem] !mb-6">
                  <Image
                    srcSet={`${product.image2x} 2x`}
                    alt={product.title}
                    src="https://maverixgaming.com/assets/games/goldwagonwins.webp"
                    width={410}
                    height={440}
                  />
                </figure>

              </div>
            ))}
          </div>
          {/* /.row */}
        </div>
        {/* /.grid */}

        {/* /nav */}
      </div>
      {/* /.container */}
    </section>
  );
}
