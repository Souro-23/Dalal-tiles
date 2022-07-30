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
      image: "/products/slides/landscape_products.png",
      link: "products/landscape-products",
      downloadLink: "https://drive.google.com/file/d/112Fya2jJvV8klNlbs7qBMsKMSDsunvDA/view?usp=sharing",
    },
    {
      title: "GRC Architectural Elements",
      image: "/products/slides/GRC.png",
      link: "products/landscape-products",
      downloadLink: "https://drive.google.com/file/d/1jY--1B-GsgmTgvyFwkI7TwONxSuv4Unv/view?usp=sharing",
    },
    {
      title: "Wall Tiles and Panels",
      image: "/products/slides/wall_tiles.png",
      link: "products/landscape-products",
      downloadLink: "https://drive.google.com/file/d/1-y0j5vxKSGO80hCny3pnZHUTlv5VfsEj/view?usp=sharing",
    },
    {
      title: "Landscape Products 1",
      image: "/products/slides/landscape_products.png",
      link: "products/landscape-products",
      downloadLink: "https://drive.google.com/file/d/112Fya2jJvV8klNlbs7qBMsKMSDsunvDA/view?usp=sharing",
    },
  ];
  return (
    <Layout sidebar={<HomePageSidebar />}>
      <div className="catalogue-page">
        <HorizontalSlider slidesNumber={3}>
          {data.map((item, index) => (
            <SwiperSlide className="products-swiper-slide" key={index}>
              {/* <Link href={item.link}> */}
                <a>
                  <div className="products-page-slide" key={index}>
                    <h2>{item.title}</h2>
                    <div className="image-wrapper">
                      <img src={item.image} alt={item.title} />
                    </div>
                  </div>
                </a>
              {/* </Link> */}
                <a href={item.downloadLink} target="_blank"  rel="noreferrer" className="download-btn">
                  <BsFillCloudDownloadFill /> Download
                </a>
            </SwiperSlide>
          ))}
        </HorizontalSlider>
      </div>
    </Layout>
  );
};

export default products;
