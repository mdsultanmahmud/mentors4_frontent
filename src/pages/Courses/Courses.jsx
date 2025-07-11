import React, { useState } from "react";
import "./Courses.css";
import pic from "../../assets/images/blog1.jpg";
const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");

  const courses = [
    {
      id: 1,
      name: "React Development Bootcamp",
      instructor: "Md. Sultan Mahmud",
      classes: 22,
      price: 500,
      priceType: "Paid",
      category: "Web Development",
      summary:
        "Learn the fundamentals of React and build real-world projects with hands-on practice.",
    },
    {
      id: 2,
      name: "Data Analysis with Python",
      instructor: "Md. Sultan Mahmud",
      classes: 18,
      price: 0,
      priceType: "Free",
      category: "Data Science",
      summary:
        "Explore data analysis techniques using pandas, NumPy, and visualization libraries.",
    },
    {
      id: 3,
      name: "Modern JavaScript Essentials",
      instructor: "Md. Sultan Mahmud",
      classes: 16,
      price: 400,
      priceType: "Paid",
      category: "Web Development",
      summary:
        "Master ES6+ features, asynchronous programming, and real-world JS concepts.",
    },
    {
      id: 4,
      name: "Web Design with HTML & CSS",
      instructor: "Md. Sultan Mahmud",
      classes: 20,
      price: 0,
      priceType: "Free",
      category: "Design",
      summary:
        "Build responsive and attractive websites using HTML5, CSS3, and Flexbox/Grid.",
    },
    {
      id: 5,
      name: "Intro to SQL & Databases",
      instructor: "Md. Sultan Mahmud",
      classes: 15,
      price: 450,
      priceType: "Paid",
      category: "Data Science",
      summary:
        "Understand relational databases, queries, and how to manage structured data with SQL.",
    },
    {
      id: 6,
      name: "Mobile App Development with Flutter",
      instructor: "Md. Sultan Mahmud",
      classes: 24,
      price: 700,
      priceType: "Paid",
      category: "Mobile Development",
      summary:
        "Build cross-platform mobile apps using Flutter and Dart with real-world projects.",
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesPrice =
      selectedPrice === "All" ||
      (selectedPrice === "Free" && course.price === 0) ||
      (selectedPrice === "Paid" && course.price > 0);
    return matchesCategory && matchesPrice;
  });

  return (
    <div className="mentors__courses__main__container">
      <div className="courses__content container">
        <div className="courses__heading__container">
          <h3>Our Courses</h3>
          <p>
            Explore in-depth, industry-relevant courses designed to boost your
            skills and confidence. Learn at your own pace with support from
            experienced instructors.
          </p>
        </div>
        <div className="course__filtering__container">
          <h2 className="filter__title">Filter</h2>

          {/* Category Filter */}
          <div className="filter__categories">
            <h3>Categories -- </h3>
            <ul>
              <li
                className={selectedCategory === "All" ? "active" : ""}
                onClick={() => setSelectedCategory("All")}
              >
                All
              </li>
              <li
                className={
                  selectedCategory === "Web Development" ? "active" : ""
                }
                onClick={() => setSelectedCategory("Web Development")}
              >
                Web Development
              </li>
              <li
                className={selectedCategory === "Data Science" ? "active" : ""}
                onClick={() => setSelectedCategory("Data Science")}
              >
                Data Science
              </li>
              <li
                className={
                  selectedCategory === "Mobile Development" ? "active" : ""
                }
                onClick={() => setSelectedCategory("Mobile Development")}
              >
                Mobile Development
              </li>
              <li
                className={selectedCategory === "Design" ? "active" : ""}
                onClick={() => setSelectedCategory("Design")}
              >
                Design
              </li>
              <li
                className={selectedCategory === "Marketing" ? "active" : ""}
                onClick={() => setSelectedCategory("Marketing")}
              >
                Marketing
              </li>
            </ul>
          </div>

          {/* Price Filter */}
          <div className="filter__categories">
            <h3>Price -- </h3>
            <ul>
              <li
                className={selectedPrice === "All" ? "active" : ""}
                onClick={() => setSelectedPrice("All")}
              >
                All
              </li>
              <li
                className={selectedPrice === "Free" ? "active" : ""}
                onClick={() => setSelectedPrice("Free")}
              >
                Free
              </li>
              <li
                className={selectedPrice === "Paid" ? "active" : ""}
                onClick={() => setSelectedPrice("Paid")}
              >
                Paid
              </li>
            </ul>
          </div>
        </div>
        {filteredCourses.length === 0 ? (
          <div className="no__courses__found">
            <h3>No courses found for the selected filters.</h3>
          </div>
        ) : (
          <>
            <div className="course__card__items fade__in">
              {filteredCourses.map((course) => (
                <div className="course__card__item boxShadow" key={course.id}>
                  <img src={pic} alt="Course Thumbnail" />
                  <div className="course__description">
                    <h4>{course.name}</h4>
                    <p>
                      <strong>Instructor: </strong>
                      {course.instructor}
                    </p>
                    <p>
                      <strong>Class: </strong>
                      {course.classes}
                    </p>
                    <p>
                      <strong>Price: </strong>
                      {course.price} BDT
                    </p>
                    <p className="course__summary">{course.summary}</p>
                    <button className="enroll__button">Enroll</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Courses;
