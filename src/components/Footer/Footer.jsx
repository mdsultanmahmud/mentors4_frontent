import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const menuList = [
    {
      link: "/",
      text: "Home",
    },
    {
      link: "/services",
      text: "Services",
    },
    {
      link: "/courses",
      text: "Courses",
    },
    {
      link: "/projects",
      text: "Projects",
    },
    {
      link: "/blog",
      text: "Blog",
    },
    {
      link: "/about",
      text: "About",
    },
    {
      link: "/contact",
      text: "Contact",
    },
  ];
  const socialLinks = [
    {
      link: "https://www.facebook.com",
      text: "Facebook",
    },
    {
      link: "https://www.instagram.com",
      text: "Instagram",
    },
    {
      link: "https://www.linkedin.com",
      text: "LinkedIn",
    },
    {
      link: "https://www.twitter.com",
      text: "Twitter",
    },
  ];
  return (
    <div className="mentors__data__footer__container">
      <div className="footer__main__container container">
        <div className="footer__item">
          <h1>Logo</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
            explicabo.
          </p>
          <div className="social__buttons">
            <FaFacebook />
            <FaInstagram />
            <FaFacebook />
            <FaInstagram />
            <FaFacebook />
          </div>
        </div>
        <div className="footer__item">
          <h3>Pages</h3>
          <ul>
            {menuList.map((menu, index) => (
              <li key={index}>
                <Link to={menu?.link}>{menu?.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__item">
          <h3>Our Services</h3>
          <ul>
            <li>Data Science</li>
            <li>Machine Learning</li>
            <li>AI Development</li>
            <li>Data Engineering</li>
          </ul>
        </div>
        <div className="footer__item">
          <h3>Social Links</h3>
          <ul>
            {socialLinks.map((menu, index) => (
              <li key={index}>
                <Link to={menu?.link}>{menu?.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__copywrite__section">
        <p>© 2025 Mentors4Data. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
