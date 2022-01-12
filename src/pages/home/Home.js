import React from "react";
import Hero from "../../components/Hero";
import HospitalArea from "../../components/HospitalArea";
import Services from "../../components/Services";
import SpecialFeatures from "../../components/SpecialFeatures";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <HospitalArea />
      <SpecialFeatures />
    </div>
  );
};

export default Home;
