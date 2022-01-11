import React from "react";

const Service = ({ service }) => {
  const { name, description, img } = service;
  return (
    <>
      <div className="md:col-span-3 col-span-12">
        <img src={img} alt="" />
        <h2>{name}</h2>
        <p>{description}</p>
        <a href="" className="text-color">
          Read More
        </a>
      </div>
    </>
  );
};

export default Service;
