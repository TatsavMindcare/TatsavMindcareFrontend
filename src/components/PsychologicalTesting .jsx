import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  CheckCircle,
  Clock,
  Users,
  FileText,
  Award,
  ArrowRight,
  Shield,
  Target,
  Zap,
} from "lucide-react";
import "./PsychologicalTesting.css";

const PsychologicalTesting = () => {
  const benefits = [
    {
      icon: Target,
      title: "Accurate Assessment",
      description:
        "Comprehensive evaluation using standardized psychological instruments",
    },
    {
      icon: Brain,
      title: "Expert Analysis",
      description:
        "Professional interpretation by licensed clinical psychologists",
    },
    {
      icon: FileText,
      title: "Detailed Reports",
      description: "Clear, actionable reports with specific recommendations",
    },
    {
      icon: Shield,
      title: "Confidential Process",
      description:
        "Secure and confidential testing environment with privacy protection",
    },
  ];

  const testingTypes = [
    {
      title: "Cognitive Assessment",
      description:
        "Evaluate intellectual functioning, memory, and cognitive abilities",
      duration: "2-3 hours",
      includes: [
        "IQ Testing",
        "Memory Assessment",
        "Attention & Focus",
        "Processing Speed",
      ],
    },
    {
      title: "Personality Assessment",
      description:
        "Understand personality traits, emotional patterns, and behavioral tendencies",
      duration: "1-2 hours",
      includes: [
        "Personality Profiles",
        "Emotional Intelligence",
        "Behavioral Patterns",
        "Stress Response",
      ],
    },
    {
      title: "Clinical Assessment",
      description:
        "Screen for mental health conditions and psychological disorders",
      duration: "2-4 hours",
      includes: [
        "Depression Screening",
        "Anxiety Assessment",
        "ADHD Evaluation",
        "Mood Disorders",
      ],
    },
    {
      title: "Neuropsychological Testing",
      description:
        "Assess brain-behavior relationships and cognitive functioning",
      duration: "3-5 hours",
      includes: [
        "Memory Testing",
        "Executive Function",
        "Language Skills",
        "Visuospatial Abilities",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description:
        "Discuss your concerns and testing goals with our psychologist",
    },
    {
      step: "02",
      title: "Test Selection",
      description:
        "Choose appropriate tests based on your specific needs and objectives",
    },
    {
      step: "03",
      title: "Testing Session",
      description:
        "Complete the psychological tests in a comfortable, supportive environment",
    },
    {
      step: "04",
      title: "Analysis & Report",
      description:
        "Receive detailed results and recommendations within 7-10 business days",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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
              <Brain size={20} />
              <span>Psychological Assessment</span>
            </div>
            <h1>Comprehensive Psychological Testing</h1>
            <p>
              Professional psychological assessments to understand your
              cognitive abilities, personality traits, and mental health status.
              Our evidence-based testing provides valuable insights for personal
              growth and treatment planning.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Tests Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Accuracy Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24-48h</span>
                <span className="stat-label">Quick Results</span>
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
            <h2>Why Choose Our Psychological Testing</h2>
            <p>
              Professional assessment with personalized insights and actionable
              recommendations
            </p>
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

      {/* Testing Types Section */}
      <section className="testing-types">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Types of Psychological Testing</h2>
            <p>
              Comprehensive assessment options tailored to your specific needs
            </p>
          </motion.div>

          <motion.div
            className="testing-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testingTypes.map((test, index) => (
              <motion.div
                key={index}
                className="testing-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="testing-header">
                  <h3>{test.title}</h3>
                  <div className="duration-badge">
                    <Clock size={16} />
                    <span>{test.duration}</span>
                  </div>
                </div>
                <p>{test.description}</p>
                <div className="includes-section">
                  <h4>What's Included:</h4>
                  <ul>
                    {test.includes.map((item, i) => (
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
            <h2>Our Testing Process</h2>
            <p>
              A structured approach ensuring accurate results and meaningful
              insights
            </p>
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
              <h2>Ready to Start Your Assessment?</h2>
              <p>
                Take the first step towards understanding yourself better with
                professional psychological testing.
              </p>
            </div>
            <div className="cta-actions">
              <motion.button
                className="cta-btn primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Schedule Assessment</span>
                <ArrowRight size={18} />
              </motion.button>
              <motion.button
                className="cta-btn secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Learn More</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PsychologicalTesting;
