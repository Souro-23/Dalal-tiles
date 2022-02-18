import { useRef } from "react";
import { Swiper } from "swiper/react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { Navigation } from "swiper";

const HorizontalSlider = (props) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="horizontal-slider">
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
        slidesPerView={props.slidesNumber || 1}
        spaceBetween={30}
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
        {props.children}
      </Swiper>
    </div>
  );
};

export default HorizontalSlider;
