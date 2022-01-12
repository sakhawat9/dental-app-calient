import React from "react";
import Features from "../../common/Features";
import Hero from "../../components/Hero";
import HospitalArea from "../../components/HospitalArea";
import Services from "../../components/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Services />
      <HospitalArea />
    </div>
  );
};

export default Home;
