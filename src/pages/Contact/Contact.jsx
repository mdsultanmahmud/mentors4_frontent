import React from "react";
import "./Contact.css";
import { FaFacebook, FaInstagram, FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { TfiWorld } from "react-icons/tfi";

const Contact = () => {
  const address = [
    {
      icon: <FaLocationDot />,
      text: "Binodpur, Rajshahi, Bangladesh",
    },
    {
      icon: <BiLogoGmail />,
      text: "support@mentors4data.com",
    },
    {
      icon: <MdCall />,
      text: "+880 1581192171",
    },
    {
      icon: <TfiWorld />,
      text: "mentors4data.com",
    },
  ];
  return (
    <div className="mentors__contact__container">
      <div className="contact__img__container">
        <div className="img__description__container">
          <h2>Contact Us</h2>
          <p>
            Have a question or need support? Reach out to us anytime through the
            form below or email. We're here to help and would love to hear from
            you!
          </p>
        </div>
      </div>
      <div className="contact__content__container container">
        <div className="contact__content boxShadow">
          <div className="contact__info__input">
            <form action="">
              <div className="input__group__container">
                <div className="input__group">
                  <label htmlFor="username">Name</label>
                  <input type="text" id="username" name="username" />
                </div>
                <div className="input__group">
                  <label htmlFor="gmail">Email</label>
                  <input type="email" id="gmail" name="gmail" />
                </div>
              </div>

              <div className="input__group">
                <label htmlFor="message">Message</label>
                <textarea type="text" id="message" name="message" />
              </div>
              <button>Send Message</button>
            </form>
          </div>
          <div className="contact__info">
            <h3>Let's Contact with Us</h3>
            <div className="address__container">
              {address.map((item, index) => (
                <div key={index} className="address">
                  <span>{item?.icon}</span>
                  <p>{item?.text}</p>
                </div>
              ))}
            </div>
            <div className="social__icon__container">
              <FaFacebook />
              <FaInstagram />
              <FaFacebook />
              <FaInstagram />
              <FaFacebook />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
