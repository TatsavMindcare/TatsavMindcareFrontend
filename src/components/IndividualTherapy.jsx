import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  CheckCircle, 
  Clock, 
  Users, 
  FileText, 
  Award,
  ArrowRight,
  Shield,
  Target,
  Brain,
  TrendingUp,
  BookOpen,
  MessageCircle,
  User,
  Lightbulb
} from 'lucide-react';
import './IndividualTherapy.css';

const IndividualTherapy = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Personal Growth",
      description: "Develop self-awareness and emotional intelligence for lasting positive change"
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Confidential, non-judgmental space to explore thoughts and feelings"
    },
    {
      icon: Target,
      title: "Personalized Care",
      description: "Tailored therapeutic approach based on your unique needs and goals"
    },
    {
      icon: TrendingUp,
      title: "Lasting Results",
      description: "Evidence-based techniques for sustainable mental health improvement"
    }
  ];

  const therapyApproaches = [
    {
      title: "Cognitive Behavioral Therapy (CBT)",
      description: "Transform negative thought patterns and behaviors",
      duration: "8-16 sessions",
      includes: ["Thought Pattern Analysis", "Behavioral Modification", "Coping Strategies", "Homework Assignments"]
    },
    {
      title: "Psychodynamic Therapy",
      description: "Explore unconscious patterns affecting your life",
      duration: "12-24 sessions",
      includes: ["Past Experience Analysis", "Relationship Patterns", "Defense Mechanisms", "Insight Development"]
    },
    {
      title: "Humanistic Therapy",
      description: "Focus on personal growth and self-actualization",
      duration: "10-20 sessions",
      includes: ["Self-Acceptance", "Personal Values", "Authentic Living", "Self-Compassion"]
    },
    {
      title: "Solution-Focused Therapy",
      description: "Build on strengths to create positive change",
      duration: "6-12 sessions",
      includes: ["Goal Setting", "Resource Identification", "Solution Building", "Progress Monitoring"]
    }
  ];

  const treatmentAreas = [
    {
      icon: Brain,
      title: "Anxiety & Stress",
      description: "Manage anxiety disorders, panic attacks, and chronic stress"
    },
    {
      icon: Heart,
      title: "Depression",
      description: "Overcome depression and develop healthy coping mechanisms"
    },
    {
      icon: Users,
      title: "Relationship Issues",
      description: "Improve communication and resolve relationship conflicts"
    },
    {
      icon: Lightbulb,
      title: "Self-Esteem",
      description: "Build confidence and develop a positive self-image"
    },
    {
      icon: Target,
      title: "Life Transitions",
      description: "Navigate major life changes and transitions successfully"
    },
    {
      icon: MessageCircle,
      title: "Communication Skills",
      description: "Develop effective communication and interpersonal skills"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Discuss your concerns, goals, and determine if therapy is right for you"
    },
    {
      step: "02",
      title: "Treatment Planning",
      description: "Develop a personalized treatment plan with clear objectives and timeline"
    },
    {
      step: "03",
      title: "Active Therapy",
      description: "Regular sessions using evidence-based techniques tailored to your needs"
    },
    {
      step: "04",
      title: "Progress Review",
      description: "Regular evaluation of progress and adjustment of treatment as needed"
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
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="service-hero-container">
          <motion.div 
            className="service-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="service-badge">
              <Heart size={20} />
              <span>Mental Health Support</span>
            </div>
            <h1>Individual Therapy Sessions</h1>
            <p>
              Personalized therapeutic support to help you overcome challenges, 
              develop coping strategies, and achieve emotional well-being. 
              Experience healing and growth in a safe, confidential environment.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Clients Helped</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">Improvement Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">8-16</span>
                <span className="stat-label">Average Sessions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Benefits of Individual Therapy</h2>
            <p>Professional support for your mental health and personal development journey</p>
          </motion.div>
          
          <motion.div 
            className="benefits-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="benefit-card"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="benefit-icon">
                  <benefit.icon size={28} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Therapy Approaches Section */}
      <section className="testing-types">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Therapeutic Approaches</h2>
            <p>Evidence-based therapy methods tailored to your specific needs and preferences</p>
          </motion.div>

          <motion.div 
            className="testing-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {therapyApproaches.map((approach, index) => (
              <motion.div 
                key={index}
                className="testing-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="testing-header">
                  <h3>{approach.title}</h3>
                  <div className="duration-badge">
                    <Clock size={16} />
                    <span>{approach.duration}</span>
                  </div>
                </div>
                <p>{approach.description}</p>
                <div className="includes-section">
                  <h4>Treatment Includes:</h4>
                  <ul>
                    {approach.includes.map((item, i) => (
                      <li key={i}>
                        <CheckCircle size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="testing-btn">
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Treatment Areas Section */}
      <section className="testing-process" style={{ background: 'white' }}>
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Areas We Address</h2>
            <p>Comprehensive treatment for various mental health concerns and life challenges</p>
          </motion.div>

          <motion.div 
            className="career-services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {treatmentAreas.map((area, index) => (
              <motion.div 
                key={index}
                className="career-service-card"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="service-icon-wrapper">
                  <area.icon size={24} />
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="testing-process">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>What to Expect in Therapy</h2>
            <p>A supportive environment focused on your healing and growth</p>
          </motion.div>

          <motion.div 
            className="expectations-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="expectation-card" variants={itemVariants}>
              <div className="expectation-icon">
                <Shield size={24} />
              </div>
              <h3>Confidential Space</h3>
              <p>Complete privacy and confidentiality in a comfortable, safe therapeutic environment</p>
            </motion.div>

            <motion.div className="expectation-card" variants={itemVariants}>
              <div className="expectation-icon">
                <User size={24} />
              </div>
              <h3>Non-Judgmental Support</h3>
              <p>Compassionate, understanding approach without judgment or criticism</p>
            </motion.div>

            <motion.div className="expectation-card" variants={itemVariants}>
              <div className="expectation-icon">
                <Target size={24} />
              </div>
              <h3>Goal-Oriented Progress</h3>
              <p>Clear objectives and regular progress tracking to ensure meaningful outcomes</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="testing-process" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Your Therapy Journey</h2>
            <p>Structured process designed to maximize your therapeutic success</p>
          </motion.div>

          <motion.div 
            className="process-steps"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="process-step"
                variants={itemVariants}
              >
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="step-connector"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cta-text">
              <h2>Ready to Begin Your Healing Journey?</h2>
              <p>Take the first step towards better mental health with compassionate, professional support.</p>
            </div>
            <div className="cta-actions">
              <motion.button 
                className="cta-btn primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Schedule Session</span>
                <ArrowRight size={18} />
              </motion.button>
              <motion.button 
                className="cta-btn secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Free Consultation</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IndividualTherapy;