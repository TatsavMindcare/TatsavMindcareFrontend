
import './App.css'
import AboutMe from './components/AboutMe'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ServiceSection from './components/ServiceSection'

function App() {

  return (
    <div className="app-container">
      <Navbar />
      <HeroSection />
      <AboutMe/>
      <ServiceSection />
      <ContactForm />
      <Footer />
    </div>
     
  )
}

export default App
