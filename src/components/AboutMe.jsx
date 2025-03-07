import React from 'react'

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-container">
        <div className="about-image">
          <img src="/images/prabh1.jpeg" alt="Pratibha Yadav" />
        </div>
        <div className="about-text">
          <h2>Hi, I am Pratibha Yadav</h2>
          <p>
            An <strong>RCI Registered and Counseling Psychologist, Certified Yoga Practitioner, and Life Coach.</strong> 
            I am a Certified Trauma Expert and I practice Empathy, Self-Compassion, and provide my clients 
            with a <span className="highlight">safe space of non-judgment</span>. 
            I like to deep dive and work with my clients at a personal level to help them 
            discover their true selves that can help them heal their inner child complex.
          </p>
          <p>
            My approach is eclectic, where I customize plans for my clients’ concerns and 
            their needs whilst using techniques from multiple psychological modalities and 
            Yoga philosophy.
          </p>
          <a href="#" className="read-more">Read more about me here!</a>
        </div>
      </div>
    </section>
  )
}

export default AboutMe