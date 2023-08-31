import React from "react";
import logo from "../images/logo.jpg";

function Navbar() {
  return (
    <div className="bg-[#0D1A3C] shadow-xl px-[2rem] py-[1rem] sticky top-0 z-[100]">
      <div className=" flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="flex gap-4 items-center text-white border-r-2 border-white pr-4">
            <div className="w-[3rem]">
              <img src={logo} alt="" />
            </div>
            <p className="hidden md:block font-medium text-[1rem] leading-5">
              PW <br />
              Consult
            </p>
          </div>
          <p className="hidden md:block text-white text-[.8rem] leading-4 font-extralight">
            Tax <br />
            Accounting &<br />
            Financial Advisory
          </p>
        </div>
        <nav>
          <ul className="flex gap-4 text-white cursor-pointer font-normal">
            {navLinkList?.map((link) => (
              <li className="hover:text-[#009FE3] capitalize" key={link}>
                <a href={`#${link}`}>{link}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block"></div>
        <div className="hidden md:block"></div>
      </div>
    </div>
  );
}

export default Navbar;

const navLinkList = ["home", "about", "services", "testimonial", "blog"];
