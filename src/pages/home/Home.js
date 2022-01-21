import React from "react";
import Features from "../../common/Features";
import ExperiencedDentist from "../../components/ExperiencedDentist";
import Hero from "../../components/Hero";
import HospitalArea from "../../components/HospitalArea";
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
      <ExperiencedDentist />
    </div>
  );
};

export default Home;
