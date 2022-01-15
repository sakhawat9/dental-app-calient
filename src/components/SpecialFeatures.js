/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const SpecialFeatures = () => {
  return (
    <div className="core-features-area section-padding">
      <div className="">
        <div className="container flex justify-center">
          <div className="section-title">
            <span className="subtitle"># OUR SPECIAL FEATURES</span>
            <h2>
              Features That You Will Love <b>Us and Enjoy Specialized</b> Care
            </h2>
            <p></p>
          </div>
        </div>

        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6 md:col-span-3">
              <div className="single-core-features">
                <div className="title">
                  <i className="flaticon-hospitalisation"></i>
                  <h3>
                    <a href="#">Patient Care</a>
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor
                </p>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3">
              <div className="single-core-features">
                <div className="title">
                  <i className="flaticon-diamond"></i>
                  <h3>
                    <a href="#">Experience</a>
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor
                </p>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3">
              <div className="single-core-features">
                <div className="title">
                  <i className="flaticon-dental-care"></i>
                  <h3>
                    <a href="#">Certified Dentists</a>
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor
                </p>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3">
              <div className="single-core-features">
                <div className="title">
                  <i className="flaticon-dental-care"></i>
                  <h3>
                    <a href="#">Quality Brackets</a>
                  </h3>
                </div>
                <p>
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
