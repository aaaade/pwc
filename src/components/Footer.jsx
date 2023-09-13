import React from "react";
import logo from "../images/logo.jpg";
import fb from "../images/fb.png";
import insta from "../images/insta.png";
import tw from "../images/tw.png";
import link from "../images/link.png";

function Footer() {
  return (
    <div
      className="bg-[#0D1A3C] shadow-xl px-[2rem] md:px-[6rem] py-[4rem] text-white"
      id="footer"
    >
      <div className="flex flex-col md:flex-row justify-between gap-[4rem]">
        <div>
          <h3 className="text-2xl font-semibold">Porter's World Consult</h3>
          <p>Solutions For Every Type Of Business.</p>
          <p className="mt-[.5rem] text-[.8rem]">
            3rd Floor, NSE Building, 1, Engineering Close, <br />
            Victoria Island, Lagos state, Nigeria
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Contact Us</h3>
          <div>
            <p className="text-[.8rem] mt-[.5rem]">
              info@portersworldconsult.com
            </p>
            <p className="text-[.8rem] mt-[.5rem]">+234 706 417 1650</p>
            <p className="text-[.8rem] mt-[.5rem]">+234 906 187 9056</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Links</h3>
          <div>
            <ul className="flex flex-col gap-1 text-white cursor-pointer font-normal text-[.8rem]">
              {navLinkList?.map((link) => (
                <li className="hover:text-[#009FE3] capitalize" key={link}>
                  <a href={`#${link}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Social Media Links</h3>
          <div className="mt-[1rem]">
            <ul className="flex items-center gap-[3rem] text-white cursor-pointer font-normal text-[.8rem]">
              <li>
                <a
                  href="https://www.facebook.com/PortersWorldConsult/?modal=admin_todo_tour"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={fb} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/pwconsult/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={insta} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/porter's-world-consult/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={link} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/PWConsult_"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={tw} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

const navLinkList = ["home", "about", "services", "testimonial", "blog"];
