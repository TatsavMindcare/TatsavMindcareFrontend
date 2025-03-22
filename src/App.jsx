import "./App.css";
// import AboutMe from "./components/AboutMe";
// import ContactForm from "./components/ContactForm";
// import Footer from "./components/Footer";
// import HeroSection from "./components/HeroSection";
// import Navbar from "./components/Navbar";
// import ServiceSection from "./components/ServiceSection";
// import { ToastContainer } from "react-toastify";

// function App() {
//   return (
//     <div className="app-container">
//       <Navbar />
//       <HeroSection />
//       <AboutMe />
//       <ServiceSection />
//       <ContactForm />
//       <Footer />
//       <ToastContainer />
//     </div>
//   );
// }

// export default App;
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./Layout";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import ServiceSection from "./components/ServiceSection";
import ContactForm from "./components/ContactForm";
import Maintenance from "./components/Maintenance";
import { ToastContainer } from "react-toastify";

const availablePages = ["/", "/counseling-services", "/contact", "/aboutme"];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HeroSection />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="counseling-services" element={<ServiceSection />} />
          <Route path="contact" element={<ContactForm />} />

          {/* Catch all unavailable pages and show Maintenance */}
          <Route path="*" element={<Maintenance />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
