import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Autoplay } from "swiper";

SwiperCore.use([Navigation, EffectFade, Autoplay]);

const SevenReasonsSlider = () => {
  return (
    <div className="seven-reasons-slider">
      <h2 className="slider-heading">
        7 Reasons for a successfull project with dalal tiles.
      </h2>
      <Swiper
        slidesPerView={1}
        // effect={"slide"}
        // loop={true}
        // autoplay={{
        //   delay: 3000,
        // }}
        className="seven-reasons-swiper"
      >
        {/* Slide 1 */}
        <SwiperSlide className="seven-reasons-slide">
          <img
            src="/images/seven-reasons.png"
            alt="Seven reasons why"
            className="slide-image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SevenReasonsSlider;
