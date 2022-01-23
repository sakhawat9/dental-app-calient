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
    <div className="section-padding ">
      <div className="container">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-7 col-span-12">
            <div className="blog-area__container__top-wrapper__title section-title-warp">
              <span className="subtitle"># OUR DENTAL SERVICESS</span>
              <h2>
                Enjoy Specialized<b> Care Through Precision, </b>
                Artistry, And Experience
              </h2>
            </div>
          </div>
          <div className="lg:col-span-5 hidden lg:block">
            <div className="flex justify-end">
              <a
                href="https://themes.hibootstrap.com/rola/our-services/"
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
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
