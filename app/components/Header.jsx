import React from "react";
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/data/socials";

export default function Header({
  parentClass = "relative wrapper !bg-[#fff8ee]",
}) {
  return (
    <header className={parentClass}>
      <nav className="navbar navbar-expand-lg center-nav transparent navbar-light">
        <div className="container xl:!flex-row lg:!flex-row !flex-nowrap items-center">
          <div className="navbar-brand w-full">
            <Link href={`/`}>
              <span className="text-[#343f52] !text-[2.0rem]">Bet4.win</span>
            </Link>
          </div>
        </div>
        {/* /.container */}
      </nav>
      {/* /.navbar */}
    </header>
  );
}
