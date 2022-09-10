import Link from "next/link";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Navigation } from "swiper";
import { MdOutlineClose, MdMail } from "react-icons/md";
import { BiCube } from "react-icons/bi";
import { BsFileEarmarkPdf } from "react-icons/bs";
import Modal from "react-modal";
import { useMediaQuery } from "react-responsive";

const ProductsPopupSlider = (props) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const [activeSlide, setActiveSlide] = useState(0);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState();

  function openModal(item) {
    setModalData(item);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const isLaptopOrAbove = useMediaQuery({ query: "(min-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 640px)" });

  const getTotalChildrenSlide = () => {
    const activeSlideLength = props?.data[activeSlide]?.subCategories.length;

    if (isLaptopOrAbove) {
      return activeSlideLength > 4 ? 4 : activeSlideLength;
    } else if (isMobile) {
      return activeSlideLength > 2 ? 2 : activeSlideLength;
    }

    return 1;
  };

  return (
    <>
      <div className="products-slider">
        <div
          ref={navigationPrevRef}
          className="products-nav-buttons prev-btn border-bottom"
        >
          <IoIosArrowBack />
        </div>

        <div
          ref={navigationNextRef}
          className="products-nav-buttons next-btn border-bottom"
        >
          <IoIosArrowForward />
        </div>

        <Swiper
          // slidesPerView={4}
          spaceBetween={0}
          modules={[Navigation]}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          onSlideChange={(e) => setActiveSlide(e.realIndex)}
        >
          {props?.data?.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ height: "auto" }}
              onClick={() => setActiveSlide(index)}
            >
              {({ isActive }) => (
                <div
                  className={
                    activeSlide === index
                      ? "products-slider-slide border-bottom active"
                      : "products-slider-slide border-bottom"
                  }
                >
                  <img src={item.image} />
                  <div className="product-name">{item.name}</div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Slider 2 */}
      <div className="products-slider">
        <div ref={navigationPrevRef} className="products-nav-buttons prev-btn">
          <IoIosArrowBack />
        </div>

        <div ref={navigationNextRef} className="products-nav-buttons next-btn">
          <IoIosArrowForward />
        </div>

        <Swiper
          slidesPerView={getTotalChildrenSlide()}
          spaceBetween={0}
          modules={[Navigation]}
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
          {props?.data[activeSlide]?.subCategories?.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="products-slider-slide"
                onClick={() => openModal(item)}
              >
                <img src={item.image} alt={item.name} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <div className="product-modal">
          {modalData && (
            <>
              <div className="modal-header">
                <h2>{modalData?.name}</h2>

                <div className="close-btn" onClick={closeModal}>
                  <MdOutlineClose />
                </div>
              </div>
              <img
                src={modalData?.image}
                alt={modalData?.name}
                className="product-modal-image"
              />

              <div className="links">
                <a
                  href={modalData.download3d}
                  target="_blank"
                  rel="noreferrer"
                  className="detail-btn"
                >
                  <BiCube /> Download 3D
                </a>
                <a
                  href={modalData.downloadPdf}
                  target="_blank"
                  rel="noreferrer"
                  className="detail-btn"
                >
                  <BsFileEarmarkPdf /> Download Pdf
                </a>
                <a href="#" className="detail-btn">
                  <MdMail />
                  Enquire
                </a>
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ProductsPopupSlider;
