/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const OurHospital = () => {
  return (
    <div className="our-hospital">
      <div className="our-hospital__container">
        <div className="col-span-12 lg:col-span-6">
          <div className="our-hospital__about-image">
            <img
              src="https://themes.hibootstrap.com/rola/wp-content/uploads/2021/10/about-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="our-hospital__about-content">
            <span className="subtitle">ABOUT OUR HOSPITAL</span>
            <h3>
              Our Patients Are <b>Our Priority, We Offer</b> Quality Dental
              Services
            </h3>
            <p className="pb-5">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. ut
              enim ad minim veniam quis nostrud exercitation ullamco laboris.
            </p>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-6">
                <ul className="our-hospital__about-list">
                  <li>
                    <AiOutlineCheck /> Complete Crown
                  </li>
                  <li>
                    <AiOutlineCheck />
                    Dental Implants
                  </li>
                  <li>
                    <AiOutlineCheck />
                    Dental X-Ray
                  </li>
                </ul>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <ul className="our-hospital__about-list">
                  <li>
                    <AiOutlineCheck />
                    Cosmetic Filling
                  </li>
                  <li>
                    <AiOutlineCheck />
                    Teeth Whitening
                  </li>
                  <li>
                    <AiOutlineCheck />
                    Root Canal
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overview-area py-24">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-7 col-span-12">
              <div className="overview-area__content">
                <h3>
                  Nervous Troubled Attractive Staring Right Anxiously!{" "}
                  <b>Make An Appointment</b>
                </h3>
              </div>
            </div>
            <div className="lg:col-span-5 col-span-12">
              <ul className="overview-area__list text-end">
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
        </div>
      </div>
    </div>
  );
};

export default OurHospital;
