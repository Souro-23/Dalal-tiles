import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import Link from "next/link";

const SidebarSlider = ({ products, heading, className = "" }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  // console.log(products);
  return (
    <div className={`sidebar-slider ${className}`}>
      <div className="header">
        <div className="slider-heading">{heading}</div>
        <div className="nav-buttons">
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
        {products.map((data, index) => (
          <SwiperSlide key={index}>
            <SidebarSlide
              image={data.image}
              title={data.title}
              link={data.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const SidebarSlide = ({ image, title, link }) => {
  console.log(link);
  return (
    <div className="sidebar-slide">
      {link && (
        <Link href={link}>
          {/* <p className="slide-heading">{title}</p> */}
          <img src={image} alt={title} className="slide-background" />
        </Link>
      )}
      {!link && <img src={image} alt={title} className="slide-background" />}
    </div>
  );
};

export default SidebarSlider;
