import React from "react";
import OwlCarousel from "react-owl-carousel";

const options = {
  margin: 16,
  responsiveClass: true,
  nav: true,
  loop: true,
  dots: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
};

function Testimonial() {
  return (
    <div className="my-[3rem]" id="testimonials">
      <div className="app-container">
        <div className="mx-auto w-[80%]">
        <div className="w-fit mx-auto">
          <h3 className="text-2xl font-medium text-[#009FE3] mb-[.5rem] border-b border-[#0D1A3C] pb-1">
            Trusted Across Various Industries
          </h3>
          <p className="text-[.8rem] text-center mb-4">Know our worth and value</p>
        </div>
          <OwlCarousel className="owl-theme" {...options}>
            <div className="bg-[#f1f5f6] p-2 md:p-8 text-[#666566]">
              <q className="italic text-[#666566]">
                After I was wrongfully terminated as CEO, I asked several very
                knowledgeable legal professionals for names of the best
                litigation firms. Without exception or hesitation, each one told
                me to hire the Robbins Firm. My former employer paid one of the
                largest law firms in the country over one million dollars to
                fight the case. The Robbins litigators prepared the case with
                precision and an extraordinary eye for detail, had the most
                brilliant courtroom strategy and presentation I’ve ever
                witnessed, and delivered a decisive win. <br />
                <br /> In my 30+ years of business experience, I have hired
                dozens of top tier national law firms and spent millions on
                legal fees and this is, by far, the most impressive team I’ve
                ever worked with, which is why when friends ask me for names of
                the best litigation firms, I tell them without exception or
                hesitation to hire the Robbins Firm.
              </q>
              <br />
              <br />
              <strong>A.F., CEO of (another) Technology company</strong>
            </div>
            <div className="bg-[#f1f5f6] p-2 md:p-8 text-[#666566]">
              <q className="italic text-[#666566]">
                After I was wrongfully terminated as CEO, I asked several very
                knowledgeable legal professionals for names of the best
                litigation firms. Without exception or hesitation, each one told
                me to hire the Robbins Firm. My former employer paid one of the
                largest law firms in the country over one million dollars to
                fight the case. The Robbins litigators prepared the case with
                precision and an extraordinary eye for detail, had the most
                brilliant courtroom strategy and presentation I’ve ever
                witnessed, and delivered a decisive win. <br />
                <br /> In my 30+ years of business experience, I have hired
                dozens of top tier national law firms and spent millions on
                legal fees and this is, by far, the most impressive team I’ve
                ever worked with, which is why when friends ask me for names of
                the best litigation firms, I tell them without exception or
                hesitation to hire the Robbins Firm.
              </q>
              <br />
              <br />
              <strong>A.F., CEO of (another) Technology company</strong>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
