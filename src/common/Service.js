/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Service = ({ service }) => {
  const { name, description, img } = service;
  return (
    <>
      <div className="md:col-span-3 col-span-12 shadow-2xl py-5 rounded-md services__style">
        <img className="rounded-t-lg" src={img} alt="" />
        <div className="services__style__content">
          <h3>
            <a href="#">{name}</a>
          </h3>
          <p className="mb-4">{description}</p>
          <a href="#" className="text-color">
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default Service;
