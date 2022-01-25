/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Service = ({ data }) => {
  const { name, subtitle, img, slug } = data;
  return (
    <div className="col-span-6 lg:col-span-3">
      <div className="single-services">
        <div className="services-image">
          <a href={`serviceDetails/${slug}`}>
            <img src={img} alt={name} />
          </a>
          <div className="icon">
            <a href={`serviceDetails/${slug}`}>
              <img src={img} alt={name} />
            </a>
          </div>
        </div>
        <div className="services-content">
          <h3>
            <a href={`serviceDetails/${slug}`}>{name}</a>
          </h3>
          <p>{subtitle}</p>
          <a href={`serviceDetails/${slug}`} className="services-btn">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
