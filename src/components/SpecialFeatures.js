/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import dental from "../assets/images/dental-care.png";
import diamond from "../assets/images/diamond.png";
import hospitalisation from "../assets/images/hospitalisation.png";

const SpecialFeatures = () => {
  return (
    <div className="special-features section-padding">
      <div className="">
        <div className="special-features__title ">
          <div className="special-features__title__content">
            <span className="subtitle"># OUR SPECIAL FEATURES</span>
            <h2>
              Features That You Will Love <b>Us and Enjoy Specialized</b> Care
            </h2>
            <p></p>
          </div>
        </div>

        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="single-core-features">
                <div className="title">
                  <img src={hospitalisation} className="w-12 h-12 p-2 rounded-full bg-java-500"alt="" />
                  
                  <h3>
                    <Link to="#">Patient Care</Link>
                  </h3>
                </div>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="single-core-features">
                <div className="title">
                <img src={diamond} className="w-12 h-12 p-2 rounded-full bg-java-500"alt="" />
                  <h3>
                    <Link to="#">Experience</Link>
                  </h3>
                </div>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="single-core-features">
                <div className="title">
                  <img src={dental} className="w-12 h-12 p-2 rounded-full bg-java-500"alt="" />
                  <h3>
                    <Link to="#">Certified Dentists</Link>
                  </h3>
                </div>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="single-core-features">
                <div className="title">
                  <img src={dental} className="w-12 h-12 p-2 rounded-full bg-java-500"alt="" />
                  <h3>
                    <Link to="#">Quality Brackets</Link>
                  </h3>
                </div>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialFeatures;
