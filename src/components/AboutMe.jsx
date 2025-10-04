// import React from 'react'

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const AboutMe = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <section className="about-me">
//       <div className="about-container">
        
//         {/* Left Side - Image */}
//         <div className="about-image" data-aos="fade-right">
//           <img src="/images/pratibha.jpg" alt="Pratibha Yadav" />
//         </div>

//         {/* Right Side - Text */}
//         <div className="about-text" data-aos="fade-left">
//           <h2>👋 Hi, I’m <span className="highlight">Pratibha Yadav</span></h2>
//           <h3 className="designation">RCI Registered Clinical Psychologist (A)</h3>

//           <p>
//             I hold a <strong>Professional Diploma in Clinical Psychology (PDCP)</strong> 
//             from Amity University, Gurugram, where I was honored as a 
//             <strong> Bronze Medalist</strong>. My expertise spans across 
//             psychological assessments and therapeutic interventions.
//           </p>

//           <ul className="about-list">
//             <li>✔️ Psychological Assessments (IQ, Personality, Career, Clinical Disorders)</li>
//             <li>✔️ Therapeutic Interventions (CBT, Behavior Therapy, Relaxation Techniques)</li>
//             <li>✔️ Passionate about helping people develop healthier coping mechanisms</li>
//           </ul>

//           <p>
//             My mission is to help individuals understand themselves more deeply,
//             overcome challenges, and build a fulfilling, balanced life.
//           </p>

//           <a href="#" className="read-more">Read more about me →</a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./AboutMe.css"

// const AboutMe = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1200, once: true });
//   }, []);

//   return (
//     <section className="about-me">
//       <div className="about-container">
        
//         {/* Image */}
//         <div className="about-image" data-aos="fade-right">
//           <img src="/images/pratibha.jpg" alt="Pratibha Yadav" />
//         </div>

//         {/* Text */}
//         <div className="about-text" data-aos="fade-left">
//           <h2>
//             👋 Hi, I’m <span className="highlight">Pratibha Yadav</span>
//           </h2>
//           <h3 className="designation">
//             RCI Registered Clinical Psychologist (A)
//           </h3>

//           <p>
//             I hold a <strong>Professional Diploma in Clinical Psychology (PDCP)</strong> 
//             from Amity University, Gurugram, where I was honored as a 
//             <strong> Bronze Medalist</strong>. My expertise spans across 
//             psychological assessments and therapeutic interventions.
//           </p>

//           <ul className="about-list">
//             <li>✔️ Psychological Assessments (IQ, Personality, Career, Clinical Disorders)</li>
//             <li>✔️ Therapeutic Interventions (CBT, Behavior Therapy, Relaxation Techniques)</li>
//             <li>✔️ Passionate about helping people develop healthier coping mechanisms</li>
//           </ul>

//           <p>
//             My mission is to help individuals understand themselves more deeply,
//             overcome challenges, and build a fulfilling, balanced life.
//           </p>

//           <a href="#" className="read-more">Read more about me →</a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;


import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutMe.css"

const AboutMe = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const achievements = [
    {
      icon: "🏆",
      title: "Bronze Medalist",
      description: "Professional Diploma in Clinical Psychology",
      highlight: true
    },
    {
      icon: "📋",
      title: "RCI Registered",
      description: "Clinical Psychologist (A)",
      highlight: true
    },
    {
      icon: "🎓",
      title: "Amity University",
      description: "Gurugram Graduate",
      highlight: false
    },
    {
      icon: "💼",
      title: "Expert Assessments",
      description: "IQ, Personality, Career & Clinical",
      highlight: false
    }
  ];

  const services = [
    {
      icon: "🧠",
      title: "Psychological Assessments",
      description: "Comprehensive IQ, Personality, Career, and Clinical Disorder evaluations"
    },
    {
      icon: "🛠️",
      title: "Therapeutic Interventions",
      description: "CBT, Behavior Therapy, and advanced relaxation techniques"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="about-me" >
      <div className="about-background-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="about-container"style={{paddingTop:"20px"}}>
        
        {/* Image Section */}
        <motion.div 
          className="about-image" 
          data-aos="fade-right"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="image-wrapper">
            <img src="/images/prabh3.jpeg" alt="Pratibha Yadav" style={{maxWidth:"588px"}} />
            {/* <div className="image-overlay">
              <div className="overlay-content">
                <span className="experience-badge">Professional Excellence</span>
              </div>
            </div> */}
          </div>
          
          {/* Achievement Cards */}
          <motion.div 
            className="achievement-cards"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                className={`achievement-card ${achievement.highlight ? 'highlighted' : ''}`}
                variants={itemVariants}
              >
                <span className="achievement-icon">{achievement.icon}</span>
                <div className="achievement-text">
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div 
          className="about-text" 
          data-aos="fade-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-header">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              👋 Hi, I'm <span className="highlight">Pratibha Yadav</span>
            </motion.h2>
            
            <motion.div 
              className="designation-wrapper"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="designation">
                <span className="designation-icon">🏥</span>
                RCI Registered Clinical Psychologist (A)
              </h3>
            </motion.div>
          </div>

          <motion.div 
            className="intro-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="main-intro">
              I hold a <strong>Professional Diploma in Clinical Psychology (PDCP)</strong> 
              from Amity University, Gurugram, where I was honored as a 
              <strong> Bronze Medalist</strong>. My expertise spans across 
              psychological assessments and therapeutic interventions.
            </p>

            <div className={`expandable-content ${isExpanded ? 'expanded' : ''}`}>
              <p>
                With years of dedicated practice and continuous learning, I specialize in 
                providing comprehensive mental health support tailored to individual needs. 
                My approach combines evidence-based therapeutic techniques with compassionate 
                care to ensure the best outcomes for my clients.
              </p>
            </div>

            <button 
              className="expand-btn"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Show Less' : 'Read More'}
              <span className={`expand-arrow ${isExpanded ? 'rotated' : ''}`}>↓</span>
            </button>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="services-title">My Expertise</h4>
            <div className="services-list">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="service-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="service-icon">{service.icon}</span>
                  <div className="service-content">
                    <h5>{service.title}</h5>
                    <p>{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div 
            className="mission-statement"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mission-content">
              <span className="mission-icon">🎯</span>
              <p>
                <strong>My mission</strong> is to help individuals understand themselves more deeply,
                overcome challenges, and build a fulfilling, balanced life through personalized 
                therapeutic approaches and unwavering support.
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="/contact" 
              className="cta-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Schedule Consultation</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
            
            <motion.a 
              href="/aboutme" 
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Learn More About Me</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;