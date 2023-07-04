import React from "react";
import styles from "../styles";

const Skill = (props) => (
  <div className=" text-white px-4 py-3 ss:py-4 flex flex-col justify-center items-center lg:gap-3 ss:gap-5 gap-1" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
    <img className=" xl:pb-5" src={props.img} alt="icons"/>
    <h3 className={styles.heading3}>{props.title}</h3>
  </div>
);

export default Skill;
