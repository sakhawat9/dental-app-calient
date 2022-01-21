/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import dental from "../assets/images/dental-care.png";
import employee from "../assets/images/employee.png";
import healthcare from "../assets/images/healthcare.png";

const Features = () => {
  return (
    <div className="features section-padding-b">
      <div className="features__container">
        <div className="features__wrapper">
          <div className="features__wrapper__cards">
            <div className="features__wrapper__cards__card ">
              <div className="flex title">
                <div>
                  <img src={employee} alt="" className="w-8 h-8" />
                </div>
                <h3>
                  <a href="#">
                    Certified Dentist
                  </a>
                </h3>
              </div>
              <p>
                Lpsum dolor sit amet consectetur lor adipiscing elit convallis
                urna quisque id malesuada loremoi pellen demi text tesque.
              </p>
              <a
                href="#"
                className="features-btn"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="features__wrapper__cards">
            <div className="features__wrapper__cards__card bg-E86548">
              <div className="title">
                <img src={dental} alt="" className="w-8 h-8" />
                <h3>
                  <a href="#">
                    New Technology
                  </a>
                </h3>
              </div>
              <p>
                Lpsum dolor sit amet consectetur lor adipiscing elit convallis
                urna quisque id malesuada loremoi pellen demi text tesque.
              </p>
              <a
                href="#"
                className="features-btn"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="features__wrapper__cards">
            <div className="features__wrapper__cards__card bg-456483">
              <div className="title">
                <img src={healthcare} alt="" className="w-8 h-8" />
                <h3>
                  <a href="#">
                    Accept Insurance
                  </a>
                </h3>
              </div>
              <p>
                Lpsum dolor sit amet consectetur lor adipiscing elit convallis
                urna quisque id malesuada loremoi pellen demi text tesque.
              </p>
              <a
                href="#"
                className="features-btn"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
