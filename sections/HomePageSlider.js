import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation } from "swiper";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { HomePageSlides } from "_data/HomePageSlides";

SwiperCore.use([Navigation]);

const HomePageSlider = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="homepage-slider">
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
            <HomePageSlide
              image={data.image}
              title={data.title}
              description={data.description}
            />
          </SwiperSlide>
        ))}
        <div className="navigation-buttons">
          <div ref={navigationPrevRef}>
            <HiOutlineArrowLeft />
          </div>
          <div ref={navigationNextRef}>
            <HiOutlineArrowRight />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

const HomePageSlide = ({ image, title, description }) => {
  return (
    <div className="homepage-slide">
      <p className="slide-heading">{title}</p>
      <p className="slide-description">{description}</p>
      <img src={image} alt={title} className="slide-background" />
      <button className="btn btn-outline-white">Know More</button>
    </div>
  );
};

export default HomePageSlider;
