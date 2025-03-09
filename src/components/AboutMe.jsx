import React from 'react'

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-container">
        <div className="about-image">
          <img src="/images/pratibha.jpg" alt="Pratibha Yadav" />
        </div>
        <div className="about-text">
          <h2>Hi, I am Partibha Yadav</h2>
          <p>
            an <strong>RCI Registered  Clinical Psychologist (A)</strong> 
            I have completed my Professional Diploma in Clinical Psychology (PDCP) from Amity University, Gurugram. I am a Bronze Medalist as well. 
            I have an expertise in conducting psychological assessments (IQ assessments, Personality assessments, Career assessments, clinical disorders assessments and etc…) and therapeutic interventions. I am passionate about helping people understand themselves more deeply, develop healthier coping
          </p>
         
          <a href="#" className="read-more">Read more about me here!</a>
        </div>
      </div>
    </section>
  )
}

export default AboutMe