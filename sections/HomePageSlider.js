import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { HomePageSlides } from "_data/HomePageSlides";
import Link from "next/link";
// import video1 from "/images/homepage-slides/video-1.mp4";

SwiperCore.use([Navigation, EffectFade, Autoplay]);

const HomePageSlider = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const TEXTS = ["Quality", "Honesty", "Innovation"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="homepage-slider">
      <Swiper
        slidesPerView={1}
        effect={"fade"}
        autoplay={{
          delay: 4000,
        }}
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
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="homepage-slide">
            <p className="slide-heading">
              Committed
              <br /> to Quality
              {/* <span className="text-transition">
                {TEXTS[index % TEXTS.length]}
              </span> */}
              .
            </p>
            <p className="slide-description">{HomePageSlides[0].description}</p>
            {/* <img
              src={HomePageSlides[0].image}
              alt={HomePageSlides[0].title}
              className="slide-background"
            /> */}
            <video
              // style={{ width: "500px", height: "500px" }}
              autoPlay
              loop
              className="slide-background"
            >
              {/* <source src={video1} type="video/webm" /> */}
              <source src={HomePageSlides[0].image} type="video/mp4" />
              Sorry, your browser doesn't support videos.
            </video>
            <Link href="about">
              <button className="btn btn-outline-white">Know More</button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="homepage-slide">
            <p className="slide-heading">{HomePageSlides[1].title}</p>
            <p className="slide-description">{HomePageSlides[1].description}</p>
            {/* <img
              src={HomePageSlides[1].image}
              alt={HomePageSlides[1].title}
              className="slide-background"
            /> */}
            <video
              // style={{ width: "500px", height: "500px" }}
              autoPlay
              loop
              className="slide-background"
            >
              {/* <source src={video1} type="video/webm" /> */}
              <source src={HomePageSlides[1].image} type="video/mp4" />
              Sorry, your browser doesn't support videos.
            </video>

            <Link href="products">
              <button className="btn btn-outline-white">Know More</button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="homepage-slide">
            <p className="slide-heading">{HomePageSlides[2].title}</p>
            <p className="slide-description">{HomePageSlides[2].description}</p>
            {/* <img
              src={HomePageSlides[2].image}
              alt={HomePageSlides[2].title}
              className="slide-background"
            /> */}
            <video
              // style={{ width: "500px", height: "500px" }}
              autoPlay
              loop
              className="slide-background"
            >
              {/* <source src={video1} type="video/webm" /> */}
              <source src={HomePageSlides[2].image} type="video/mp4" />
              Sorry, your browser doesn't support videos.
            </video>
            <Link href="/seven-reasons-why">
              <a>
                <button className="btn btn-outline-white">Know More</button>
              </a>
            </Link>
          </div>
        </SwiperSlide>

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

// const HomePageSlide = ({ image, title, description }) => {
//   return (
//     <div className="homepage-slide">
//       <p className="slide-heading">{title}</p>
//       <p className="slide-description">{description}</p>
//       <img src={image} alt={title} className="slide-background" />
//       <button className="btn btn-outline-white">Know More</button>
//     </div>
//   );
// };

export default HomePageSlider;
