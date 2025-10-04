

import AboutMe from "./AboutMe";
import ServiceSection from "./ServiceSection";
import ContactForm from "./ContactForm";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import './HeroSection.css'

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);


  const slides = [
    {
      img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Mental Health Support - Therapy Session",
      title: "Your Mental Health Journey Starts Here",
      subtitle: "Professional psychological support with compassionate care. Take the first step towards a healthier, happier you.",
      buttons: [
        { text: "Book Consultation", type: "primary", icon: "📅" },
        { text: "Learn More", type: "secondary", icon: "→" }
      ],
      stats: [
        { number: "500+", label: "Clients Helped" },
        { number: "98%", label: "Success Rate" },
        { number: "5+", label: "Years Experience" }
      ]
    },
    {
      img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2089&q=80", 
      alt: "IQ Testing and Psychological Assessment",
      title: "Discover Your Cognitive Potential",
      subtitle: "Comprehensive IQ testing and psychological assessments conducted by certified professionals with detailed insights.",
      buttons: [
        { text: "Schedule Test", type: "primary", icon: "🧠" },
        { text: "View Services", type: "secondary", icon: "→" }
      ],
      stats: [
        { number: "1000+", label: "Tests Conducted" },
        { number: "Expert", label: "Analysis" },
        { number: "24h", label: "Quick Results" }
      ]
    },
    {
      img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Career Assessment and Guidance",
      title: "Find Your Perfect Career Path", 
      subtitle: "Professional career assessments to align your strengths, interests, and values with the right opportunities.",
      buttons: [
        { text: "Start Assessment", type: "primary", icon: "🎯" },
        { text: "Career Guide", type: "secondary", icon: "→" }
      ],
      stats: [
        { number: "300+", label: "Career Paths" },
        { number: "85%", label: "Job Satisfaction" },
        { number: "Custom", label: "Recommendations" }
      ]
    }
  ];

  const slideVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.5 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.4, ease: "easeOut" }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.6, staggerChildren: 0.1 }
    }
  };

  const statItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };
//   const slides = [
//   {
//     img: "/images/banner1.jpg",
//     alt: "Banner 1",
//     title: "Healing Begins with Understanding",
//     subtitle: "Let's Start the Journey Together with Tatsav MindCare.",
//     buttons: [
//       { text: "Book Appointment", type: "primary" },
//       { text: "Read More", type: "secondary" }
//     ]
//   },
//   {
//     img: "/images/banner2.jpg",
//     alt: "Banner 2",
//     title: "Your Mental Health Matters",
//     subtitle: "Professional counseling services tailored for you.",
//     buttons: [
//       { text: "Get Started", type: "primary" }
//     ]
//   },
//   {
//     img: "/images/banner3.jpg",
//     alt: "Banner 3",
//     title: "Take the First Step",
//     subtitle: "Discover tools to improve your well-being today.",
//     buttons: [
//       { text: "Explore Services", type: "primary" },
//       { text: "Contact Us", type: "secondary" }
//     ]
//   }
// ];


  return (
    <>
      {/* <section className="hero">
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
                style={{ height: "400px" }}
                alt={slide.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
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
      </section> */}
 {/* <section className="hero">
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
        <div className="hero-slide">
          <img src={slide.img} alt={slide.alt} className="hero-img" />
          <div className="hero-overlay">
            <h2 className="hero-title animate-text">{slide.title}</h2>
            <p className="hero-subtitle animate-text">{slide.subtitle}</p>
            <div className="hero-buttons animate-buttons">
              {slide.buttons.map((btn, i) => (
                <button
                  key={i}
                  className={`hero-btn ${btn.type}`}
                >
                  {btn.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section> */}
 <section className="hero">
      <div className="hero-background-effects">
        <div className="gradient-overlay"></div>
        <div className="particle-effect"></div>
      </div>

      <Swiper
        slidesPerView={1}
        loop={true}
        effect="fade"
        speed={1200}
        autoplay={{ 
          delay: 4000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          waitForTransition: true
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          }
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="hero-swiper"
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        onSwiper={(swiper) => {
          // Ensure autoplay starts
          if (swiper.autoplay) {
            swiper.autoplay.start();
          }
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div 
              className="hero-slide"
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="hero-image-container">
                <img 
                  src={slide.img} 
                  alt={slide.alt} 
                  className="hero-img"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="image-overlay"></div>
              </div>

              <div className="hero-content">
                <div className="hero-overlay">
                  <motion.div 
                    className="hero-text-content"
                    key={`content-${index}`}
                    variants={textVariants}
                    initial="hidden"
                    animate={activeSlide === index ? "visible" : "hidden"}
                  >
                    <motion.h1 
                      className="hero-title"
                      variants={textVariants}
                    >
                      {slide.title}
                    </motion.h1>
                    
                    <motion.p 
                      className="hero-subtitle"
                      variants={textVariants}
                      transition={{ delay: 0.2 }}
                    >
                      {slide.subtitle}
                    </motion.p>

                    <motion.div 
                      className="hero-buttons"
                      variants={buttonVariants}
                    >
                      {slide.buttons.map((btn, i) => (
                        <motion.button
                          key={i}
                          className={`hero-btn ${btn.type}`}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="btn-icon">{btn.icon}</span>
                          <span className="btn-text">{btn.text}</span>
                        </motion.button>
                      ))}
                    </motion.div>

                    <motion.div 
                      className="hero-stats"
                      variants={statsVariants}
                      initial="hidden"
                      animate={activeSlide === index ? "visible" : "hidden"}
                    >
                      {slide.stats.map((stat, i) => (
                        <motion.div 
                          key={i}
                          className="stat-item"
                          variants={statItemVariants}
                        >
                          <span className="stat-number">{stat.number}</span>
                          <span className="stat-label">{stat.label}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="scroll-indicator"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  >
                    {/* <div className="scroll-arrow">
                      <span>Scroll Down</span>
                      <div className="arrow-icon">↓</div>
                    </div> */}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hero-navigation">
        <div className="slide-counter">
          <span className="current">{String(activeSlide + 1).padStart(2, '0')}</span>
          <span className="separator">/</span>
          <span className="total">{String(slides.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>


      <AboutMe />
      <ServiceSection />
      <ContactForm />
    </>
  );
};

export default HeroSection;
