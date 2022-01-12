/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import banner_img from "../assets/images/main-banner.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <div className="hero__wrapper__content">
          <div className="hero__main-banner-content ">
            <span className="subtitle"># KEEPING TEETH CLEAN</span>
            <h1>
              Top <b>Personalized</b> Dental Care Services
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit egestas
              venenatis et tellus et suspendisse nec dis magna amet rhoncus
              fames aliquam.
            </p>
            <ul className="hero__main-banner-content__banner-btn">
              <li>
                {" "}
                <a href="#" className="default-btn">
                  Book Appointment
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="optional-btn">
                  Get Free Consulting
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <img className="hero__banner-img" src={banner_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
