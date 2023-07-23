import React from "react";
import styles from "../styles";

const Hero = () => (
  <div className="bg-primary flex flex-col justify-center leading-tight items-center pb-20 sm:pb-24 sm:pt-20 pt-20">
    <h4
      id="home"
      className={`${styles.heading4} text-[18px]`}
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-duration="1000"
    >
      Hello, my name is
    </h4>
    <h1
      className={`${styles.heading1} text-[50px] `}
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-duration="1000"
    >
      Yousuf <span className="text-secondary"> Ahmed </span>
    </h1>
    <h3
      className={`${styles.heading3} mb-[40px] text-[22px]`}
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-duration="1000"
    >
      I'am a Web Developer.
    </h3>
    <button
      className={`${styles.btn} py-[0.5rem] px-5 font-bold text-sm `}
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-duration="1000"
    >
      GET IN TOUCH
    </button>
  </div>
);

export default Hero;
