import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Navigation } from "swiper";

const ProductsSlider = (props) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      {/* Slider 1 */}
      <div className="products-slider">
        <div
          ref={navigationPrevRef}
          className="products-nav-buttons prev-btn border-bottom"
        >
          <IoIosArrowBack />
        </div>

        <div
          ref={navigationNextRef}
          className="products-nav-buttons next-btn border-bottom"
        >
          <IoIosArrowForward />
        </div>

        <Swiper
          // slidesPerView={4}
          spaceBetween={0}
          modules={[Navigation]}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          onSlideChange={(e) => setActiveSlide(e.realIndex)}
        >
          {props?.data?.map((item, index) => (
            <SwiperSlide key={index} style={{ height: "auto" }}>
              {({ isActive }) => (
                <div
                  className={
                    isActive
                      ? "products-slider-slide border-bottom active"
                      : "products-slider-slide border-bottom"
                  }
                >
                  <img src={item.image} />
                  <div className="product-name">{item.name}</div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Slider 2 */}
      <div className="products-slider">
        <div ref={navigationPrevRef} className="products-nav-buttons prev-btn">
          <IoIosArrowBack />
        </div>

        <div ref={navigationNextRef} className="products-nav-buttons next-btn">
          <IoIosArrowForward />
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          modules={[Navigation]}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
        >
          {props?.data[activeSlide]?.subcategories?.map((item, index) => (
            <SwiperSlide key={index} style={{ height: "auto" }}>
              <div className="products-slider-slide">
                <img src={item.image} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProductsSlider;
