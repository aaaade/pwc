import React from "react";
import m from "../images/3m.svg";
import mbarstool from "../images/barstool-store.svg";
import budweiser from "../images/budweiser.svg";
import buzzfeed from "../images/buzzfeed.svg";
import forbes from "../images/forbes.svg";
import macys from "../images/macys.svg";
import menshealth from "../images/menshealth.svg";
import mrbeast from "../images/mrbeast.svg";

function Testimonial() {
  return (
    <div id="testimonial">
      <div className="w-[80%] mx-auto py-[3rem]">
        <div className="w-fit mx-auto">
          <h3 className="text-2xl font-medium text-[#009FE3] mb-[.5rem] border-b border-[#0D1A3C] pb-1">
            Trusted Across Various Industries
          </h3>
          <p className="text-[.8rem] text-center">Know our worth and value</p>
        </div>
        <div className="logos">
          <div className="logos-slide flex">
            <img src={m} alt="" />
            <img src={mbarstool} alt="" />
            <img src={budweiser} alt="" />
            <img src={buzzfeed} alt="" />
            <img src={forbes} alt="" />
            <img src={menshealth} alt="" />
            <img src={macys} alt="" />
            <img src={mrbeast} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
