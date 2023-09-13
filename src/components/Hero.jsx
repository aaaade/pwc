import React from "react";

function Hero() {
  return (
    <div className="hero relative" id="home">
      <div className="absolute bg-[#00000080] inset-0"></div>
      <div className="w-[90%] md:w-[80%] mx-auto h-[87.8vh] flex items-center justify-center text-center relative">
        <div className=" text-white md:w-2/3 mx-auto">
          <h1 className="text-[1.5rem] md:text-[2.8rem] font-[300] md:leading-[3.2rem] heroTitle">
            Empowering your business growth by managing your finances with
            integrity, accountability, and transparency.
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-[2rem]">
            <a href="#services">
              <button className="uppercase outline-none py-3 px-6 bg-[#0D1A3C] text-white text-[.8rem]">
                Explore Services
              </button>
            </a>
            <a href="#footer">
              <button className="uppercase outline-none py-3 px-6 border border-[#FFFFFF] text-white text-[.8rem]">
                talk to an expert
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
