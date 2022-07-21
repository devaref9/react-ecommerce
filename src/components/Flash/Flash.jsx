import useFetch from "../../customHooks/useFetch";
import { AiFillThunderbolt } from "react-icons/ai";
import ProductCard from "../ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";

import { Navigation } from "swiper";

const Flash = () => {

  const { data, loading } = useFetch(
    "https://api.storerestapi.com/products?limit=8&page=1"
  );

  return (
    <section className="Flash">
      {loading && <span>Loading...</span>}
      {!loading && (
        <>
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
            {data &&
              data.map((product) => {
                return (
                  <SwiperSlide>
                    <ProductCard
                      price={product.price}
                      title={product.title}
                      key={product._id}
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </>
      )}
    </section>
  );
};

export default Flash;
