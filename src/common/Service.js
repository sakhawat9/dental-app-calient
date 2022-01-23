/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Service = ({ service }) => {
  const { name, description, img } = service;
  return (
    <>
      <div className="lg:col-span-3 col-span-6">
        <div className="single-services">
          <div className="services-image">
            <a href="#">
              <img src={img} alt={name} />
            </a>
            <div className="icon">
              <a href="#">
                <img src={img} alt={name} />
              </a>
            </div>
          </div>
          <div className="services-content">
            <h3>
              <a href="#">{name}</a>
            </h3>
            <p className="text-justify">{description}</p>
            <a href="#" className="services-btn">
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
