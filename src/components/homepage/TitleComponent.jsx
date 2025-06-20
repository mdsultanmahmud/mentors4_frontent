import React from "react";
import "./homepage.css"
const TitleComponent = ({ title, description }) => {
  return (
    <div className="mentors__title__container">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default TitleComponent;
