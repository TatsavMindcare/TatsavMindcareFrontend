import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const HeroSection = () => {
  const slides = [
    { img: "/images/feature-4.jpg", alt: "Slide 1" },
    { img: "/images/feature-5.jpg", alt: "Slide 2" },
  ];

  return (
    <section className="hero">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.img}
              className="d-block w-100 hero-img"
              style={{ height: "500px" }}
              alt={slide.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hero Overlay Content */}
      <div className="hero-overlay">
        <h2 className="hero-title">
          Healing Begins with Understanding – Let's Start the Journey Together
          with Tatsav MindCare.
        </h2>
        <div className="hero-buttons">
          <button className="hero-btn">Book Appointment</button>
          <button className="hero-btn">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
