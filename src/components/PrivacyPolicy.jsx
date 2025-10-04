import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Users, Clock } from 'lucide-react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
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

  const principles = [
    {
      icon: Shield,
      title: "Complete Confidentiality",
      description: "All therapeutic information is strictly confidential and protected under HIPAA regulations"
    },
    {
      icon: Lock,
      title: "Secure Data Storage",
      description: "Client records are encrypted and stored in secure, compliant systems"
    },
    {
      icon: Eye,
      title: "Limited Access",
      description: "Only authorized personnel have access to your personal information"
    },
    {
      icon: Users,
      title: "No Third-Party Sharing",
      description: "We never sell or share your information with third parties for marketing"
    }
  ];

  return (
    <div className="legal-page">
      {/* Hero Section */}
      <section className="legal-hero "style={{marginTop:"90px"}}>
        <div className="legal-hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="legal-hero-container">
          <motion.div 
            className="legal-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="legal-badge">
              <Shield size={20} />
              <span>Privacy & Security</span>
            </div>
            <h1>Privacy Policy</h1>
            <p>
              Your privacy and confidentiality are our highest priorities. 
              This policy explains how we collect, use, and protect your personal information.
            </p>
            <div className="last-updated">
              <Clock size={16} />
              <span>Last updated: January 2025</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="privacy-principles">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Our Privacy Principles</h2>
            <p>Core commitments to protecting your personal information</p>
          </motion.div>
          
          <motion.div 
            className="principles-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {principles.map((principle, index) => (
              <motion.div 
                key={index}
                className="principle-card"
                variants={itemVariants}
              >
                <div className="principle-icon">
                  <principle.icon size={24} />
                </div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="legal-content">
        <div className="container">
          <motion.div 
            className="content-wrapper"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="policy-section">
              <h2>1. Information We Collect</h2>
              
              <h3>Personal Information</h3>
              <p>We collect information necessary to provide quality psychological services:</p>
              <ul>
                <li><strong>Contact Information:</strong> Name, address, phone number, email address</li>
                <li><strong>Demographic Information:</strong> Age, date of birth, gender, occupation</li>
                <li><strong>Health Information:</strong> Medical history, mental health history, current symptoms</li>
                <li><strong>Insurance Information:</strong> Insurance provider details for billing purposes</li>
                <li><strong>Emergency Contacts:</strong> Contact information for emergency situations</li>
              </ul>

              <h3>Treatment Information</h3>
              <ul>
                <li>Assessment results and test scores</li>
                <li>Session notes and treatment plans</li>
                <li>Progress reports and clinical observations</li>
                <li>Communications between sessions</li>
              </ul>

              <h3>Website Information</h3>
              <ul>
                <li>IP address and browser information</li>
                <li>Website usage patterns and preferences</li>
                <li>Cookies and tracking technologies (with consent)</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>2. How We Use Your Information</h2>
              
              <h3>Primary Uses</h3>
              <ul>
                <li><strong>Treatment Provision:</strong> Delivering psychological services and therapy</li>
                <li><strong>Assessment & Diagnosis:</strong> Conducting evaluations and developing treatment plans</li>
                <li><strong>Communication:</strong> Scheduling appointments and treatment-related correspondence</li>
                <li><strong>Billing:</strong> Processing payments and insurance claims</li>
                <li><strong>Legal Compliance:</strong> Meeting regulatory and legal requirements</li>
              </ul>

              <h3>Secondary Uses</h3>
              <ul>
                <li>Quality improvement of our services</li>
                <li>Training and supervision (with identifying information removed)</li>
                <li>Research activities (with proper consent and anonymization)</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>3. Information Sharing and Disclosure</h2>
              
              <h3>We DO NOT share your information except:</h3>
              <ul>
                <li><strong>With Your Written Consent:</strong> When you specifically authorize disclosure</li>
                <li><strong>Legal Requirements:</strong> When required by law or court order</li>
                <li><strong>Safety Concerns:</strong> When there's imminent danger to you or others</li>
                <li><strong>Insurance Processing:</strong> For billing and claims processing</li>
                <li><strong>Professional Consultation:</strong> Anonymous consultation with colleagues for treatment purposes</li>
              </ul>

              <h3>Specific Disclosures Required by Law</h3>
              <ul>
                <li>Child abuse or neglect reporting</li>
                <li>Elder abuse reporting</li>
                <li>Threats of violence to specific individuals</li>
                <li>Court-ordered evaluations or testimony</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>4. Data Security and Protection</h2>
              
              <h3>Security Measures</h3>
              <ul>
                <li><strong>Encryption:</strong> All digital records are encrypted at rest and in transit</li>
                <li><strong>Access Controls:</strong> Role-based access with strong authentication</li>
                <li><strong>Regular Backups:</strong> Secure, encrypted backup systems</li>
                <li><strong>Network Security:</strong> Firewalls and intrusion detection systems</li>
                <li><strong>Staff Training:</strong> Regular privacy and security training for all staff</li>
              </ul>

              <h3>Physical Security</h3>
              <ul>
                <li>Locked filing cabinets for paper records</li>
                <li>Restricted access to office areas</li>
                <li>Secure disposal of sensitive documents</li>
                <li>CCTV monitoring of premises</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>5. Your Rights and Choices</h2>
              
              <h3>Under HIPAA, you have the right to:</h3>
              <ul>
                <li><strong>Access Your Records:</strong> Request copies of your treatment records</li>
                <li><strong>Request Amendments:</strong> Ask for corrections to your information</li>
                <li><strong>Restrict Use:</strong> Request limitations on how we use your information</li>
                <li><strong>Confidential Communications:</strong> Request communications through specific methods</li>
                <li><strong>Accounting of Disclosures:</strong> Learn who has received your information</li>
                <li><strong>File Complaints:</strong> Lodge complaints about privacy practices</li>
              </ul>

              <h3>Website Privacy Choices</h3>
              <ul>
                <li>Opt out of non-essential cookies</li>
                <li>Unsubscribe from marketing communications</li>
                <li>Request deletion of website account data</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>6. Data Retention</h2>
              
              <h3>Retention Periods</h3>
              <ul>
                <li><strong>Adult Records:</strong> Maintained for 7 years after last service</li>
                <li><strong>Minor Records:</strong> Maintained until age 25 or 7 years, whichever is longer</li>
                <li><strong>Assessment Reports:</strong> Permanently maintained</li>
                <li><strong>Billing Records:</strong> 7 years for tax and audit purposes</li>
                <li><strong>Website Data:</strong> As long as account is active plus 2 years</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>7. Third-Party Services</h2>
              
              <h3>Business Associates</h3>
              <p>We may use HIPAA-compliant third-party services:</p>
              <ul>
                <li>Electronic health record systems</li>
                <li>Billing and insurance processing services</li>
                <li>Secure communication platforms</li>
                <li>Cloud storage providers (HIPAA-compliant)</li>
              </ul>
              
              <p>All business associates sign agreements ensuring they protect your information according to HIPAA standards.</p>
            </div>

            <div className="policy-section">
              <h2>8. International Data Transfers</h2>
              <p>Your information is stored and processed within India. We do not transfer personal health information internationally without proper safeguards and consent.</p>
            </div>

            <div className="policy-section">
              <h2>9. Children's Privacy</h2>
              <p>We provide services to minors with parental consent. Parents/guardians have access to their minor child's records, except in specific circumstances defined by law. We respect the privacy of adolescent clients while ensuring parental involvement as appropriate.</p>
            </div>

            <div className="policy-section">
              <h2>10. Updates to This Policy</h2>
              <p>We may update this privacy policy periodically. Significant changes will be communicated through:</p>
              <ul>
                <li>Email notification to active clients</li>
                <li>Posted notices in our office</li>
                <li>Website updates with revision dates</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>11. Contact Information</h2>
              
              <h3>Privacy Officer</h3>
              <p><strong>Dr. Pratibha Yadav</strong><br/>
              Clinical Psychologist & Privacy Officer<br/>
              Tatsav Mind Care</p>
              
              <h3>Contact Details</h3>
              <ul>
                <li><strong>Address:</strong> Office No: 302, Plot-12, Aditya Commercial Complex, Community Centre, C-block Preet Vihar, Delhi-110092</li>
                <li><strong>Phone:</strong> +91 9810006319</li>
                <li><strong>Email:</strong> privacy@tatsavmindcare.com</li>
              </ul>

              <h3>Filing Complaints</h3>
              <p>If you believe your privacy rights have been violated, you may file a complaint with:</p>
              <ul>
                <li>Our Privacy Officer (contact information above)</li>
                <li>The Ministry of Health and Family Welfare, Government of India</li>
                <li>The Delhi State Medical Council</li>
              </ul>
              
              <p><strong>You will not be retaliated against for filing a complaint.</strong></p>
            </div>

            <div className="policy-section acknowledgment">
              <h2>Acknowledgment</h2>
              <p>By using our services or website, you acknowledge that you have read, understood, and agree to this Privacy Policy. Your continued use of our services constitutes acceptance of any updates to this policy.</p>
              
              <p><strong>For questions about this policy or to exercise your privacy rights, please contact our Privacy Officer using the information provided above.</strong></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;