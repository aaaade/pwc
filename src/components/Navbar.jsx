import React, { useState } from "react";
import logo from "../images/logo1.jpg";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="bg-[#FFFFFF] shadow-xl px-[2rem] md:px-[6rem] py-[1rem] sticky top-0 z-[100]">
      <div className=" flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="flex gap-4 items-center text-[#0D1A3C] md:border-r-2 border-[#0D1A3C] pr-4">
            <a href="#home" className="w-[3rem]">
              <img src={logo} alt="" />
            </a>
            <p className="hidden md:block font-medium text-[1rem] leading-5">
              PW 
              Consult
            </p>
          </div>
          <p className="hidden md:block text-[#0D1A3C] text-[.8rem] leading-4 font-extralight">
            Tax <br />
            Accounting &<br />
            Financial Advisory
          </p>
        </div>
        <nav>
          <ul className="hidden md:flex gap-4 text-white cursor-pointer font-normal">
            {navLinkList?.map((link) => (
              <li className="hover:text-[#009FE3] text-[#0D1A3C] capitalize" key={link}>
                <a href={`#${link}`}>{link}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="block  cursor-pointer md:hidden">
          {isMobileMenuOpen ? (
            <button
              className="text-5xl font-bold text-[#0D1A3]"
              onClick={toggleMobileMenu}
            >
              &times;
            </button>
          ) : (
            <button onClick={toggleMobileMenu} className="space-y-1">
              <span className="block h-1 w-8 rounded-md bg-[#0D1A3C]"></span>
              <span className="block h-1 w-8 rounded-md bg-[#0D1A3C]"></span>
              <span className="block h-1 w-8 rounded-md bg-[#0D1A3C]"></span>
            </button>
          )}
        </div>
      </div>
      <div
        className={`fixed inset-0 top-[79px] transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50 bg-gray-800 bg-opacity-75 transition-transform duration-300 ease-in-out`}
      >
        <div className="h-full w-full bg-white p-4">
          <ul className="flex flex-col gap-4">
            {navLinkList.map((link) => (
              <li
                key={link}
                className="text-[1.1rem] font-light uppercase text-[#0D1A3C] hover:text-[#067CA6]"
              >
                <a
                  href={`#${link.replace(" ", "")}`}
                  onClick={toggleMobileMenu}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

const navLinkList = ["home", "about", "services", "testimonial"];
