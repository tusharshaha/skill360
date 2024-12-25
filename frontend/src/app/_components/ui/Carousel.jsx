import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import CourseCard from './CourseCard';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Carousel = ({ data }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }}
      modules={[FreeMode, Pagination]}
      className=""
    >
      {data?.map((ele, i) => (
        <SwiperSlide key={i} className="mb-16">
          <CourseCard course={ele} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
