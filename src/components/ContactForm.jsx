import React, { useState } from "react";
import axios from "axios";
const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//   };
const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const API_URL = import.meta.env.VITE_API_URL || process.env.REACT_APP_API_URL;
      console.log(API_URL,"test")
      const response = await axios.post(`${API_URL}/api/contact/send/`, formData);
      alert("Message sent successfully!");
      console.log(response,"response")
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message!");
    }
  };

  return (
    <section className="container-fluid contact-section">
      <div className="row">
        {/* Left Form Section */}
        <div className="col-md-6 contact-form">
          <h2 className="text-light">Get in Touch!</h2>
          <div className="underline"></div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter a valid email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                className="form-control"
                placeholder="Enter your message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-danger w-100">
              Submit
            </button>
          </form>
        </div>

        {/* Right Info Section */}
        <div className="col-md-3 contact-info">
          <h5 style={{fontWeight:"bold"}}>ADDRESS</h5>
          <p> D/329 Vivek Vihar, New Delhi, India</p>

          <h5 style={{fontWeight:"bold"}}>CALL US</h5>
          <p>+91 9910007764</p>

          <h5 style={{fontWeight:"bold"}}>OPENING HOURS</h5>
          <p>Monday-Friday: 10 am - 8 pm <br />Saturday, Sunday: Closed</p>

          {/* Google Map */}
        
        </div>
        <div className="col-md-3">
        <div className="map-container">
            <iframe
              title="Google Map"
              className="map-embed"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5383.410351832542!2d77.31456146735925!3d28.670957744351536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb0e483ca36f%3A0xdfe1c4624fe6352a!2sVivek%20Vihar%2C%20Delhi%2C%20110095!5e0!3m2!1sen!2sin!4v1741361255884!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
