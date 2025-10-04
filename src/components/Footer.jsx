// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <p>&copy; 2025 TatsavMindcare. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  ArrowUp,
  Heart
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/aboutme", label: "About Us" },
    { path: "/counseling-services", label: "Services" },
    { path: "/contact", label: "Contact" },
    { path: "/privacy-policy", label: "Privacy Policy" }
  ];

  const services = [
    { path: "/psychological-test", label: "Psychological Testing" },
    { path: "/iq-assessment", label: "IQ Assessment" },
    { path: "/career-counseling", label: "Career Counseling" },
    { path: "/individual-therapy", label: "Individual Therapy" }
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://facebook.com/tatsavmindcare", 
      label: "Facebook",
      color: "#1877f2"
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com/tatsavmindcare", 
      label: "Instagram",
      color: "#e4405f"
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/tatsavmindcare", 
      label: "Twitter",
      color: "#1da1f2"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/company/tatsavmindcare", 
      label: "LinkedIn",
      color: "#0077b5"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-pattern"></div>
      </div>

      <div className="footer-content">
        <motion.div 
          className="footer-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand Section */}
          <motion.div className="footer-section footer-brand" variants={itemVariants}>
            <div className="brand-container">
              <div className="footer-logo">
                <img 
                  src="/images/logotext.png" 
                  alt="Tatsav Mind Care" 
                  className="footer-logo-text"
                />
                <div className="logo-divider"></div>
                <img 
                  src="/images/logo.jpeg" 
                  alt="Psychology Logo" 
                  className="footer-logo-icon"
                />
              </div>
              <h3 className="brand-name">Tatsav Mind Care</h3>
              <p className="brand-tagline">
                Professional psychological services with compassionate care. 
                Your mental health journey starts here.
              </p>
            </div>
            
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--hover-color': social.color }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="footer-link"
                    onClick={scrollToTop}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="footer-link"
                    onClick={scrollToTop}
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="footer-section contact-section-footer" variants={itemVariants}>
            <h4 className="footer-title">Contact Information</h4>
            <div className="contact-details">
              <div className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <div className="contact-text">
                  <p>Office No: 302, Plot-12</p>
                  <p>Aditya Commercial Complex</p>
                  <p>C-block Preet Vihar, Delhi-110092</p>
                </div>
              </div>
              
              <div className="contact-item">
                <Phone size={18} className="contact-icon" />
                <div className="contact-text">
                  <a href="tel:+919810006319" className="contact-link">
                    +91 9810006319
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <Mail size={18} className="contact-icon" />
                <div className="contact-text">
                  <a href="mailto:contact@tatsavmindcare.com" className="contact-link">
                    contact@tatsavmindcare.com
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <Clock size={18} className="contact-icon" />
                <div className="contact-text">
                  <p><strong>Mon-Sat:</strong> 10 AM - 7 PM</p>
                  <p><strong>Sunday:</strong> By Appointment</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div 
          className="newsletter-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="newsletter-container">
            <div className="newsletter-content">
              <h4>Stay Updated</h4>
              <p>Subscribe to our newsletter for mental health tips and updates</p>
            </div>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <motion.button 
                className="newsletter-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                © 2025 Tatsav Mind Care. All rights reserved. | 
                Made with <Heart size={16} className="heart-icon" /> for mental wellness
              </p>
            </div>
            
            <div className="footer-bottom-links">
              <Link to="/terms-conditions" className="bottom-link">Terms of Service</Link>
              <Link to="/privacy-policy" className="bottom-link">Privacy Policy</Link>
              {/* <Link to="/disclaimer" className="bottom-link">Disclaimer</Link> */}
            </div>
            
            <motion.button 
              className="scroll-top-btn"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;