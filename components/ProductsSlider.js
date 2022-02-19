import { useRef } from "react";
import { Swiper } from "swiper/react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { Navigation } from "swiper";

const ProductsSlider = (props) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="products-slider">
      <div ref={navigationPrevRef} className="products-nav-buttons prev-btn">
        <HiOutlineArrowLeft />
      </div>

      <div ref={navigationNextRef} className="products-nav-buttons next-btn">
        <HiOutlineArrowRight />
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={0}
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

export default ProductsSlider;
