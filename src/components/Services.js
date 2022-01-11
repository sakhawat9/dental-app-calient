/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Service from "../common/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="services section-padding">
      <div className="services__container">
        <span className="subtitle mb-5"> # OUR DENTAL SERVICES</span>
        <div className="flex">
          <h2>
            Enjoy Specialized Care Through Precision, Artistry, And Experience
          </h2>
          <a href="#" className="default-btn">
            View All Services
          </a>
        </div>
        <div className="grid gap-4 grid-cols-12">
          {services.slice(0, 4).map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
