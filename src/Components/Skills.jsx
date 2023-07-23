import React from "react";
import styles from "../styles";
import Skill from "./Skill";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";

const Skills = () => {
  return (
    <div
      className="bg-primary flex flex-col justify-center items-center"
      id="skills"
    >
      <h2
        className={`${styles.heading2}`}
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-once="true"
      >
        My Skills
      </h2>
      <div
        className=" ss:flex flex-row items-center justify-center align-middle bg-secondary rounded-lg my-16 px-3"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-once="true"
      >
        <Skill img={html} title="Html" />
        <Skill img={css} title="Css" />
        <Skill img={js} title="Javascript" />
        <Skill img={css} title="Tailwind" />
        <Skill img={react} title="React" />
      </div>
    </div>
  );
};

export default Skills;
