import React from "react";
import profeesional from "../images/professional.png";
import marketing from "../images/Marketing.png";
import health from "../images/Health.png";
import estate from "../images/RealEstate.png";
import energy from "../images/Energy.png";
import entertain from "../images/Entertainment.png";
import arg from "../images/Agriculture.png";
import food from "../images/Food.png";

function Services() {
  return (
    <div id="services">
      <div className="w-[80%] mx-auto py-[3rem] grid grid-cols-1 md:grid-cols-5 gap-[0rem]">
        <div data-aos="fade-right" data-aos-duration="1500" className="w-fit">
          <h3 className="text-2xl font-medium text-[#009FE3] mb-[.5rem] border-b border-[#0D1A3C] pb-1 w-fit">
            Our Services
          </h3>
          <p className="text-[.8rem]">
            Solutions Built For Every <br /> Type Of Business.
          </p>
        </div>
        <div className="md:col-span-4 grid grid-cols-1 lg:grid-cols-3 gap-[1rem] gap-y-[2rem]">
          {serviceList.map((list) => (
            <Cards
              key={list.id}
              icon={list.icon}
              title={list.title}
              text={list.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

const serviceList = [
  {
    id: 1,
    icon: profeesional,
    title: "Professional Services",
    text: "We specialize in delivering comprehensive professional service solutions tailored to the unique needs of various industries, including law, architectural, insurance brokerage, consulting, and fintech firms. Our expert team is committed to enhancing the financial health and sustainability of your business through a range of specialized services like accounting, internal control enhancement, and tax compliance. We also provide invaluable financial advisory services required during funding rounds and critical financial milestones.",
  },
  {
    id: 2,
    icon: estate,
    title: "Real Estate & Property Development",
    text: "We design and deploy a range of solutions tailored to the unique needs of real estate firms and property developers. Among these are accounting and internal control systems, comprehensive guidance on tax compliance including Value Added Taxes (VAT), Withholding Taxes, and Employee related taxes. Our team of experts ensures that all tax obligations are met while also identifying opportunities to maximize tax efficiency.",
  },
  {
    id: 4,
    icon: marketing,
    title: "Marketing & Distribution",
    text: "We offer financial advisory services to a wide array of clientele, including relocation companies, outdoor digital marketing firms in Nigeria and Ghana, online digital marketing firms in Nigeria and Kenya, and companies offering haulage services to well-known Fast Moving Consumer Goods (FMCG) brands. With our expertise, we provide financial strategies that enable our clients to grow, and thrive while also ensuring cost effective operations.",
  },
  {
    id: 8,
    icon: arg,
    title: "Agriculture",
    text: "We are dedicated to serving our clients across the entire agriculture value chain, working closely with those engaged in production, haulage, storage, aggregation & commodity trading, and processing & packaging. Our comprehensive suite of services is designed to enhance their financial well-being and strategic success including accounting, customized internal control and deployment, strategic tax planning, tax compliance, and financial advisory involving the preparation of business plan, and financial model for funding purposes. We pay attention to the Transfer Pricing requirements of clients present in multiple markets.",
  },
  {
    id: 5,
    icon: health,
    title: "Health Services",
    text: "We specialize in delivering unique financial solutions to the healthcare industry, including hospitals and pharmacies. Our comprehensive services are designed to optimize operations and ensure compliance with industry-specific standards for accounting which ensures accuracy and compliance with healthcare regulations, customized internal control that mirrors physical inventory levels which enhances efficiency, identify fast moving inventory items, monitor re-order levels and track expiry dates to minimize waste and ensure consistent supply. Our team of experts also offer tax compliance and optimization services.",
  },
  {
    id: 7,
    icon: energy,
    title: "Energy & Manufacturing",
    text: "We bring specialized financial expertise to the dynamic Energy and Manufacturing sector. Our team of experts are dedicated to helping businesses in this sector to effectively plan and manage their tax obligations through strategic tax planning services, considering industry specific regulations and incentives. Some of our clients include firms providing alternative energy solutions, power, upstream and downstream oil & gas companies, food manufacturers and non-edible product manufacturers.",
  },
  {
    id: 6,
    icon: food,
    title: "Food and Hospitality",
    text: "We provide accounting, internal control, and tax services tailored for ala carte and boutique restaurants. Our expertise enables us to design customized internal controls that align perfectly with our clients' operations while ensuring robust record-keeping.",
  },
  {
    id: 3,
    icon: entertain,
    title: "Entertainment Industry",
    text: "We provide financial advisory services tailored to the unique needs of our clients in the Entertainment industry, including advert production, music album production, and concerts among others. Our expertise helps them to understand how to strategically place their business to ensure profitability.",
  },
];

const Cards = ({ icon, title, text }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="1500" className="">
      <div className="w-[3rem] mb-[2rem]">
        <img src={icon} alt="" />
      </div>
      <h3 className="text-xl h-[4rem]">{title}</h3>
      <p className="text-[.9rem]">{text}</p>
    </div>
  );
};
