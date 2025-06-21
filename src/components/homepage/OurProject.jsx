import React from "react";
import "./homepage.css";
import TitleComponent from "./TitleComponent";
import Slider from "react-slick";
import project1 from "../../assets/images/project1.jpg";
import project2 from "../../assets/images/project2.jpg";
import project3 from "../../assets/images/project3.jpg";
const OurProject = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const projects = [
  {
    img: project1,
    title: "EduStats: Learn Statistics Easily",
    description:
      "An online platform offering video courses and resources to learn statistics, analytics, and data science from scratch.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Bootstrap",
    ],
  },
  {
    img: project2,
    title: "InsightIQ: Business Data Reports",
    description:
      "A real-time dashboard tool that helps businesses track KPIs, analyze sales, and monitor customer behavior with ease.",
    techStack: ["React.js", "D3.js", "Chart.js", "Node.js", "MySQL", "SQL"],
  },
  {
    img: project3,
    title: "SmartShop: eCommerce Web App",
    description:
      "A full-featured eCommerce platform with shopping cart, payment gateway, admin panel, and order tracking support.",
    techStack: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "SSLCommerz",
    ],
  },
  {
    img: project1,
    title: "SurveyPro: Academic Survey App",
    description:
      "A secure platform for creating, managing, and analyzing surveys used by students, researchers, and university staff.",
    techStack: ["Vue.js", "Laravel", "MySQL", "Chart.js", "CSS", "SCSS"],
  },
  {
    img: project2,
    title: "PortfolioX: Developer Portfolio",
    description:
      "A responsive portfolio template to showcase developer projects, skills, and blog articles with animation support.",
    techStack: ["HTML", "Sass", "JavaScript", "GSAP", "Netlify", "React"],
  },
  {
    img: project3,
    title: "AgroTrack: Farm Data Tracker",
    description:
      "A tool to analyze crop yield, soil health, and farm inputs using modern data science and agricultural techniques.",
    techStack: ["Python", "Flask", "Pandas", "PostgreSQL", "Plotly", "SQL"],
  },
];

  return (
    <div className="mentors__project__section__main__container">
      <div className="mentors__project__section__main__container container">
        <TitleComponent
          title={"Our Latest Projects"}
          description={
            "A quick look at what we’ve built for businesses, learners, and changemakers."
          }
        />
        <div className="slider-container">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="mentors__project__card boxShadow">
                <img src={project?.img} alt="project" />
                <div style={{ padding: "0 0.5rem" }}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="tech-stack">
                    {project.techStack.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className="mentors__project__details__btn">
                  <button>Show Details</button>
                  <button>Live</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurProject;
