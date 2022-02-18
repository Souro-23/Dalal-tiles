import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { HomePageSlides } from "_data/HomePageSlides";

const SidebarSlider = ({ heading, className = "" }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className={`sidebar-slider ${className}`}>
      <div className="header">
        <div className="slider-heading">{heading}</div>
        <div className="navigation-buttons">
          <div ref={navigationPrevRef}>
            <HiOutlineArrowLeft />
          </div>
          <div ref={navigationNextRef}>
            <HiOutlineArrowRight />
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        effect={"fade"}
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
        {HomePageSlides.map((data, index) => (
          <SwiperSlide key={index}>
            <SidebarSlide image={data.image} title={data.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const SidebarSlide = ({ image, title }) => {
  return (
    <div className="sidebar-slide">
      <p className="slide-heading">{title}</p>
      <img src={image} alt={title} className="slide-background" />
    </div>
  );
};

export default SidebarSlider;
