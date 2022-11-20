import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation } from "swiper";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

SwiperCore.use([EffectFade, Navigation]);

const ImageSlider = (props) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="image-slider">
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
        {props.slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide"
              style={{
                position: "relative",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                position: "relative",
              }}
            >
              {/* <img src={image} alt="Slider Image" /> */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  background: "rgba(0, 0, 0,0.5)",
                }}
              ></div>
              {props.textArray && (
                <p
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    color: "white",
                    fontWeight: "bold",
                    width: "60%",
                    fontSize: "35px",
                  }}
                >
                  {props.textArray[index]}
                </p>
              )}
            </div>
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

export default ImageSlider;
