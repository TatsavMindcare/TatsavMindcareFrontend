import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";


const ServiceSection = () => {
      const services = [
        {
          title: "Individual Therapy",
          description:
            "One on one Counseling that is customized to your goals...",
          img: "/images/service1.png",
        },
        {
          title: "Couples Therapy",
          description:
            "Relationships can sometimes become difficult to navigate...",
          img: "/images/coupleTherapy.png",
        },
        {
          title: "Family Therapy",
          description:
            "A family dynamic may become complex because of the number...",
          img: "/images/familyTherapy.png",
        },
      ];

  return (
    <section className="services">
    <h2 className="services-title">Our Services</h2>
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      style={{padding:"20px"}}
      pagination={{ clickable: true }}
      breakpoints={{
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }}
      modules={[Pagination]}
    >
      {services.map((service, index) => (
        <SwiperSlide key={index}>
          <div className="service-card">
            <div className="service-image">
              <img src={service.img} alt={service.title} />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
  )
}

export default ServiceSection