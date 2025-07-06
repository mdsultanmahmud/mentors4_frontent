import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
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
  return (
    <div>
      <div className="mentors__navbar__container boxShadow">
        <div className="mentors__navbar__logo__container">
          <h1>
            Mentors4<span>Data</span>
          </h1>
        </div>

        <ul className="mentors__navbar__menu__container">
          {menuList.map((menu, index) => (
            <li key={index}>
              <Link
                to={`${menu?.link}`}
                className={`${
                  location?.pathname === menu?.link ? "active" : ""
                }`}
              >
                {menu?.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mentors__navbar__right">
          <button>Login</button>
          <div className="mentors__small__navbar__btn">
            {!open ? (
              <FaBarsStaggered size={20} onClick={() => setOpen(true)} />
            ) : (
              <RxCross2 size={20} onClick={() => setOpen(false)} />
            )}
          </div>
        </div>
      </div>
      <div
        className={`mentors__navbar__container__sm boxShadow ${
          open ? "active" : ""
        }`}
      >
        <ul className="mentors__navbar__menu__container__sm">
          {menuList.map((menu, index) => (
            <li key={index} onClick={() => setOpen(false)}>
              <Link
                to={`${menu?.link}`}
                className={`${
                  location?.pathname === menu?.link ? "active" : ""
                }`}
              >
                {menu?.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
