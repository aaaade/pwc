import React from "react";

function Hero() {
  return (
    <div className="hero relative" id="home">
      <div className="absolute bg-[#00000020] inset-0"></div>
      <div className="w-[90%] md:w-[80%] mx-auto h-[87.8vh] flex items-center">
        <div className="bg-[#009FE3] opacity-90 p-8 text-white max-w-[45rem] space-y-[1rem]">
          <h3 className=" font-medium text-2xl">
            Tax, Accounting & Finanacial Advisory Services For <br />
            <span className="font-semibold"> YOUR BUSINESS.</span>
          </h3>
          <p className="text-xl">That's What We Do at PW Consult</p>
          <p className="!mb-[1rem]">
            We’re a premium accounting and advisory firm trusted for several
            years. Our clients have been turning to our high-calibre team of
            chartered accountants and strategic advisors – generation after
            generation.
          </p>
          <a href="#about"><button className="bg-[#0D1A3C] p-4 uppercase">About PW Consult</button></a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
