import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { Navigation } from "swiper";
import { useWindowDimensions } from "hooks/useWindowDimentions";

const SwatchSlider = (props) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const { height, width } = useWindowDimensions();

  return (
    <div className="swatch-slider">
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
        slidesPerView={1}
        spaceBetween={0}
        modules={[Navigation]}
        loop={true}
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
          <SwiperSlide key={index} style={{ height: "auto" }}>
            <div
              className="swatch-slide"
              style={{ height: `${height - 520}px` }}
            >
              <img src={item} alt={"Swatch-" + index} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwatchSlider;
