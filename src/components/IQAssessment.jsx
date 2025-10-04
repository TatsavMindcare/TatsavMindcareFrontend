import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
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
  BookOpen
} from 'lucide-react';
import './IQAssessment.css';

const IQAssessment = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Comprehensive Evaluation",
      description: "Full-scale IQ assessment using WAIS-IV and other standardized instruments"
    },
    {
      icon: Target,
      title: "Accurate Results",
      description: "Precise cognitive ability measurement with detailed score breakdowns"
    },
    {
      icon: FileText,
      title: "Detailed Analysis",
      description: "In-depth report covering all cognitive domains and recommendations"
    },
    {
      icon: TrendingUp,
      title: "Growth Insights",
      description: "Identify strengths and areas for cognitive development and improvement"
    }
  ];

  const cognitiveAreas = [
    {
      title: "Verbal Comprehension",
      description: "Language-based reasoning, vocabulary, and general knowledge",
      icon: BookOpen,
      skills: ["Vocabulary Knowledge", "Verbal Reasoning", "Language Comprehension", "Abstract Thinking"]
    },
    {
      title: "Perceptual Reasoning",
      description: "Visual-spatial processing and non-verbal problem solving",
      icon: Target,
      skills: ["Pattern Recognition", "Spatial Reasoning", "Visual Processing", "Non-verbal Logic"]
    },
    {
      title: "Working Memory",
      description: "Ability to hold and manipulate information in mind",
      icon: Brain,
      skills: ["Memory Span", "Mental Manipulation", "Attention Control", "Information Processing"]
    },
    {
      title: "Processing Speed",
      description: "Speed of cognitive processing and psychomotor tasks",
      icon: Zap,
      skills: ["Processing Efficiency", "Visual Scanning", "Motor Speed", "Cognitive Flexibility"]
    }
  ];

  const ageGroups = [
    {
      age: "Children (6-16 years)",
      test: "WISC-V",
      duration: "2-3 hours",
      focus: "Academic potential, learning difficulties, giftedness identification"
    },
    {
      age: "Adults (16+ years)",
      test: "WAIS-IV", 
      duration: "2.5-3.5 hours",
      focus: "Career planning, cognitive strengths, neuropsychological assessment"
    },
    {
      age: "Seniors (65+ years)",
      test: "WAIS-IV",
      duration: "2-3 hours", 
      focus: "Cognitive changes, dementia screening, capacity evaluation"
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
              <Zap size={20} />
              <span>Cognitive Assessment</span>
            </div>
            <h1>Professional IQ Assessment</h1>
            <p>
              Comprehensive intelligence testing to understand your cognitive abilities, 
              identify strengths and potential, and provide insights for academic, 
              career, and personal development decisions.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Assessments Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99%</span>
                <span className="stat-label">Accuracy Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2-3hrs</span>
                <span className="stat-label">Testing Duration</span>
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
            <h2>Why Choose Professional IQ Testing</h2>
            <p>Standardized assessment providing accurate insights into your cognitive abilities</p>
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

      {/* Cognitive Areas Section */}
      <section className="testing-types">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Cognitive Areas Assessed</h2>
            <p>Comprehensive evaluation of four key cognitive domains</p>
          </motion.div>

          <motion.div 
            className="testing-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {cognitiveAreas.map((area, index) => (
              <motion.div 
                key={index}
                className="testing-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="testing-header">
                  <h3>{area.title}</h3>
                  <div className="cognitive-icon">
                    <area.icon size={24} />
                  </div>
                </div>
                <p>{area.description}</p>
                <div className="includes-section">
                  <h4>Key Skills Measured:</h4>
                  <ul>
                    {area.skills.map((skill, i) => (
                      <li key={i}>
                        <CheckCircle size={16} />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="testing-process" style={{ background: 'white' }}>
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Assessment by Age Group</h2>
            <p>Tailored testing approaches for different developmental stages</p>
          </motion.div>

          <motion.div 
            className="age-groups-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {ageGroups.map((group, index) => (
              <motion.div 
                key={index}
                className="age-group-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="age-header">
                  <h3>{group.age}</h3>
                  <div className="test-badge">
                    <span>{group.test}</span>
                  </div>
                </div>
                <div className="duration-info">
                  <Clock size={16} />
                  <span>{group.duration}</span>
                </div>
                <p className="focus-description">{group.focus}</p>
                <button className="testing-btn">
                  Schedule Assessment
                  <ArrowRight size={16} />
                </button>
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
            <h2>What to Expect During Testing</h2>
            <p>A comfortable, supportive environment for accurate assessment</p>
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
              <h3>Comfortable Environment</h3>
              <p>Private, quiet testing room designed to minimize distractions and maximize performance</p>
            </motion.div>

            <motion.div className="expectation-card" variants={itemVariants}>
              <div className="expectation-icon">
                <Users size={24} />
              </div>
              <h3>Expert Administration</h3>
              <p>Testing conducted by licensed psychologists trained in standardized assessment procedures</p>
            </motion.div>

            <motion.div className="expectation-card" variants={itemVariants}>
              <div className="expectation-icon">
                <Clock size={24} />
              </div>
              <h3>Flexible Scheduling</h3>
              <p>Breaks provided as needed, with timing adjusted for individual comfort and optimal performance</p>
            </motion.div>
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
              <h2>Discover Your Cognitive Potential</h2>
              <p>Get comprehensive insights into your intellectual abilities with professional IQ assessment.</p>
            </div>
            <div className="cta-actions">
              <motion.button 
                className="cta-btn primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Book IQ Assessment</span>
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

export default IQAssessment;