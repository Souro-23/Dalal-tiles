import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
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
          <HiOutlineArrowLeft />
        </div>

        <div
          ref={navigationNextRef}
          className="products-nav-buttons next-btn border-bottom"
        >
          <HiOutlineArrowRight />
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          modules={[Navigation]}
          loop={true}
          pagination={{
            clickable: true,
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
          <HiOutlineArrowLeft />
        </div>

        <div ref={navigationNextRef} className="products-nav-buttons next-btn">
          <HiOutlineArrowRight />
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          modules={[Navigation]}
          loop={true}
          pagination={{
            clickable: true,
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
