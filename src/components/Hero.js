/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__wrapper">
          <div className="col-span-12 lg:col-span-6 md:col-span-12">
            <div className="hero__wrapper__content">
              <span className="subtitle"># KEEPING TEETH CLEAN </span>
              <h1> Top <b>Personalized</b> Dental Care Services</h1>
              <p> Lorem ipsum dolor sit amet consectetur adipiscing elit egestas
                venenatis et tellus et suspendisse nec dis magna amet rhoncus
                fames aliquam.</p>
              <ul className="flex justify-center banner-btn md:justify-start">
                <li>
                  <a href="#" className="default-btn">
                    Book Appointment
                  </a>
                </li>
                <li>
                  <a href="#" className="optional-btn">
                    Get Free Consulting
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 md:col-span-12">
            <div
              className="hero__banner-image"
              style={{
                backgroundImage:
                  "url(https://themes.hibootstrap.com/rola/wp-content/uploads/2021/10/main-banner.jpg )",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="main-banner-shape-1">
        <img
          src="https://themes.hibootstrap.com/rola/wp-content/uploads/2021/09/shape-1.png"
          alt="image"
        />
      </div>
      <div className="main-banner-shape-2">
        <img
          src="https://themes.hibootstrap.com/rola/wp-content/uploads/2021/09/shape-2.png"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Hero;
