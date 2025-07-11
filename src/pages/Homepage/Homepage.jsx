import React from "react";
import HeroSection from "../../components/homepage/HeroSection";
import OurServices from "../../components/homepage/OurServices";
import WhyChooseUs from "../../components/homepage/WhyChooseUs";
import OurProject from "../../components/homepage/OurProject";
import Testimonials from "../../components/homepage/Testimonials";
import FAQSection from "../../components/homepage/FAQSection";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <OurServices />
      <WhyChooseUs />
      <OurProject />
      <Testimonials/>
      <FAQSection />
    </div>
  );
};

export default Homepage;
