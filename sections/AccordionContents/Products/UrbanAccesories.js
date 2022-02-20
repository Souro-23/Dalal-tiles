import { useState, useEffect } from "react";
import ProductsSlider from "@components/ProductsSlider";
import { SwiperSlide } from "swiper/react";

const UrbanAccesories = (props) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const data = [
    {
      name: "Screens/Jali",
      image: "/products/urban/urban-1.png",
      subcategories: [
        {
          image: "/products/urban/urban-sub-1.png",
          link: "",
        },
        {
          image: "/products/urban/urban-sub-2.png",
          link: "",
        },
        {
          image: "/products/urban/urban-sub-3.png",
          link: "",
        },
        {
          image: "/products/urban/urban-sub-4.png",
          link: "",
        },
      ],
    },
    {
      name: "Columns",
      image: "/products/urban/urban-2.png",
      subcategories: [
        {
          image: "/products/urban/urban-sub-1.png",
          link: "",
        },
        {
          image: "/products/urban/urban-sub-1.png",
          link: "",
        },
        {
          image: "/products/urban/urban-sub-1.png",
          link: "",
        },
        {
          image: "/products/urban/urban-sub-1.png",
          link: "",
        },
      ],
    },
    {
      name: "Cornice",
      image: "/products/urban/urban-3.png",
      subcategories: [
        {
          image: "/products/urban/urban-sub-2.png",
          link: "",
        },
        {
          image: "/products/urban/urban-sub-2.png",
          link: "",
        },
        {
          image: "/products/urban/urban-sub-2.png",
          link: "",
        },
        {
          image: "/products/urban/urban-sub-2.png",
          link: "",
        },
      ],
    },
    {
      name: "Brackets",
      image: "/products/urban/urban-4.png",
      subcategories: [
        {
          image: "/products/urban/urban-sub-3.png",
          link: "",
        },
        {
          image: "/products/urban/urban-sub-3.png",
          link: "",
        },
        {
          image: "/products/urban/urban-sub-3.png",
          link: "",
        },
        {
          image: "/products/urban/urban-sub-3.png",
          link: "",
        },
      ],
    },
    {
      name: "Columns",
      image: "/products/urban/urban-2.png",
      subcategories: [
        {
          image: "/products/urban/urban-sub-1.png",
          link: "",
        },
        {
          image: "/products/urban/urban-sub-1.png",
          link: "",
        },
        {
          image: "/products/urban/urban-sub-1.png",
          link: "",
        },
        {
          image: "/products/urban/urban-sub-1.png",
          link: "",
        },
      ],
    },
    {
      name: "Cornice",
      image: "/products/urban/urban-3.png",
      subcategories: [
        {
          image: "/products/urban/urban-sub-3.png",
          link: "",
        },
        {
          image: "/products/urban/urban-sub-2.png",
          link: "",
        },
        {
          image: "/products/urban/urban-sub-1.png",
          link: "",
        },
        {
          image: "/products/urban/urban-sub-4.png",
          link: "",
        },
      ],
    },
  ];

  return (
    <>
      <ProductsSlider data={data} />
    </>
  );
};

export default UrbanAccesories;
