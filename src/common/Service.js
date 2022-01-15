/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Service = ({ service }) => {
  const { name, description, img } = service;
  return (
    <>
      <div className="md:col-span-3 col-span-12 shadow-2xl py-5 rounded-md">
        <img className="rounded-t-lg" src={img} alt="" />
        <div className="px-5">
          <h2>{name}</h2>
          <p>{description}</p>
          <a href="#" className="text-color pt-5">
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default Service;
