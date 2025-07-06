import React from "react";
import "./Services.css";
import {
  FaCode,
  FaPaintBrush,
  FaChartLine,
  FaMobileAlt,
  FaServer,
  FaLock,
} from "react-icons/fa";

const Services = () => {
  const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "We specialize in building responsive, high-performance websites using the latest technologies and frameworks. From simple landing pages to complex web applications, our team ensures every project is optimized for speed, scalability, and user experience.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    description:
      "Our UI/UX design service focuses on crafting visually stunning and user-friendly interfaces. We emphasize intuitive navigation, consistent branding, and engaging user experiences that not only look great but also help retain users and improve overall satisfaction.",
  },
  {
    icon: <FaChartLine />,
    title: "SEO Optimization",
    description:
      "With our SEO optimization services, we help your website rank higher on search engines by improving its structure, content, and overall performance. We use proven strategies to increase your organic traffic and ensure your target audience finds you easily online.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Development",
    description:
      "We build fast, secure, and feature-rich mobile applications for both Android and iOS platforms. Whether it's a business app, eCommerce solution, or custom idea, our mobile development team ensures seamless performance and a great user experience across all devices.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description:
      "Our backend development service focuses on building powerful, scalable, and secure server-side systems. We create RESTful APIs, manage databases, and ensure your applications are ready for real-world performance, high traffic, and complex business logic.",
  },
  {
    icon: <FaLock />,
    title: "Cybersecurity",
    description:
      "We provide comprehensive cybersecurity solutions to protect your websites, applications, and data from threats. Our team performs regular security audits, applies best practices, and implements modern defense strategies to ensure the integrity and safety of your digital assets.",
  },
];


  return (
    <div className="mentors__services__page__container">
      <div className="services__page__content container">
        <h2 className="services__page__title">Our Services</h2>
        <p className="services__page__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          assumenda est ea. Facere consequuntur sed alias sapiente id. Fugit,
          provident?
        </p>
        <div className="services__page__cards">
          {services.map((service, index) => (
            <div className="services__page__card boxShadow" key={index}>
              <span>{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
