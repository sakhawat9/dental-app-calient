import React from "react";

const OurHospital = () => {
  return (
    <div className="our-hospital">
      <div className="our-hospital__container">
        <div className="lg:col-span-6 md:col-span-12">
          <div className="our-hospital__about-image">
            <img
              src="https://themes.hibootstrap.com/rola/wp-content/uploads/2021/10/about-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="lg:col-span-6 md:col-span-12">
          <div className="about-content">
            <span className="subtitle"># ABOUT OUR HOSPITAL</span>
            <h3 className="">
              Our Patients Are <b>Our Priority, We Offer</b> Quality Dental
              Services
            </h3>
            <p className="pb-5">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. ut
              enim ad minim veniam quis nostrud exercitation ullamco laboris.
            </p>
            <div className="grid grid-cols-12 gap-4">
              <div className="lg:col-span-6 md:col-span-12">
                <ul className="about-list">
                  <li>Complete Crown</li>
                  <li>Dental Implants</li>
                  <li>Dental X-Ray</li>
                </ul>
              </div>
              <div className="lg:col-span-6 md:col-span-12">
                <ul className="about-list">
                  <li>Cosmetic Filling</li>
                  <li>Teeth Whitening</li>
                  <li>Root Canal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHospital;
