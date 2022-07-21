import React from "react";
import "./Experience.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>My experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details_icon" />
              <div>
                <h4>Styled Components</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details_icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details_icon" />
              <div>
                <h4>jQuery</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details_icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details_icon" />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details_icon" />
              <div>
                <h4>React Native</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details_icon" />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details_icon" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details_icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details_icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details_icon" />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details_icon" />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill className="experience_details_icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
