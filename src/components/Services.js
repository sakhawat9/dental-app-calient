/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import ServiceCard from "../common/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="section-padding" style={{ backgroundColor: "#F7FAFB" }}>
      <div className="container">
        <div className="grid items-center grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-7">
            <div className="blog-area__container__top-wrapper__title section-title-warp">
              <span className="subtitle"># OUR DENTAL SERVICESS</span>
              <h2>
                Enjoy Specialized<b> Care Through Precision, </b>
                Artistry, And Experience
              </h2>
            </div>
          </div>
          <div className="hidden lg:col-span-5 lg:block">
            <div className="flex justify-end">
              <a
                href="#"
                className="default-btn"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          {services.slice(0, 4).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
