import React from "react";
import DocsSidebar from "./DocsSidebar";

export default function Changelog() {
  return (
    <div className="container">
      <div className="flex flex-wrap mx-[-15px]">
        <aside className="xl:w-2/12 flex-[0_0_auto] !px-[15px] max-w-full sidebar doc-sidebar md:!mt-0 py-24 hidden xl:block">
          <DocsSidebar />
          {/* /.widget */}
        </aside>
        {/* /column */}
        <aside className="xl:w-2/12 flex-[0_0_auto] !px-[15px] max-w-full xl:!order-3 sidebar !sticky h-full top-0 md:!mt-0 py-24 hidden xl:block">
          <div className="widget">
            <h6 className="widget-title text-[0.85rem] !mb-2 xl:!pl-5">
              On this page
            </h6>
            <nav className="xl:!pl-5" id="sidebar-nav">
              <ul className="list-unstyled !pl-0 list-none text-[0.7rem] leading-normal text-inherit">
                <li className="!mt-[0.35rem]">
                  <a
                    className="!text-inherit hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]"
                    href="#snippet-3"
                  >
                    v1.2
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="!text-inherit hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]"
                    href="#snippet-2"
                  >
                    v1.1
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="!text-inherit hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]"
                    href="#snippet-1"
                  >
                    v1.0
                  </a>
                </li>
              </ul>
            </nav>
            {/* /nav */}
          </div>
          {/* /.widget */}
        </aside>
        {/* /column */}
        <div className="xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!order-2">
          <section id="snippet-3" className="wrapper pt-24 pb-14">
            <h2 className="!mb-5 !leading-[1.35]">v1.2 - 20 August 2025</h2>
            <div className="card">
              <div className="card-body p-[40px]">
                <ul className="pl-0 list-none !mb-0">
                  <li>
                    1) /docs/styleguide/icons-svg page icon copy issue fixed
                  </li>
                  <li>2) Nextjs v15.4 updated</li>
                  <li>3) React and React Dom Version Updated</li>
                </ul>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-2" className="wrapper pt-24 pb-12">
            <h2 className="!mb-5 !leading-[1.35]">v1.1 - 23 May 2025</h2>
            <div className="card">
              <div className="card-body p-[40px]">
                <ul className="pl-0 list-none !mb-0">
                  <li>2) Dependency Updated</li>
                </ul>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-1" className="wrapper pt-24 pb-12">
            <h2 className="!mb-5 !leading-[1.35]">v1.0 - 23 March 2025</h2>
            <div className="card">
              <div className="card-body p-[40px]">
                <ul className="pl-0 list-none !mb-0">
                  <li>1) Initial release.</li>
                </ul>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </section>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
    </div>
  );
}
