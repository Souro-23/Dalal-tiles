import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Autoplay } from "swiper";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { HomePageSlides } from "_data/HomePageSlides";

SwiperCore.use([Navigation, EffectFade, Autoplay]);

const SevenReasonsContent = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="seven-reaons-content">
      <Swiper
        slidesPerView={1}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 3000,
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
        {/* Slide 1 */}
        <SwiperSlide className="seven-reasons-content">
          <h2 className="seven-reasons-title">
            <span className="number">01</span> QUALITY PRODUCTS
          </h2>
          <p className="seven-reasons-description">
            We Follow Strict Safety And Quality Control Procedures, That Covers
            The Whole Process From Detailing Stage To Handling Over And Maintain
            The High Quality Reputation Of Which We Are Proud, And For Which We
            Have Received Iso 9000:2008 And We Have Obtained License Of Is
            15658:2006.
          </p>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="seven-reasons-content">
          <h2 className="seven-reasons-title">
            <span className="number">02</span> UNMATCHED VERSATILITY
          </h2>
          <p className="seven-reasons-description">
            The Company Offers Various Thickness, Colour, Size & Design Options
            For Your Project Needs. We Manufacture A Wide Range Of Product
            Options Specifically According to Different Project Needs. The
            Manufacturing Techniques, Surface Textures And Unique Designs Are
            Available In A Versatile Palette To Choose From.
          </p>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="seven-reasons-content">
          <h2 className="seven-reasons-title">
            <span className="number">03</span> INNOVATION AT ITS CORE
          </h2>
          <p className="seven-reasons-description">
            Our Products Are Described As Planet Friendly, Innovative, Edgy,
            Bespoke By Our Customers. We At Dalal Tiles Ambitiously Open Up A
            World Of Possibilities To Realize Ideas Into Reality With Our
            Constantly Developing Tools And A Culture That Thrives On Innovation
            While Keeping Utility And Elegance In Place.
          </p>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide className="seven-reasons-content">
          <h2 className="seven-reasons-title">
            <span className="number">04</span> DURABLE AND RELIABLE
          </h2>
          <p className="seven-reasons-description">
            Originally founded in 1999, With Over 20 Years Of Excellence And
            Trust In The Industry, We Proudly Stand On Our Legacy And Prove Our
            Credibility With A Highly Knowledgeable And Proficient Team. The
            Continuous Efforts And Investment Put In Our Production Units And
            Types Of Equipment, Keep Us A Step Ahead Towards Providing You With
            Unique Designs, Quality, And Time-Proof Products.
          </p>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide className="seven-reasons-content">
          <h2 className="seven-reasons-title">
            <span className="number">05</span> THE DT INNOVATION HUB
          </h2>
          <p className="seven-reasons-description">
            We Follow Strict Safety And Quality Control Procedures, That Covers
            The Whole Process From Detailing Stage To Handling Over And Maintain
            The High Quality Reputation Of Which We Are Proud, And For Which We
            Have Received Iso 9000:2008 And We Have Obtained License Of Is
            15658:2006.
          </p>
        </SwiperSlide>

        {/* Slide 6 */}
        <SwiperSlide className="seven-reasons-content">
          <h2 className="seven-reasons-title">
            <span className="number">06</span> HONESTY & CONSISTENCY
          </h2>
          <p className="seven-reasons-description">
            Transparency Is A Key Driving Force Of The Family-Oriented Culture
            At Dalal Tiles. We Believe In Building Relationships And Nothing is
            More Important For Us Than Helping You Build Elegant Spaces That
            Articulate Function And Creativity. We Thrive On An Honest Approach
            With Leadership That Ensures The Best Of Experience At Your
            Disposal.
          </p>
        </SwiperSlide>

        {/* Slide 7 */}
        <SwiperSlide className="seven-reasons-content">
          <h2 className="seven-reasons-title">
            <span className="number">07</span> EXPERIENCE THAT MATTERS
          </h2>
          <p className="seven-reasons-description">
            Transparency Is A Key Driving Force Of The Family-Oriented Culture
            At Dalal Tiles. We Believe In Building Relationships And Nothing is
            More Important For Us Than Helping You Build Elegant Spaces That
            Articulate Function And Creativity. We Thrive On An Honest Approach
            With Leadership That Ensures The Best Of Experience At Your
            Disposal.
          </p>
        </SwiperSlide>
        <div className="navigation-buttons">
          <div ref={navigationPrevRef}>
            <HiOutlineArrowLeft />
          </div>
          <div ref={navigationNextRef}>
            <HiOutlineArrowRight />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default SevenReasonsContent;
