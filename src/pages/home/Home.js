import React from "react";
import Features from "../../common/Features";
import ExperiencedDentist from "../../components/ExperiencedDentist";
import Hero from "../../components/Hero";
import HospitalArea from "../../components/HospitalArea";
import Review from "../../components/Review";
import Services from "../../components/Services";
import SpecialFeatures from "../../components/SpecialFeatures";
import Blogs from "../../components/Blogs";
import OurHospital from "../../components/OurHospital";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Services />
      <HospitalArea />
      <SpecialFeatures />
      <OurHospital />
      <ExperiencedDentist />
      <Review />
      <Blogs />
    </div>
  );
};

export default Home;
