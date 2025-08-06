import React from "react";
import "./homepage.css";
import TitleComponent from "./TitleComponent";
import web from "../../assets/images/webService.jpg";
import data from "../../assets/images/data_analysis.jpg";
import statistics from "../../assets/images/statistics.png";
const OurServices = () => {
  const services = [
    {
      img: statistics,
      title: "Learn Statistics & Data Science",
      description:
        "Boost your career with hands-on training in statistics, data science, and analytics — taught by experienced professionals in a practical and friendly way.",
    },
    {
      img: data,
      title: "Data Analysis",
      description:
        "Unlock the power of your data. We analyze, visualize, and interpret data to help you make smart, informed business decisions. A great oppurtunity to get everything in one company.",
    },

    {
      img: web,
      title: "Modern Web Development",
      description:
        "We design and build responsive, high-performance websites tailored to your brand and goals. From business sites to dynamic web apps — we've got you covered.",
    },
  ];

  return (
    <div className="mentors__home__services container">
      <TitleComponent
        title={"What We Do Best"}
        description={
          "Explore our core services built to drive digital growth, data clarity, and educational excellence."
        }
      />
      <div className="mentors__home__services__items scroll__right">
        {services?.map((service, index) => (
          <div className="mentors__home__service__item" key={index}>
            <img src={service?.img} alt="here aill be img" />
            <h2>{service?.title}</h2>
            <p>{service?.description}</p>
            <button>Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
