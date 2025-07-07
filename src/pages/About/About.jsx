import React from "react";
import "./About.css";
import person1 from "../../assets/images/person1.jpg";
import person2 from "../../assets/images/person2.jpg";
import person3 from "../../assets/images/person3.jpg";
const About = () => {
  const teamMembers = [
    {
      img: person1,
      name: "John Doe",
      title: "Lead Developer",
      bio: "John is a senior full-stack developer with over 10 years of experience in building scalable web applications and leading development teams.",
    },
    {
      img: person2,
      name: "Sarah Khan",
      title: "UI/UX Designer",
      bio: "Sarah crafts beautiful and intuitive user experiences. She ensures every design is not only visually appealing but also user-friendly.",
    },
    {
      img: person3,
      name: "Michael Smith",
      title: "Backend Engineer",
      bio: "Michael specializes in server-side logic, API development, and database management to ensure smooth backend operations.",
    },
    {
      img: person1,
      name: "Emily Zhang",
      title: "Project Manager",
      bio: "Emily coordinates cross-functional teams, ensuring projects are delivered on time and within scope, keeping everything running smoothly.",
    },
    {
      img: person2,
      name: "David Lee",
      title: "Mobile App Developer",
      bio: "David builds high-performance mobile apps for Android and iOS, focusing on speed, security, and user experience.",
    },
    {
      img: person3,
      name: "Amina Rahman",
      title: "SEO Specialist",
      bio: "Amina helps clients grow their online visibility through smart keyword strategies, content optimization, and data-driven SEO techniques.",
    },
  ];

  return (
    <div className="mentors__about__page__container">
      <div className="about__page__content container">
        <h2 className="about__us__title">Our Team</h2>
        <div className="about__page__team__cards">
          {teamMembers.map((member, index) => (
            <div className="about__page__team__card boxShadow" key={index}>
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.title}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
        <div className="about__page__vision__mission">
  <div className="about__page__section">
    <h2>Our Vision</h2>
    <p>
      To be a global leader in digital innovation by empowering businesses and
      individuals through technology, creativity, and meaningful solutions that
      shape the future.
    </p>
  </div>

  <div className="about__page__section">
    <h2>Our Mission</h2>
    <p>
      Our mission is to deliver high-quality, user-centric digital products and
      services that solve real-world problems, foster growth, and create value
      for our clients, partners, and communities. We are committed to
      innovation, excellence, and continuous improvement.
    </p>
  </div>

  <div className="about__page__section">
    <h2>Who We Are</h2>
    <p>
      We are a passionate team of developers, designers, analysts, and
      strategists dedicated to turning ideas into impactful digital experiences.
      With a strong foundation in technology and a focus on innovation, we work
      collaboratively to help businesses thrive in the digital age.
    </p>
  </div>

  <div className="about__page__section">
    <h2>What We Do</h2>
    <p>
      We provide a wide range of services including web development, mobile app
      development, UI/UX design, data analysis, and digital strategy. Our goal
      is to build functional, scalable, and engaging solutions that align with
      your vision and drive measurable results.
    </p>
  </div>
</div>

      </div>
    </div>
  );
};

export default About;
