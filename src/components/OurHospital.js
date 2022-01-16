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
          <span className="subtitle"># ABOUT OUR HOSPITAL</span>
          <h2>
            Our Patients Are <b>Our Priority, We Offer</b> Quality Dental
            Services
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            dolorum accusantium obcaecati veniam voluptas soluta autem error
            optio vero reiciendis?
          </p>
          <div className="our-hospital__container">
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
  );
};

export default OurHospital;
