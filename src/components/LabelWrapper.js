import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import RoundLabels from "./RoundLabels";

const LabelWrapper = () => {
  return (
    <div className="LabelWrapper" >
      <div>
      <Swiper
        slidesPerView="4"
        spaceBetween="3"
        // loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          200: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          400: {
            autoplay:{
              delay:1500,
            },
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            autoplay:{
              delay:1500,
            },
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {autoplay:{
            delay:1500,
          },
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            autoplay:{
              delay:1500,
            },
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <RoundLabels icon={"heart"} Label={"Likes"} count={"6.3M"}/>
        </SwiperSlide>
        <SwiperSlide>
          <RoundLabels Label={"Online Events"} count={"23"} />
        </SwiperSlide>

        <SwiperSlide>
          <RoundLabels Label={"No of Shows"} count={"85"} />
        </SwiperSlide>
        <SwiperSlide>
          <RoundLabels Label={"Live Events"} count={'9'}/>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default LabelWrapper;
