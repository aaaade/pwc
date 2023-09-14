import React from "react";

function About() {
  return (
    <div id="about">
      <div className="w-[80%] mx-auto py-[3rem] grid grid-cols-1 md:grid-cols-5 gap-[1rem]">
        <div data-aos="fade-right" data-aos-duration="1500">
          <h3 className="text-2xl font-medium text-[#009FE3] mb-[.5rem] border-b border-[#0D1A3C] pb-1 w-fit">
            About us
          </h3>
          <p className="text-[.8rem]">Get to know us better</p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="md:col-span-4 space-y-[2rem]"
        >
          <p>
            At Porter's World Consult, we are more than just financial & tax
            experts; we are your trusted partners in success. With a deep
            commitment to integrity, accountability, and transparency, we've
            been a beacon of excellence service for years.
          </p>
          <p>
            We specialize in delivering tailored professional service to a
            diverse range of industries. We take the time to understand your
            unique needs and challenges, enabling us to provide tailor-made
            solutions that align with your goals. Your satisfaction is the
            measure of our success.
          </p>
          <p>
            Our mission is simple, yet profound; to handle the complexities of
            bookkeeping, tax, finance and internal control so you can focus on
            what you do best—building and expanding your business.
          </p>
          <p>
            Behind Porter's World Consult is a team of dynamic, creative, and
            experienced professionals. Our chartered accountants and strategic
            partners are the driving force behind our excellence service. We
            bring a wealth of knowledge, experience and a passion for innovation
            to every client we serve.
          </p>
          <p>
            Join hands with us, and let's navigate the world of opportunities
            together, with unwavering dedication to your business success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
