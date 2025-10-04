import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
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
  Briefcase,
  MapPin,
  Star
} from 'lucide-react';
import './CareerCounseling.css';

const CareerCounseling = () => {
  const benefits = [
    {
      icon: Compass,
      title: "Career Direction",
      description: "Clear guidance on career paths aligned with your interests and abilities"
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Strategic career planning with actionable steps and milestones"
    },
    {
      icon: TrendingUp,
      title: "Growth Planning",
      description: "Professional development strategies for long-term career success"
    },
    {
      icon: Briefcase,
      title: "Industry Insights",
      description: "Current market trends and opportunities in your field of interest"
    }
  ];

  const assessmentTools = [
    {
      title: "Interest Assessment",
      description: "Identify careers matching your interests and passions",
      duration: "45 minutes",
      includes: ["Holland Interest Inventory", "Career Interest Profiler", "Personal Interests Analysis", "Industry Matching"]
    },
    {
      title: "Personality Assessment",
      description: "Understand how your personality fits different work environments",
      duration: "60 minutes",
      includes: ["Myers-Briggs Type Indicator", "Big Five Personality", "Work Style Analysis", "Team Dynamics"]
    },
    {
      title: "Skills Assessment",
      description: "Evaluate your current skills and identify development areas",
      duration: "90 minutes",
      includes: ["Transferable Skills", "Technical Abilities", "Soft Skills Evaluation", "Competency Mapping"]
    },
    {
      title: "Values Assessment",
      description: "Align your career choices with your core values and priorities",
      duration: "30 minutes",
      includes: ["Work Values Inventory", "Life Priorities", "Motivational Drivers", "Satisfaction Predictors"]
    }
  ];

  const careerServices = [
    {
      icon: MapPin,
      title: "Career Exploration",
      description: "Discover new career possibilities and pathways based on your unique profile"
    },
    {
      icon: FileText,
      title: "Resume & Interview Prep",
      description: "Professional guidance on applications, resumes, and interview techniques"
    },
    {
      icon: TrendingUp,
      title: "Career Transition",
      description: "Support for changing careers or advancing in your current field"
    },
    {
      icon: BookOpen,
      title: "Education Planning",
      description: "Academic and training recommendations to achieve your career goals"
    },
    {
      icon: Users,
      title: "Workplace Skills",
      description: "Develop interpersonal and professional skills for workplace success"
    },
    {
      icon: Star,
      title: "Leadership Development",
      description: "Build leadership capabilities and management skills for career advancement"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "Comprehensive evaluation of interests, skills, values, and personality"
    },
    {
      step: "02",
      title: "Career Exploration", 
      description: "Research and analyze potential career paths and opportunities"
    },
    {
      step: "03",
      title: "Action Planning",
      description: "Develop a strategic plan with specific goals and timelines"
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Regular follow-up sessions to track progress and adjust plans"
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
              <Compass size={20} />
              <span>Career Development</span>
            </div>
            <h1>Professional Career Counseling</h1>
            <p>
              Navigate your career journey with confidence. Our comprehensive career 
              counseling services help you discover your ideal career path, develop 
              professional skills, and achieve your long-term career goals.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">300+</span>
                <span className="stat-label">Careers Guided</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">85%</span>
                <span className="stat-label">Job Satisfaction</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6 Months</span>
                <span className="stat-label">Average Support</span>
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
            <h2>Why Choose Professional Career Counseling</h2>
            <p>Expert guidance to make informed career decisions and achieve professional success</p>
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

      {/* Assessment Tools Section */}
      <section className="testing-types">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Career Assessment Tools</h2>
            <p>Comprehensive evaluations to understand your career fit and potential</p>
          </motion.div>

          <motion.div 
            className="testing-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {assessmentTools.map((tool, index) => (
              <motion.div 
                key={index}
                className="testing-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="testing-header">
                  <h3>{tool.title}</h3>
                  <div className="duration-badge">
                    <Clock size={16} />
                    <span>{tool.duration}</span>
                  </div>
                </div>
                <p>{tool.description}</p>
                <div className="includes-section">
                  <h4>Assessment Includes:</h4>
                  <ul>
                    {tool.includes.map((item, i) => (
                      <li key={i}>
                        <CheckCircle size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="testing-btn">
                  Start Assessment
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Career Services Section */}
      <section className="testing-process" style={{ background: 'white' }}>
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Comprehensive Career Services</h2>
            <p>Full spectrum of career development support and guidance</p>
          </motion.div>

          <motion.div 
            className="career-services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {careerServices.map((service, index) => (
              <motion.div 
                key={index}
                className="career-service-card"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="service-icon-wrapper">
                  <service.icon size={24} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="testing-process">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Our Career Counseling Process</h2>
            <p>Structured approach to help you achieve your career objectives</p>
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
              <h2>Ready to Shape Your Career Future?</h2>
              <p>Take the first step towards a fulfilling career with professional guidance and support.</p>
            </div>
            <div className="cta-actions">
              <motion.button 
                className="cta-btn primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Start Career Assessment</span>
                <ArrowRight size={18} />
              </motion.button>
              <motion.button 
                className="cta-btn secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Schedule Consultation</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareerCounseling;