import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import ReviewCard from "./ReviewCard";
import ReviewData from "../Data/ReviewData";

const ReviewCardWrapper = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        navigation={true}
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {ReviewData.map((data, key) => {
          return (
            <SwiperSlide key={key}>
              <ReviewCard data={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ReviewCardWrapper;
