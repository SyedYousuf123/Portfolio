import React from "react";
import Me from "../assets/Me.jfif";
import styles from "../styles";
const AboutMe = () => {
  return (
    <div
      className="bg-primary gap-6 flex sm:flex-row flex-col justify-center w-full items-center pb-16"
      id="about"
    >
      <img
        src={Me}
        alt="Me"
        className="rounded-md xs:w-[50%] xs:h-[50%] ss:w-[40%] ss:h-[30%] md:w-[30%] w-[80%] h-[50%] mb-6"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="900"
      />
      <div className="sm:w-[40%] w-[60%]  sm:justify-start justify-center sm:items-start text-center">
        <h2
          className={`${styles.heading2} ss:mb-[18px] mb-[14px] `}
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="900"
        >
          About Me
        </h2>
        <h5
          className="text-white tracking-[2px] font-bold ss:text-[22px] mb-[25px] capitalize"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-once="true"
        >
          Developer <span className="text-secondary">& Designer</span>
        </h5>
        <p
          className="text-DimPink tracking-[2px] font-bold ss:text-[20px] text-[17px] ss:mb-[45px]"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="900"
        >
          I am a front-end web developer. I can provide clean code and pixel
          perfect design. I also make the website more & more interactive with
          web animations.A responsive design makes your website accessible to
          all users, regardless of their device.
        </p>
        <button
          className={`${styles.btn} py-1 mt-10 sm:mt-1 px-5 font-semibold`}
          data-aos="fade-up"
          data-aos-once="true"
          // data-aos-duration="1000"
        >
          Let's talk
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
