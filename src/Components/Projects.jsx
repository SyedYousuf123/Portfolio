import React from "react";
import styles from "../styles";
import Slider from "./Slider";

const Projects = () => {
  return (
    <div className="bg-primary text-cente pb-16" id="projects">
      <h2
        className={`${styles.heading2} text-center py-11`}
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-once="true"
      >
        My Projects
      </h2>
      <Slider />
    </div>
  );
};

export default Projects;
