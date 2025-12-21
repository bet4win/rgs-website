"use client";
import { footerLinks } from "@/data/footerLinks";
import { socialLinks } from "@/data/socials";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[rgba(52,63,82)] opacity-100 !text-[#cacaca]">
      <div className="container pt-20 xl:pt-12 lg:pt-12 md:pt-12 pb-16 xl:pb-12 lg:pb-12 md:pb-12">
        {/* <div className="xl:!flex lg:!flex flex-row xl:!items-center lg:!items-center">
          <h3 className="!text-[calc(1.315rem_+_0.78vw)] font-bold xl:!text-[1.9rem] !leading-[1.25] !mb-6 xl:!mb-0 lg:!mb-0 lg:!pr-40 xl:!pr-60 xxl:!pr-[22.5rem] !text-white">
            Join our community by using our services and grow your business.
          </h3>
          <a
            href="#"
            className="btn btn-yellow !text-white !bg-[#fab758] border-[#fab758] hover:text-white hover:bg-[#fab758] hover:!border-[#fab758] active:text-white active:bg-[#fab758] active:border-[#fab758] disabled:text-white disabled:bg-[#fab758] disabled:border-[#fab758] !text-[.85rem] !rounded-[50rem] !mb-0 whitespace-nowrap !tracking-[normal]"
          >
            Try It For Free
          </a>
        </div> */}
        {/*/div */}
        {/* <hr className="!mt-[3rem] !mb-[3.5rem] opacity-100 m-[4.5rem_0] border-t border-solid border-[rgba(164,174,198,.2)]" /> */}
        <div className="flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0">
          <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
            <div className="widget !text-[#cacaca]">

              <p className="!mb-4">
                © {new Date().getFullYear()} Bet4.win
                <br className="hidden xl:block lg:block !text-[#cacaca]" />
                All rights reserved.
              </p>
              <nav className="nav social social-white">
                {/* {socialLinks.map((elm, i) => (
                  <a
                    key={i}
                    className="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                    href={elm.href}
                  >
                    <i
                      className={`uil ${elm.icon} before:content-[${elm.unicode}] !text-white text-[1rem]`}
                    />
                  </a>
                ))} */}
              </nav>
              {/* /.social */}
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
          <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
            <div className="widget !text-[#cacaca]">
              <h4 className="widget-title !text-white !mb-3 text-[1rem] !leading-[1.45]">
                Get in Touch
              </h4>
              {/* <address className="xl:!pr-20 xxl:!pr-28 not-italic !leading-[inherit] block !mb-4">
                Moonshine St. 14/05 Light City, London, United Kingdom
              </address> */}
              <a
                className="!text-[#cacaca] hover:!text-[#fab758]"
                href="mailto:info@bet4.win"
              >
                info@bet4.win
              </a>
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}


        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </footer>
  );
}
