import React from "react";
import "./homepage.css";
import TitleComponent from "./TitleComponent";
import Slider from "react-slick";
import person1 from "../../assets/images/person1.jpg";
import person2 from "../../assets/images/person2.jpg";
import person3 from "../../assets/images/person3.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Testimonials = () => {
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow next-arrow" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow prev-arrow" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

  const testimonials = [
    {
      name: "Sarah Ahmed",
      text: "Working with this team was a game-changer for our startup. They delivered our web app on time with outstanding performance and design.",
      date: "21 June 2025",
      img: person1,
      position: "CEO, DataNova Ltd.",
    },
    {
      name: "Md. Rafiq Islam",
      text: "Their data analysis service helped us uncover trends that improved our marketing strategy significantly. Highly recommended!. This is a wow business",
      date: "18 May 2025",
      img: person2,
      position: "Marketing Head, AgroTrend",
    },
    {
      name: "Jessica Tan",
      text: "We enrolled in their Data Science course and were impressed by the quality of instruction and real-world projects. Very professional team!",
      date: "10 April 2025",
      img: person3,
      position: "Senior Analyst, LearnSphere",
    },
    {
      name: "Hasan Chowdhury",
      text: "The website they built for our  organization is fast, secure, and easy to manage. Great communication and support throughout. Get support from this.",
      date: "3 March 2025",
      img: person1,
      position: "Founder, HealthInsight BD",
    },
    {
      name: "Emily Zhao",
      text: "Their support in building our internal dashboard using React and Node.js saved us months of work. Very skilled and responsive team.",
      date: "15 February 2025",
      img: person2,
      position: "CTO, FinTech Hive",
    },
    {
      name: "Tanvir Hossain",
      text: "We trusted them for our university's research data system and they delivered exactly what we needed, even under tight deadlines.",
      date: "28 January 2025",
      img: person3,
      position: "Lecturer, RU Statistics Dept.",
    },
  ];

  return (
    <div className="mentors__client__testimonials__main__container">
      <div className="mentors__client__testimonials__container container">
        <TitleComponent
          title={"What Our Clients Say"}
          description={
            "Real stories from the people we've worked with — hear how our solutions made an impact on their businesses and learning journeys."
          }
        />
        <div className="slider_container__testimonials">
          <Slider {...settings}>
            {testimonials.map((client, index) => (
              <div
                key={index}
                className="mentors__testimonials__card boxShadow"
              >
                <img src={client?.img} alt="project" />
                <h3>{client.name}</h3>
                <p className="position">{client.position}</p>
                <p className="description">{client.text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
