import React from "react";
import banner_img from "../assets/images/main-banner.jpg";

const Hero = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 lg:col-span-6">
        <div className="main-banner-content">
          <h1>
            Top <b>Personalized</b> Dental Care Services
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit egestas
            venenatis et tellus et suspendisse nec dis magna amet rhoncus fames
            aliquam.
          </p>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6">
        <img className="" src={banner_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
