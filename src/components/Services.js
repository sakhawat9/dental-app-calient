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
    <div className="container">
      <div className="">
        <div>
          <h2>
            Enjoy Specialized Care Through Precision, Artistry, And Experience
          </h2>
        </div>
        <div className="grid gap-4 grid-cols-12">
          {services.slice(0, 4).map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
        <a href="#" className="default-btn">
          View All Services
        </a>
      </div>
    </div>
  );
};

export default Services;
