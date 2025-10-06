// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay"; // Import autoplay styles
// import { Pagination, Autoplay } from "swiper/modules";

// const ServiceSection = () => {
//   const services = [
//     {
//       title: "IQ Testing",
//       description:
//         "Tatsav clinic offers professional IQ testing to assess your cognitive abilities, including problem-solving, reasoning, and memory. Conducted by licensed Clinical psychologists using standardized tools, IQ testing provides valuable insights into intellectual strengths and areas for improvement.",
//       img: "/images/IQ.jpg",
//     },
//     {
//       title: "Career Assesment",
//       description:
//         "Tatsav clinic provides career assessments to help you discover your strengths, interests, and values, guiding you towards a fulfilling career path. Whether you're exploring new career options or seeking growth in your current role, our assessments offer clarity and support for making informed career decisions.",
//       img: "/images/carrerasssesment1.png",
//     },
//     {
//       title: "Psychological Assessments & Testing",
//       description:
//         "At Tatsav clinic, we offer comprehensive psychological assessments and testing designed to better understand your unique mental and emotional needs. Our clinic offers professional psychological assessments and testing to provide valuable insights into your mental and emotional well-being",
//       img: "/images/psychological-tests.png",
//     },
//     {
//       title: "Individual Therapy",
//       description:
//         "At Tatsav clinic, individual therapy is a personalized, confidential service designed to help you address and overcome life's challenges. Our approach is rooted in empathy, compassion, and respect, offering a safe space where you can feel heard, understood, and supported.",
//       img: "/images/service1.png",
//     },
//   ];

//   return (
//     <section className="services">
//       <h2 className="services-title">Our Services</h2>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={10}
//         style={{ padding: "20px" }}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000, disableOnInteraction: false }} // Enable autoplay
//         breakpoints={{
//           768: { slidesPerView: 2, spaceBetween: 20 },
//           1024: { slidesPerView: 3, spaceBetween: 30 },
//         }}
//         modules={[Pagination, Autoplay]} // Add Autoplay module
//       >
//         {services.map((service, index) => (
//           <SwiperSlide key={index}>
//             <div className="service-card gap-3">
//               <div className="service-image">
//                 <img src={service.img} alt={service.title} />
//               </div>
//               <h3 className="service-title">{service.title}</h3>
//               <p className="service-description ">{service.description}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default ServiceSection;

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Add this
import "./serviceSection.css";

const ServiceSection = () => {
  const services = [
    {
      title: "IQ Testing",
      subtitle: "Understand Your Cognitive Strengths",
      description:
        "Professional IQ testing to assess problem-solving, reasoning, and memory. Conducted by licensed clinical psychologists using standardized tools.",
      img: "/images/IQ.jpg",
      icon: "🧠",
      link: "/iq-assessment", // ✅ Add link
    },
    {
      title: "Career Assessment",
      subtitle: "Find Your True Path",
      description:
        "Discover strengths, interests, and values to guide a fulfilling career path with clarity and support for informed decisions.",
      img: "/images/carrerasssesment1.png",
      icon: "🎯",
      link: "/career-counseling", // ✅ Add link
    },
    {
      title: "Psychological Assessments",
      subtitle: "Deep Insight Into Your Mind",
      description:
        "Comprehensive assessments to understand your mental and emotional needs and create personalized growth plans.",
      img: "/images/psychological-tests.png",
      icon: "🔍",
      link: "/psychological-test", // ✅ Add link
    },
    {
      title: "Individual Therapy",
      subtitle: "Personalized Healing Journey",
      description:
        "Safe, confidential therapy sessions offering support, empathy, and guidance for personal growth and healing.",
      img: "/images/service1.png",
      icon: "💚",
      link: "/individual-therapy", // ✅ Add link
    },
  ];

  return (
    <section className="services">
      <div className="services-header">
        <motion.h2
          className="services-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ✨ Our Services
        </motion.h2>
        <motion.p
          className="services-subtitle"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Explore professional services designed to support your mental health
          and well-being.
        </motion.p>
      </div>

      <div className="swiper-container">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 15 },
            480: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1280: { slidesPerView: 4, spaceBetween: 35 },
          }}
          modules={[Pagination, Autoplay]}
          className="service-swiper"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="service-image-wrapper">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="service-image"
                    loading="lazy"
                  />
                  <div className="service-icon">{service.icon}</div>
                </div>

                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <h4 className="service-subtitle">{service.subtitle}</h4>
                  <p className="service-description">{service.description}</p>

                  {/* ✅ Updated Button with React Router Link */}
                  <Link to={service.link} className="service-btn">
                    <span>Learn More</span>
                    <svg
                      className="btn-arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServiceSection;
