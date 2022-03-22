import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import Layout from "@components/Layout";
import HorizontalSlider from "@components/HorizontalSlider";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import HomePageSidebar from "@section/HomePageSidebar";

const products = () => {
  const data = [
    {
      title: "Landscape Products",
      image: "/products/slides/image-1.jpg",
      link: "products/landscape-products",
      downloadLink: "",
    },
    {
      title: "GRC Architectural Elements",
      image: "/products/slides/image-2.jpg",
      link: "products/landscape-products",
      downloadLink: "",
    },
    {
      title: "Wall Tiles and Panels",
      image: "/products/slides/image-1.jpg",
      link: "products/landscape-products",
      downloadLink: "",
    },
    {
      title: "Landscape Products 1",
      image: "/products/slides/image-2.jpg",
      link: "products/landscape-products",
      downloadLink: "",
    },
  ];
  return (
    <Layout sidebar={<HomePageSidebar />}>
      <div className="products-page">
        <HorizontalSlider slidesNumber={3}>
          {data.map((item, index) => (
            <SwiperSlide className="products-swiper-slide" key={index}>
              <Link href={item.link}>
                <a>
                  <div className="products-page-slide" key={index}>
                    <h2>{item.title}</h2>
                    <div className="image-wrapper">
                      <img src={item.image} alt={item.title} />
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="#">
                <a className="download-btn">
                  <BsFillCloudDownloadFill /> Download
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </HorizontalSlider>
      </div>
    </Layout>
  );
};

export default products;
