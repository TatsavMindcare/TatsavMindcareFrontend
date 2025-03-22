import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay styles
import { Pagination, Autoplay } from "swiper/modules";

const ServiceSection = () => {
  const services = [
    {
      title: "IQ Testing",
      description:
        "Tatsav clinic offers professional IQ testing to assess your cognitive abilities, including problem-solving, reasoning, and memory. Conducted by licensed Clinical psychologists using standardized tools, IQ testing provides valuable insights into intellectual strengths and areas for improvement.",
      img: "/images/IQ.jpg",
    },
    {
      title: "Career Assesment",
      description:
        "Tatsav clinic provides career assessments to help you discover your strengths, interests, and values, guiding you towards a fulfilling career path. Whether you're exploring new career options or seeking growth in your current role, our assessments offer clarity and support for making informed career decisions.",
      img: "/images/carrerasssesment1.png",
    },
    {
      title: "Psychological Assessments & Testing",
      description:
        "At Tatsav clinic, we offer comprehensive psychological assessments and testing designed to better understand your unique mental and emotional needs. Our clinic offers professional psychological assessments and testing to provide valuable insights into your mental and emotional well-being",
      img: "/images/psychological-tests.png",
    },
    {
      title: "Individual Therapy",
      description:
        "At Tatsav clinic, individual therapy is a personalized, confidential service designed to help you address and overcome life's challenges. Our approach is rooted in empathy, compassion, and respect, offering a safe space where you can feel heard, understood, and supported.",
      img: "/images/service1.png",
    },
  ];

  return (
    <section className="services">
      <h2 className="services-title">Our Services</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        style={{ padding: "20px" }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Enable autoplay
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        modules={[Pagination, Autoplay]} // Add Autoplay module
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="service-card gap-3">
              <div className="service-image">
                <img src={service.img} alt={service.title} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description ">{service.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServiceSection;
