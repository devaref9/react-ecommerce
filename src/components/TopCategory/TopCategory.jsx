import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import { FaThLarge } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import ViewAll from "../ViewAll/ViewAll";

const TopCategory = () => {
  return (
    <section className="TopCategory">
      <div className="TopCategory__top">
        <div className="TopCategory__heading">
          <span className="TopCategory__icon">
            <FaThLarge />
          </span>
          <h2 className="TopCategory__title">Top Categories</h2>
        </div>
        <ViewAll />
      </div>

      <Swiper
        slidesPerGroup={1}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default TopCategory;
