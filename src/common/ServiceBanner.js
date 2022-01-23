/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const ServiceBanner = ({ title }) => {
  return (
    <div className="service-banner">
      <div className="container">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-6 md:col-span-6 col-span-12">
            <div className="service-banner__content">
              <h2>{title}</h2>
              <ul>
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>{title}</li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-6 md:col-span-6 col-span-12">
            <div className="flex md:justify-end justify-center">
              <img
                src="https://themes.hibootstrap.com/rola/wp-content/uploads/2021/09/page-banner.png"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="service-banner__shape-1">
        <img
          src="https://themes.hibootstrap.com/rola/wp-content/uploads/2021/09/shape-1.png "
          alt="Shape1"
        />
      </div>
      <div className="service-banner__shape-2">
        <img
          src="https://themes.hibootstrap.com/rola/wp-content/uploads/2021/09/shape-2.png "
          alt="Shape2"
        />
      </div>
    </div>
  );
};

export default ServiceBanner;
