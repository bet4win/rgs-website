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
              <span className="text-[#343f52] xl:!text-[2.0rem]">Bet4.win</span>
            </Link>
          </div>
          <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <div className="offcanvas-header xl:!hidden lg:!hidden flex items-center justify-between flex-row p-6">
              <h3 className="!text-white xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !mb-0">
                Bet4.win
              </h3>
              <button
                type="button"
                className="btn-close btn-close-white !mr-[-0.75rem] m-0 p-0 leading-none !text-[#343f52] transition-all duration-[0.2s] ease-in-out border-0 motion-reduce:transition-none before:text-[1.05rem] before:text-white before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:!flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(255,255,255,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)]"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body xl:!ml-auto lg:!ml-auto flex flex-col !h-full">
              <div className="offcanvas-footer xl:!hidden lg:!hidden">
                <div>
                  <a
                    href="mailto:first.last@email.com"
                    className="link-inverse"
                  >
                    info@bet4.win
                  </a>
                  <br />
                  <nav className="nav social social-white !mt-4">
                    {socialLinks.map((elm, i) => (
                      <a
                        key={i}
                        className="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                        href={elm.href}
                      >
                        <i
                          className={`uil ${elm.icon} before:content-[${elm.unicode}] !text-white text-[1rem]`}
                        />
                      </a>
                    ))}
                  </nav>
                  {/* /.social */}
                </div>
              </div>
              {/* /.offcanvas-footer */}
            </div>
            {/* /.offcanvas-body */}
          </div>
          {/* /.navbar-collapse */}
          <div className="navbar-other w-full !flex !ml-auto">
            <ul className="navbar-nav !flex-row !items-center !ml-auto">
              {/* <li className="nav-item dropdown language-select uppercase group">
                <LanguageSelect color={"#fab758"} />
              </li> */}
              <li className="nav-item">
                <a
                  className="nav-link hover:!text-[#fab758]"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas-info"
                >
                  <i className="uil uil-info-circle before:content-['\eb99'] !text-[1.1rem]" />
                </a>
              </li>

              <li className="nav-item xl:!hidden lg:!hidden">
                <button className="hamburger offcanvas-nav-btn">
                  <span />
                </button>
              </li>
            </ul>
            {/* /.navbar-nav */}
          </div>
          {/* /.navbar-other */}
        </div>
        {/* /.container */}
      </nav>
      {/* /.navbar */}

      {/* /.offcanvas */}
    </header>
  );
}
