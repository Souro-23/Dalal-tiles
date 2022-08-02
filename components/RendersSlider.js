import Modal from "react-modal";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { Autoplay, Pagination, Navigation } from "swiper";

const RendersSlider = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState();

  function openModal(image) {
    setModalImage(image);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <div className="renders-slider">
        <div className="navigation-buttons black prev-btn">
          <div ref={navigationPrevRef}>
            <HiOutlineArrowLeft />
          </div>
        </div>

        <div className="navigation-buttons black next-btn">
          <div ref={navigationNextRef}>
            <HiOutlineArrowRight />
          </div>
        </div>
        <Swiper
          direction={"vertical"}
          spaceBetween={20}
          modules={[Navigation]}
          // slidesPerView={3}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1200: {
              slidesPerView: 2,
            },
            1300: {
              slidesPerView: 3,
            },
            1600: {
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
        >
          {props.data.map((item, index) => (
            <SwiperSlide key={index} onClick={() => openModal(item)}>
              <img src={item} alt="Renders" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={{
          content: { backgroundColor: "transparent", border: "none" },
      }}
      >
      <div className="renders-modal">
        <div className="close-btn" onClick={closeModal}>
          <MdOutlineClose color="white" />
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          slidesPerView={1}
          loop={true}
        >
          {props.data.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} alt="Render" className="render-image" />

            </SwiperSlide>
          ))}
        </Swiper>

{/* 
        {modalImage && (
            <img src={modalImage} alt="Render Image" className="render-image" />
          )} */}
      </div>
    </Modal>
    </>
  );
};

export default RendersSlider;
