import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Autoplay } from "swiper";
import { HomePageSlides } from "_data/HomePageSlides";

SwiperCore.use([Navigation, EffectFade, Autoplay]);

const SevenReasonsSlider = () => {
  return (
    <div className="seven-reasons-slider">
      <h2 className="slider-heading">
        7 Reasons for a successfull project with dalal tiles.
      </h2>
      <Swiper
        slidesPerView={1}
        effect={"slide"}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        className="seven-reasons-swiper"
      >
        {/* Slide 2 */}
        <SwiperSlide className="seven-reasons-slide">
          <img
            src={HomePageSlides[1].image}
            alt={HomePageSlides[1].title}
            className="slide-image"
          />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="seven-reasons-slide">
          <img
            src={HomePageSlides[2].image}
            alt={HomePageSlides[2].title}
            className="slide-image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SevenReasonsSlider;
