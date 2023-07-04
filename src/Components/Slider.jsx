import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "../styles";

import { projects } from "../Constants";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Slider() {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        // Small devices (mobile phones)
        640: {
          slidesPerView: 2,
        },
        // Medium devices (tablets)
        768: {
          slidesPerView: 2,
        },
        // Large devices (laptops/desktops)
        1024: {
          slidesPerView: 3,
        },
        // Extra large devices (large laptops and desktops)
        1280: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: -10,
        },
      }}
      className="bg-primary"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-duration="800"
      data-aos-once="true"
    >
      <div
        className="flex justify-center items-center"
       
      >
        {projects.map((project) => (
          <SwiperSlide
          style={{
            borderRadius: "14px",
            background: "linear-gradient(225deg, #1b1b1b, #171717)",
            boxShadow: "-8px 8px 15px #101010, 8px -8px 15px #222222",
          }}
            key={project.id}
            className="text-white space-y-4 text-center pb-14  flex flex-col items-center justify-center "
          >
            <img
              src={project.img}
              alt="project-image"
              className="w-[360px] h-[230px] "
            />
            <h5 className="text-DimPink font-bold">{project.title}</h5>
            <p className="">{project.description}</p>
            <div className="space-x-6">
              <button className={`${styles.btn} py-1 px-3`}>
                {" "}
                <a href={project.viewSite} target="_blank">
                  {" "}
                  View Site{" "}
                </a>
              </button>
              <button className={`${styles.btn} py-1 px-3`}>
                {" "}
                <a href={project.viewCode} target="_blank">
                  {" "}
                  View Code{" "}
                </a>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
}

export default Slider;

