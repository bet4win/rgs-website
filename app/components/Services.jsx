import React from "react";

export default function Services() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container xl:pt-8 lg:pt-8 md:pt-8">
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]">
            {/* <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
              What We Do?
            </h2> */}
            <h3 className="!text-[calc(1.315rem_+_0.78vw)] font-bold xl:!text-[1.3rem] !leading-[1.25] !mb-10 xl:!px-10">
              WE SET YOU APART IN A HIGHLY COMPETITIVE LANDSCAPE
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="!relative">
          <div
            className="shape !rounded-[50%] !bg-[#edf2fc] rellax !w-[6rem] !h-[6rem] !absolute z-[1]"
            data-rellax-speed={1}
            style={{ bottom: "-0.5rem", right: "-2.2rem", zIndex: 0 }}
          />
          <div
            className="shape bg-dot primary rellax !w-[6rem] !h-[7rem] absolute opacity-50 bg-[radial-gradient(#fab758_2px,transparent_2.5px)]"
            data-rellax-speed={1}
            style={{ top: "-0.5rem", left: "-2.5rem", zIndex: 0 }}
          />
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px] !text-center">
            <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px]">
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <img src="/assets/img/icons/gaming/server.png" alt="dice" className="!w-[3.8rem] !h-[3.8rem] !mb-3 m-[0_auto]" />
                  <h4 className="!text-[1rem]">Remote Gaming Server</h4>
                  <p className="!mb-2">
                    Our battle tested RGS platform offers a robust and scalable foundation for seamless game integration and management.
                  </p>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
            <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px]">
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <img src="/assets/img/icons/gaming/dice.png" alt="dice" className="!w-[3.8rem] !h-[3.8rem] !mb-3 m-[0_auto]" />
                   <h4 className="!text-[1rem]">Provably Fair RNG</h4>
                  <p className="!mb-2">
                    Certified provably fair Random Number Generator adds transparency and trust to your iGaming portofolio.
                  </p>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
            <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px]">
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <img src="/assets/img/icons/gaming/rocket.png" alt="dice" className="!w-[3.8rem] !h-[3.8rem] !mb-3 m-[0_auto]" />
                  <h4 className="!text-[1rem]">Next-gen Games</h4>
                  <p className="!mb-2">
                    Our games address the needs of the next generation players with social, multiplayer and crypto features.
                  </p>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
            <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px]">
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                 <img src="/assets/img/icons/gaming/marketing.png" alt="dice" className="!w-[3.8rem] !h-[3.8rem] !mb-3 m-[0_auto]" /><h4 className="!text-[1rem]">Promos and Retention</h4>
                  <p className="!mb-2">
                    Our advanced promotional and social capabilitites designed to boost player retention and lifetime value.
                    <br /><br />
                  </p>
                  {/* <a
                    href="#"
                    className="more hover !text-[#3f78e0] hover:!text-[#3f78e0]"
                  >
                    Learn More
                  </a> */}
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/* /.relative */}
      </div>
      {/* /.container */}
    </section>
  );
}
