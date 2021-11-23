import { Swiper, SwiperSlide } from "swiper/react";

const HomePageSlides = [
  {
    image: "images/homepage-slides/slide-1.png",
    title: "Committed to Quality.",
    description:
      "Welcome to Dalal Tiles For the past 50 years, we've been at work constantly committed to make building products worthy of your spaces.",
  },
  {
    image: "images/homepage-slides/slide-2.png",
    title: "The Skin You Need.",
    description:
      "Our freshly updated catalogue is up now. Get your digital copy to explore our whole range and a fresh new look.",
  },
  {
    image: "images/homepage-slides/slide-3.png",
    title: "7 Reasons of Success.",
    description:
      "A partnership that backs you in constructing innovative possibilities.",
  },
];

const HomePageSlider = () => {
  return (
    <div className="homepage-slider">
      <Swiper spaceBetween={50} slidesPerView={1}>
        {HomePageSlides.map((data, index) => (
          <SwiperSlide key={index}>
            <HomePageSlide
              image={data.image}
              title={data.title}
              description={data.description}
            />
          </SwiperSlide>
        ))}
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
    </div>
  );
};

export default HomePageSlider;
