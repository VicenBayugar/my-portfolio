import React from "react";
import "./About.css";
import Me from "../../assets/Me.jpg";
import { FaAward, FaRegFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={Me} alt="About img" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ years working</small>
            </article>
            <article className="about_card">
              <FaRegFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small>11 completed projects</small>
            </article>
          </div>
          <p>
            I'm a very curious person, passionate about technology and music. I
            consider myself a pleasant, communicative and responsible person.
            I'm highly motivated to improve my skills, gain experience in this
            area and grow professionally.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's talk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
