import React from "react";
import "./homepage.css";
import banner from "../../assets/images/banner.jpg";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div
      className="mentors__hero__container"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="montors__hero__content scroll__up container">
        <h1>Empowering Digital Growth & Data-Driven Success</h1>
        <p>
          We are a passionate team of developers and analysts dedicated to
          building modern websites, delivering deep data insights, and teaching
          the next generation of data scientists and statisticians.
        </p>
        <div className="mentors__hero__btns">
          <button onClick={() => navigate("/services")}>Our Services</button>
          <button onClick={() => navigate("/")}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
