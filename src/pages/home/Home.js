import React from "react";
import Features from "../../common/Features";
import Hero from "../../components/Hero";
import HospitalArea from "../../components/HospitalArea";
import Review from "../../components/Review";
import Services from "../../components/Services";
import SpecialFeatures from "../../components/SpecialFeatures";
import Blogs from "../../components/Blogs";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Services />
      <HospitalArea />
      <SpecialFeatures />
      <Review />
      <Blogs />
    </div>
  );
};

export default Home;
