import React from "react";
import HeroSection from "../../components/homepage/HeroSection";
import OurServices from "../../components/homepage/OurServices";
import WhyChooseUs from "../../components/homepage/WhyChooseUs";
import OurProject from "../../components/homepage/OurProject";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <OurServices />
      <WhyChooseUs />
      <OurProject />
    </div>
  );
};

export default Homepage;
