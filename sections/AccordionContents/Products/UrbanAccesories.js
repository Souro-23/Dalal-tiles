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
      <ProductsSlider>
        {data.map((item, index) => (
          <SwiperSlide key={index} style={{ height: "auto" }}>
            {({ isActive }) => (
              <Slide
                index={index}
                isActive={isActive}
                setActiveSlide={setActiveSlide}
                image={item.image}
                name={item.name}
              />
            )}
          </SwiperSlide>
        ))}
      </ProductsSlider>

      {/* Sub categories */}
      <ProductsSlider>
        {data[activeSlide].subcategories.map((item, index) => (
          <SwiperSlide key={index} style={{ height: "auto" }}>
            <div className="products-slider-slide">
              <img src={item.image} />
            </div>
          </SwiperSlide>
        ))}
      </ProductsSlider>
    </>
  );
};

const Slide = (props) => {
  useEffect(() => {
    if (props.isActive === true) {
      props.setActiveSlide(props.index);
    }
  }, [props]);

  return (
    <div
      className={
        props.isActive
          ? "products-slider-slide border-bottom active"
          : "products-slider-slide border-bottom"
      }
    >
      <img src={props.image} />
      <div className="product-name">{props.name}</div>
    </div>
  );
};

export default UrbanAccesories;
