import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { Navigation } from "swiper";

const RendersSlider = (props) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="renders-slider">
      <div className="navigation-buttons black prev-btn">
        <div ref={navigationPrevRef}>
          <HiOutlineArrowLeft />
        </div>
      </div>

      <div className="navigation-buttons black next-btn">
        <div ref={navigationNextRef}>
          <HiOutlineArrowRight />
        </div>
      </div>

      <Swiper
        direction={"vertical"}
        spaceBetween={30}
        modules={[Navigation]}
        // slidesPerView={3}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 2,
          },
          1600: {
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
        {props.data.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RendersSlider;
