import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";

const SidebarSlider = ({ products, heading, className = "" }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const [selectedProductIndex, setSelectedProductIndex] = useState(0);

  // console.log(products);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      className={`sidebar-slider ${className}`}
    >
      <div className="header">
        <div className="slider-heading">{heading}</div>
        <div className="nav-buttons">
          <div
            onClick={() => {
              if (selectedProductIndex === 0) { 
                setSelectedProductIndex(products.length-1)
              }
              else {
                setSelectedProductIndex(
                  (selectedProductIndex - 1) % products.length
                );
              }   
            }}
          >
            <HiOutlineArrowLeft />
          </div>
          <div
            onClick={() => {
              setSelectedProductIndex(
                (selectedProductIndex + 1) % products.length
              );
            }}
          >
            <HiOutlineArrowRight />
          </div>
        </div>
      </div>
      <SidebarSlide
        image={products[selectedProductIndex].image}
        title={products[selectedProductIndex].title}
        link={products[selectedProductIndex].link}
      />
      {/* <div style={{ position: "relative" }}> */}
      {/* <p style={{ position: "absolute", top: "10px", left: 0 }}> */}
      <p style={{ margin: "10px 0px 0px 0px" }}>
        {products[selectedProductIndex].name}
      </p>
      <p style={{ fontSize: "14px", color: "gray" }}>
        {products[selectedProductIndex].category}
      </p>
    </div>
    // </div>
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
