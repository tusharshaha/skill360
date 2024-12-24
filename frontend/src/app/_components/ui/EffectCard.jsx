"use client"

import React from 'react';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from 'swiper/modules';
import CourseCard from './CourseCard';

const EffectCard = ({ data }) => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="max-w-[390px]"
      >
        {
          data?.map((ele, i) => <SwiperSlide key={i}>
            <CourseCard course={ele}/>
          </SwiperSlide>)
        }
      </Swiper>
    </>
  );
};

export default EffectCard;