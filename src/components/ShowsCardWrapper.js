import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import ShowsCard from "./ShowsCard";
import UpcomingShowsData from "../Data/UpcomingShowData";
const ShowsCardWrapper = () => {
  return (
    <div>
      <Swiper
        slidesPerView={30}
        loop={true}
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
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {UpcomingShowsData.map((data, key) => {
          return (
            <SwiperSlide key={key}>
              <ShowsCard data={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ShowsCardWrapper;
