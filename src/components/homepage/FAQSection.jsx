import React, { useState } from "react";
import TitleComponent from "./TitleComponent";
import "./homepage.css";
import faq from "../../assets/images/faq.png";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqData = [
    {
      question: "What is the duration of each course?",
      answer:
        "Each course typically lasts 4–6 weeks, depending on the number of classes.",
    },
    {
      question: "Are the classes live or recorded?",
      answer:
        "Most courses are live via Google Meet, but recorded sessions are also provided.",
    },
    {
      question: "Do I get a certificate after completing a course?",
      answer:
        "Yes, you will receive a certificate upon successful completion of the course.",
    },
    {
      question: "Can I access the course material anytime?",
      answer: "Yes, once enrolled, you can access the materials 24/7.",
    },
    {
      question: "What is the refund policy?",
      answer:
        "You can request a full refund within 7 days of course enrollment if you're not satisfied.",
    },
  ];
  return (
    <div className="mentors__faq__main__container">
      <div className="faq__content__container container">
        <TitleComponent
          title={"Frequently Asked Questions"}
          description={
            "Browse through our most frequently asked questions to quickly find the information you need about our courses, schedules, certifications, and more. If you don’t see your question here, feel free to contact us!"
          }
        />
        <div className="faq__content">
          <div className="faq__img__container">
            <img src={faq} alt="" />
          </div>
          <div className="faq__items">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq__item ${openIndex === index ? "active" : ""}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="faq__question">
                  <span>{item?.question}</span>
                  <span className="faq__icon">
                    {openIndex !== index ? <FaPlus /> : <FaMinus />}
                  </span>
                </div>
                <div className="faq__answer">
                  <p>{item?.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
