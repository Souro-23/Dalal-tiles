import HorizontalSlider from "@components/HorizontalSlider";
import { SwiperSlide } from "swiper/react";

import { Testimonials } from "_data/Testimonials";

const Achievements = (props) => {
  return (
    <HorizontalSlider>
      {Testimonials.map((item, index) => (
        <SwiperSlide key={index} style={{ height: "100%" }}>
          <div className="testimonial" key={index}>
            <div className="image">
              <img src={item.image} alt={item.name} />
            </div>
            <p className="description">{item.description}</p>
            <p className="name">{item.name}</p>
            <p className="designation">{item.designation}</p>
          </div>
        </SwiperSlide>
      ))}
    </HorizontalSlider>
  );
};

export default Achievements;
