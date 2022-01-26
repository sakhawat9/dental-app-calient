/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "../common/Service";

const Services = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServiceData(data));
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
              <Link to="#" className="default-btn">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          {serviceData.slice(0, 4).map((data) => (
            <Service key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
