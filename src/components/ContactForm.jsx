import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Send, User, MessageCircle } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";
import './ContactUs.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField("");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMobile = (mobile) => {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Enhanced validation
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      document.querySelector("input[name='name']").focus();
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email address");
      document.querySelector("input[name='email']").focus();
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address");
      document.querySelector("input[name='email']").focus();
      setIsSubmitting(false);
      return;
    }

    if (!formData.mobileNo.trim()) {
      toast.error("Please enter your mobile number");
      document.querySelector("input[name='mobileNo']").focus();
      setIsSubmitting(false);
      return;
    }

    if (!validateMobile(formData.mobileNo)) {
      toast.error("Please enter a valid 10-digit mobile number");
      document.querySelector("input[name='mobileNo']").focus();
      setIsSubmitting(false);
      return;
    }

    try {
      const API_URL = import.meta.env.VITE_API_URL || process.env.REACT_APP_API_URL;
      const response = await axios.post(`${API_URL}/api/contact/send/`, formData);
      
      toast.success("Thank you! Your message has been sent successfully. We'll get back to you soon.");
      setFormData({ name: "", email: "", mobileNo: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Sorry, there was an error sending your message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      content: "Office No: 302, Plot-12, Aditya Commercial Complex, Community Centre, C-block Preet Vihar, Delhi-110092",
      color: "#3b82f6"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 9810006319",
      color: "#10b981"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "contact@psychology.com",
      color: "#f59e0b"
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday-Saturday: 10 AM - 7 PM (By Appointment)\nSunday: By Appointment Only",
      color: "#8b5cf6"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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
    <section className="contact-section" >
      <div className="contact-background">
        <div className="contact-gradient"></div>
        <div className="contact-pattern"></div>
      </div>

      <div className="contact-container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={{marginTop:"70px"}}>Get in Touch</h2>
          <p>Ready to start your journey to better mental health? We're here to help.</p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Form */}
          <motion.div 
            className="contact-form-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="form-header" variants={itemVariants}>
              <h3>Send us a Message</h3>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
            </motion.div>

            <motion.form 
              onSubmit={handleSubmit} 
              className="contact-form"
              variants={itemVariants}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <User size={18} />
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-input ${focusedField === 'name' ? 'focused' : ''}`}
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mobileNo">
                    <Phone size={18} />
                    Mobile Number <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobileNo"
                    name="mobileNo"
                    className={`form-input ${focusedField === 'mobileNo' ? 'focused' : ''}`}
                    placeholder="Enter 10-digit mobile number"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    onFocus={() => handleFocus('mobileNo')}
                    onBlur={handleBlur}
                    maxLength="10"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <Mail size={18} />
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-input ${focusedField === 'email' ? 'focused' : ''}`}
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <MessageCircle size={18} />
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`form-textarea ${focusedField === 'message' ? 'focused' : ''}`}
                  placeholder="Tell us how we can help you..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                />
              </div>

              <motion.button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div 
            className="contact-info-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="contact-info" variants={itemVariants}>
              <h3>Contact Information</h3>
              <p>Multiple ways to reach us for your convenience.</p>

              <div className="info-grid">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="info-card"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="info-icon" style={{ backgroundColor: `${info.color}15`, color: info.color }}>
                      <info.icon size={24} />
                    </div>
                    <div className="info-content">
                      <h4>{info.title}</h4>
                      <p>{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          
          </motion.div>
        </div>
            <motion.div className="map-section" variants={itemVariants}>
              <h3>Find Us Here</h3>
              <div className="map-container">
                <iframe
                  title="Psychology Clinic Location"
                  className="map-embed"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7003.373807734263!2d77.28703518959988!3d28.639144468903297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb50fae94399%3A0x8b8fe29b35ef941d!2sPreet%20Vihar%20Community%20Center!5e0!3m2!1sen!2sin!4v1741544970844!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="map-overlay">
                  <button className="map-btn">
                    <MapPin size={16} />
                    Get Directions
                  </button>
                </div>
              </div>
            </motion.div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  );
};

export default ContactForm;