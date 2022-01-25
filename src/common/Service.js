/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Service = ({ data }) => {
  const { name, subtitle, img, slug } = data;
  return (
    <div className="col-span-6 lg:col-span-3">
      <div className="single-services">
        <div className="services-image">
          <Link to={`serviceDetails/${slug}`}>
            <img src={img} alt={name} />
          </Link>
          <div className="icon">
            <Link to={`serviceDetails/${slug}`}>
              <img src={img} alt={name} />
            </Link>
          </div>
        </div>
        <div className="services-content">
          <h3>
            <Link to={`serviceDetails/${slug}`}>{name}</Link>
          </h3>
          <p>{subtitle}</p>
          <Link to={`serviceDetails/${slug}`} className="services-btn">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
