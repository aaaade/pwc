import React from "react";
import serviceIcon from "../images/seviceIcon.webp";
import marketing from "../images/marketing.webp";
import health from "../images/health.webp";
import estate from "../images/estate.png";
import energy from "../images/energy.png";

function Services() {
  return (
    <div id="services">
      <div className="w-[80%] mx-auto py-[3rem] grid grid-cols-1 md:grid-cols-4 gap-[1rem]">
        <div>
          <h3 className="text-2xl font-medium text-[#009FE3] mb-[.5rem] border-b border-[#0D1A3C] pb-1 w-fit">
            Our Services
          </h3>
          <p className="text-[.8rem]">
            Solutions Built For Every <br /> Type Of Business.
          </p>
        </div>
        <div className="md:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-[1rem] gap-y-[2rem]">
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
    icon: serviceIcon,
    title: "Professional Services",
    text: "Law, architectural, insurance brokerage, consulting, and fintech firms. We assisted with setting up accounting, internal control, and tax compliance systems. We also provided financial advisory services required during funding rounds to some of these clients.",
  },
  {
    id: 2,
    icon: estate,
    title: "Real Estate & Property Development",
    text: "Design and deployment of accounting and internal control systems, tax compliance including Value Added Taxes, Withholding Taxes and Employee related taxes.",
  },
  {
    id: 3,
    icon: serviceIcon,
    title: "Entertainment Industry",
    text: "Advert production, music album production, and concerts are a few of what our clients are engaged in. Our financial advisory service has helped our clients understand how to strategically place their business to ensure they are profitable.",
  },
  {
    id: 4,
    icon: marketing,
    title: "Marketing & Distribution",
    text: "We serviced relocation firms, outdoor digital marketing firms (both in Nigeria and Ghana), online digital marketing firm (in Nigeria and Kenya), as well as companies providing haulage services to popular Fast Moving Consumer Goods brands.",
  },
  {
    id: 5,
    icon: health,
    title: "Health Services",
    text: "Accounting, internal control, and tax services to hospitals and pharmacies. Financial records of patients now align with the medical classifications in place. The accounting system mirrors physical inventory levels. Fast-moving inventory items identified, re-order level and expiry date of inventory monitored.",
  },
  {
    id: 6,
    icon: serviceIcon,
    title: "Food and Hospitality",
    text: "Accounting, internal control, and tax services to ala carte and boutique restaurants. Because we understand this industry, we have been able to design internal controls that are most suitable to our clients’ operations and adequate for record-keeping purposes.",
  },
  {
    id: 7,
    icon: energy,
    title: "Energy & Manufacturing",
    text: "We assisted our clients with their tax planning and compliance. We service clients involved in the manufacturing of food items as well as those manufacturing non-edible products.",
  },
  {
    id: 8,
    icon: serviceIcon,
    title: "Farming & Agriculture",
    text: "Our clients operate from the major nodes of the agriculture value chain. Production, haulage, storage, aggregation/commodity trading, processing & packaging. Our services include accounting, internal control design and deployment, tax planning, tax compliance, and financial advisory business plan, and financial model preparation for funding purposes.",
  },
];

const Cards = ({ icon, title, text }) => {
  return (
    <div className="hover:bg-[#F9F9F9] p-4">
      <div className="w-[3rem] mb-[2rem]">
        <img src={icon} alt="" />
      </div>
      <h3 className="text-xl h-[4rem]">{title}</h3>
      <p className="text-[.9rem]">{text}</p>
    </div>
  );
};
