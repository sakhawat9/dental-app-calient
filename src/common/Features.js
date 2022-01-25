/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
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
              <div className="feature-title">
                <div className="">
                  <img src={employee} alt="" className="w-8 h-8" />
                </div>
                <h3 className="">
                  <Link to="#">Certified Dentist</Link>
                </h3>
              </div>
              <p>
                Lpsum dolor sit amet consectetur lor adipiscing elit convallis
                urna quisque id malesuada loremoi pellen demi text tesque.
              </p>
              <Link href="#" className="features-btn">
                Read More
              </Link>
            </div>
          </div>
          <div className="features__wrapper__cards">
            <div className="features__wrapper__cards__card bg-E86548">
              <div className="feature-title">
                <img src={dental} alt="" className="w-8 h-8" />
                <h3>
                  <Link to="#">New Technology</Link>
                </h3>
              </div>
              <p>
                Lpsum dolor sit amet consectetur lor adipiscing elit convallis
                urna quisque id malesuada loremoi pellen demi text tesque.
              </p>
              <Link to="#" className="features-btn">
                Read More
              </Link>
            </div>
          </div>
          <div className="features__wrapper__cards">
            <div className="features__wrapper__cards__card bg-456483">
              <div className="feature-title">
                <img src={healthcare} alt="" className="w-8 h-8" />
                <h3>
                  <Link to="#">Accept Insurance</Link>
                </h3>
              </div>
              <p>
                Lpsum dolor sit amet consectetur lor adipiscing elit convallis
                urna quisque id malesuada loremoi pellen demi text tesque.
              </p>
              <Link to="#" className="features-btn">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
