import React from "react";
import Features from "../../common/Features";
import Hero from "../../components/Hero";
import HospitalArea from "../../components/HospitalArea";
import OurHospital from "../../components/OurHospital";
import Services from "../../components/Services";
import SpecialFeatures from "../../components/SpecialFeatures";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Services />
      <HospitalArea />
      <SpecialFeatures />
      <OurHospital />
    </div>
  );
};

export default Home;
