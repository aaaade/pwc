import React from "react";

function About() {
  return (
    <div id="about">
      <div className="w-[80%] mx-auto py-[3rem] grid grid-cols-1 md:grid-cols-4 gap-[1rem]">
        <div>
          <h3 className="text-2xl font-medium text-[#009FE3] mb-[.5rem] border-b border-[#0D1A3C] pb-1 w-fit">
            About us
          </h3>
          <p className="text-[.8rem]">Get to know us better</p>
        </div>
        <div className="md:col-span-3 space-y-[2rem]">
          <p>
            We are a collaborative fusion of dynamic, creative and experienced
            professionals offering a variety of consulting financial advisory
            and accounting services.
          </p>
          <p>
            We strongly believe in the power to innovate and build lasting
            business in Africa. However we understand the inherent challanges
            that face new and existing businesses in reaching their potentials
            either before setting up or during the life of the business.
          </p>
          <p>
            Our mission therefore is to bridge this gap, helping our clients
            focus on growing their businesses by taking on the responsibility of
            managing their finances with the utmost level of integrity,
            accountability and transparency required.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
