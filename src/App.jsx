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
import PsychologicalTesting from "./components/PsychologicalTesting ";
import IQAssessment from "./components/IQAssessment";
import CareerCounseling from "./components/CareerCounseling";
import IndividualTherapy from "./components/IndividualTherapy";
import TermsConditions from "./components/TermsPage";
import PrivacyPolicy from "./components/PrivacyPolicy";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HeroSection />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="counseling-services" element={<ServiceSection />} />
          <Route path="psychological-test" element={<PsychologicalTesting/>}/>
          <Route path="iq-assessment" element={<IQAssessment/>}/>
          <Route path="career-counseling" element={<CareerCounseling/>}/>
          <Route path="individual-therapy" element={<IndividualTherapy/>}/>
          <Route path="contact" element={<ContactForm />} />
          <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
          <Route path="terms-conditions" element={<TermsConditions/>}/>

          <Route path="*" element={<Maintenance />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
