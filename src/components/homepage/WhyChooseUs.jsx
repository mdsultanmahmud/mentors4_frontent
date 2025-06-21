import React from "react";
import "./homepage.css";
import choose from "../../assets/images/why__us.jpg";
const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Expert-Led Team",
      description:
        "Work with skilled developers, analysts, and educators who bring years of real-world experience to every project and every class.",
    },
    {
      title: "Quality-First Approach",
      description:
        "We focus on crafting high-performance websites, reliable data solutions, and practical learning experiences — with zero compromise on quality.",
    },
    {
      title: "All-in-One Service",
      description:
        "From digital development to data insights to education — we provide everything under one roof to simplify your journey.",
    },
    {
      title: "Support & Guidance",
      description:
        "We don’t just deliver services — we walk with you. Our team is committed to your success at every stage, from idea to execution.",
    },
  ];

  return (
    <div className="mentors__home__main__container">
      <div className="mentors__home__choose__us__container container">
        <div className="choose__img__section">
          <h2>Why Choose Us</h2>
          <p>
            Because we blend innovation, expertise, and passion to deliver real
            value — whether you're building a business or building your
            knowledge.
          </p>
          <img src={choose} alt="" />
        </div>
        <div className="choose__content__section">
          {reasons.map((reason, index) => (
            <div key={index} className="choose__content__item">
              <div className="index__box boxShadow">
                <span>{index + 1}</span>
              </div>
              <h3>{reason?.title}</h3>
              <p>{reason?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
