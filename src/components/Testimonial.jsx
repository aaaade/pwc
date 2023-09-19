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
    <div className="my-[3rem]" id="testimonial">
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
              We have been with PW Consult for a while now and have enjoyed both the service and the team. Their service is carried out efficiently, professionally, and to a very high standard. They are always sincere, willing, and helpful. We have confidence that PW Consult will consistently support our business and support us toward further success.  We have no regrets about choosing PW Consult, and we have no hesitation in recommending the team.
              </q>
              <br />
              <br />
              <strong>Chris Quintero, Managing Director of Coship Company</strong>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
