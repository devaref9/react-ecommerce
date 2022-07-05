import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import ProductCard from "../ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";

import { Navigation } from "swiper";

const Flash = () => {
  return (
    <section className="Flash">
      <div className="Flash__heading">
        <span className="Flash__icon">
          <AiFillThunderbolt />
        </span>
        <h2 className="Flash__title">Flash Delas</h2>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Flash;
