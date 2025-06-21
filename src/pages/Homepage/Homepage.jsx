import React from "react";
import HeroSection from "../../components/homepage/HeroSection";
import OurServices from "../../components/homepage/OurServices";
import WhyChooseUs from "../../components/homepage/WhyChooseUs";
import OurProject from "../../components/homepage/OurProject";
import Testimonials from "../../components/homepage/Testimonials";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <OurServices />
      <WhyChooseUs />
      <OurProject />
      <Testimonials/>
    </div>
  );
};

export default Homepage;
