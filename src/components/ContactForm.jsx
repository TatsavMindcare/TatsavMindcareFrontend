import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation for required fields
    if (!formData.name) {
      toast.error("Name is required!");
      document.querySelector("input[name='name']").focus();
      return;
    }

    if (!formData.email) {
      toast.error("Email is required!");
      document.querySelector("input[name='email']").focus();
      return;
    }

    if (!formData.mobileNo) {
      toast.error("Mobile number is required!");
      document.querySelector("input[name='mobileNo']").focus();
      return;
    }

    try {
      const API_URL =
        // "https://backend-tatsav.vercel.app";
        import.meta.env.VITE_API_URL || process.env.REACT_APP_API_URL;
      console.log(API_URL, "test");
      const response = await axios.post(
        `${API_URL}/api/contact/send/`,
        formData
      );
      toast.success("Message sent successfully!");
      console.log(response, "response");
      setFormData({ name: "", email: "", mobileNo: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message!");
    }
  };

  return (
    <section className="container-fluid contact-section">
      <div className="row">
        {/* Left Form Section */}
        <div className="col-md-5 contact-form">
          <h2 className="text-light">Get in Touch!</h2>
          <div className="underline"></div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="ms-2">
                Name <span style={{ color: "red" }}>*</span>
              </label>
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
              <label className="ms-2">
                Mobile No <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="mobileNo"
                className="form-control"
                placeholder="Enter your Mobile No"
                value={formData.mobileNo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="ms-2">
                Email ID <span style={{ color: "red" }}>*</span>
              </label>
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
          <h5 style={{ fontWeight: "bold" }}>ADDRESS</h5>
          <p>
            Office No: 302, Plot-12, Aditya Commercial Complex, Community Centre
            , C-block Preet Vihar,Delhi-110092
          </p>

          <h5 style={{ fontWeight: "bold" }}>CALL US</h5>
          <p>+91 9810006319</p>

          <h5 style={{ fontWeight: "bold" }}>OPENING HOURS</h5>
          <p>
            <span style={{ fontWeight: "bold" }}>Monday-Saturday</span> : 10 am
            - 7 pm (By Appointment only) <br />
            <span style={{ fontWeight: "bold" }}>Sunday</span>: Only by
            Appointment
          </p>
        </div>
        <div className="col-md-3">
          <div className="map-container">
            <iframe
              title="Google Map"
              className="map-embed"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7003.373807734263!2d77.28703518959988!3d28.639144468903297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb50fae94399%3A0x8b8fe29b35ef941d!2sPreet%20Vihar%20Community%20Center!5e0!3m2!1sen!2sin!4v1741544970844!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* ToastContainer for Toastify */}
    </section>
  );
};

export default ContactForm;
