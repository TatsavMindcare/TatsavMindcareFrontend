import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertCircle, Clock, Shield, Users, CheckCircle } from 'lucide-react';
import './TermPage.css';

const TermsConditions = () => {
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

  const keyTerms = [
    {
      icon: Users,
      title: "Professional Relationship",
      description: "Clear boundaries and expectations for the therapeutic relationship"
    },
    {
      icon: Clock,
      title: "Scheduling & Cancellation",
      description: "Policies for appointments, cancellations, and no-shows"
    },
    {
      icon: Shield,
      title: "Confidentiality",
      description: "Your privacy rights and the limits of confidentiality"
    },
    {
      icon: CheckCircle,
      title: "Payment Terms",
      description: "Billing procedures, insurance, and payment responsibilities"
    }
  ];

  return (
    <div className="legal-page">
      {/* Hero Section */}
      <section className="legal-hero "
      style={{marginTop:"90px"}}>
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
              <FileText size={20} />
              <span>Legal Agreement</span>
            </div>
            <h1>Terms & Conditions</h1>
            <p>
              Please read these terms carefully. By using our services, you agree to be bound by these 
              terms and conditions which govern our professional relationship.
            </p>
            <div className="last-updated">
              <Clock size={16} />
              <span>Last updated: January 2025</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Terms Overview */}
      <section className="privacy-principles">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Key Terms Overview</h2>
            <p>Essential aspects of our service agreement</p>
          </motion.div>
          
          <motion.div 
            className="principles-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {keyTerms.map((term, index) => (
              <motion.div 
                key={index}
                className="principle-card"
                variants={itemVariants}
              >
                <div className="principle-icon">
                  <term.icon size={24} />
                </div>
                <h3>{term.title}</h3>
                <p>{term.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
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
              <h2>1. Agreement to Terms</h2>
              <p>By engaging our psychological services or using our website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.</p>
              
              <h3>Scope of Agreement</h3>
              <ul>
                <li>This agreement applies to all professional services provided by Tatsav Mind Care</li>
                <li>It covers in-person, online, and telephone consultations</li>
                <li>Website usage and digital service interactions</li>
                <li>All assessment and testing services</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>2. Professional Services</h2>
              
              <h3>Nature of Services</h3>
              <p>We provide the following professional psychological services:</p>
              <ul>
                <li><strong>Individual Therapy:</strong> One-on-one counseling and psychotherapy</li>
                <li><strong>Psychological Assessment:</strong> IQ testing, personality assessment, clinical evaluation</li>
                <li><strong>Career Counseling:</strong> Career guidance and vocational assessment</li>
                <li><strong>Consultation Services:</strong> Professional consultation and second opinions</li>
              </ul>

              <h3>Professional Standards</h3>
              <ul>
                <li>All services are provided by licensed clinical psychologists</li>
                <li>We adhere to ethical guidelines established by professional psychology associations</li>
                <li>Services are provided in accordance with evidence-based practices</li>
                <li>We maintain continuing education and professional development</li>
              </ul>

              <h3>Limitations</h3>
              <ul>
                <li>We do not provide emergency or crisis intervention services</li>
                <li>We do not prescribe medications (psychiatric consultation may be recommended)</li>
                <li>Services are not substitutes for medical treatment</li>
                <li>We cannot guarantee specific outcomes or results</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>3. Appointment Scheduling and Attendance</h2>
              
              <h3>Scheduling</h3>
              <ul>
                <li><strong>Booking:</strong> Appointments can be scheduled by phone, email, or through our website</li>
                <li><strong>Confirmation:</strong> All appointments will be confirmed 24 hours in advance</li>
                <li><strong>Availability:</strong> Monday-Saturday 10 AM - 7 PM, Sunday by appointment only</li>
                <li><strong>Session Duration:</strong> Standard sessions are 50 minutes unless otherwise specified</li>
              </ul>

              <h3>Cancellation Policy</h3>
              <ul>
                <li><strong>Notice Required:</strong> Minimum 24 hours notice for cancellations</li>
                <li><strong>Late Cancellation:</strong> Less than 24 hours notice incurs 50% of session fee</li>
                <li><strong>No-Show Policy:</strong> Full session fee charged for missed appointments without notice</li>
                <li><strong>Emergency Exceptions:</strong> Medical emergencies and unforeseen circumstances will be considered</li>
                <li><strong>Repeated Cancellations:</strong> May result in termination of services</li>
              </ul>

              <h3>Lateness Policy</h3>
              <ul>
                <li>Sessions will end at the scheduled time regardless of late arrival</li>
                <li>Frequent lateness may affect treatment progress and continuity</li>
                <li>Excessive lateness may be considered a missed appointment</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>4. Fees and Payment Terms</h2>
              
              <h3>Service Fees</h3>
              <ul>
                <li><strong>Individual Therapy:</strong> ₹3,000 per session</li>
                <li><strong>Psychological Assessment:</strong> ₹5,000 - ₹15,000 (depending on complexity)</li>
                <li><strong>Career Counseling:</strong> ₹2,500 per session</li>
                <li><strong>Consultation:</strong> ₹2,000 per session</li>
                <li><strong>Report Writing:</strong> ₹1,500 per report (if requested separately)</li>
              </ul>

              <h3>Payment Policies</h3>
              <ul>
                <li><strong>Payment Due:</strong> At the time of service unless prior arrangements are made</li>
                <li><strong>Accepted Methods:</strong> Cash, UPI, bank transfer, credit/debit cards</li>
                <li><strong>Insurance:</strong> We accept major insurance plans (subject to verification)</li>
                <li><strong>Late Payment:</strong> 2% monthly charge on outstanding balances over 30 days</li>
                <li><strong>Collection:</strong> Unpaid balances may be sent to collection agencies</li>
              </ul>

              <h3>Insurance and Third-Party Payments</h3>
              <ul>
                <li>Insurance coverage verification is the client's responsibility</li>
                <li>Deductibles and co-payments are due at time of service</li>
                <li>We will assist with insurance claims but cannot guarantee payment</li>
                <li>Clients are responsible for all charges not covered by insurance</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>5. Confidentiality and Privacy</h2>
              
              <h3>Confidentiality Commitment</h3>
              <p>All information shared in therapy sessions is confidential and protected by law. We maintain strict confidentiality in accordance with:</p>
              <ul>
                <li>Professional ethical guidelines</li>
                <li>Indian Medical Council regulations</li>
                <li>Data protection laws</li>
                <li>HIPAA-equivalent standards</li>
              </ul>

              <h3>Limits of Confidentiality</h3>
              <p>Confidentiality may be limited or broken in the following circumstances:</p>
              <ul>
                <li><strong>Danger to Self:</strong> If you pose a serious risk of harm to yourself</li>
                <li><strong>Danger to Others:</strong> If you pose a serious risk of harm to specific individuals</li>
                <li><strong>Child Abuse:</strong> Suspected abuse or neglect of a minor</li>
                <li><strong>Elder Abuse:</strong> Suspected abuse of elderly or disabled individuals</li>
                <li><strong>Court Orders:</strong> When required by legal proceedings</li>
                <li><strong>Insurance Claims:</strong> For billing and claims processing</li>
              </ul>

              <h3>Record Keeping</h3>
              <ul>
                <li>Clinical records are maintained for legal and treatment purposes</li>
                <li>You have the right to access your records (with some limitations)</li>
                <li>Records are stored securely and disposed of properly when no longer needed</li>
                <li>Electronic records are encrypted and password-protected</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>6. Client Rights and Responsibilities</h2>
              
              <h3>Your Rights</h3>
              <ul>
                <li><strong>Informed Consent:</strong> Right to understand treatment approaches and risks</li>
                <li><strong>Treatment Choice:</strong> Right to participate in treatment planning</li>
                <li><strong>Second Opinion:</strong> Right to seek consultation from other professionals</li>
                <li><strong>Termination:</strong> Right to discontinue services at any time</li>
                <li><strong>Complaints:</strong> Right to file complaints about services</li>
                <li><strong>Access to Records:</strong> Right to access your clinical records</li>
              </ul>

              <h3>Your Responsibilities</h3>
              <ul>
                <li><strong>Honesty:</strong> Provide accurate and complete information</li>
                <li><strong>Participation:</strong> Actively engage in the therapeutic process</li>
                <li><strong>Attendance:</strong> Arrive on time and attend scheduled appointments</li>
                <li><strong>Payment:</strong> Pay fees and charges in a timely manner</li>
                <li><strong>Communication:</strong> Inform us of any changes in contact information or circumstances</li>
                <li><strong>Safety:</strong> Follow treatment recommendations and safety plans</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>7. Emergency Procedures</h2>
              
              <h3>Crisis Situations</h3>
              <div className="alert-box">
                <p><strong>Important:</strong> We do not provide 24/7 emergency services. In case of psychiatric emergencies:</p>
              </div>
              <ul>
                <li><strong>Immediate Danger:</strong> Call emergency services (100/102) or go to nearest hospital emergency room</li>
                <li><strong>Suicide Prevention:</strong> Contact suicide prevention helpline at 9152987821</li>
                <li><strong>Mental Health Crisis:</strong> Contact NIMHANS helpline at 080-46110007</li>
                <li><strong>Domestic Violence:</strong> Contact women's helpline at 1091</li>
              </ul>

              <h3>Between-Session Contact</h3>
              <ul>
                <li>Brief check-ins and appointment scheduling can be done via phone or email</li>
                <li>Response time is typically within 24-48 hours during business days</li>
                <li>Urgent matters requiring immediate attention should use emergency services</li>
                <li>Therapy-related discussions should be reserved for sessions</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>8. Technology and Communication</h2>
              
              <h3>Electronic Communications</h3>
              <ul>
                <li><strong>Email:</strong> Used for appointment scheduling and brief administrative matters</li>
                <li><strong>Text Messages:</strong> Appointment reminders and confirmations only</li>
                <li><strong>Video Sessions:</strong> Available through secure, HIPAA-compliant platforms</li>
                <li><strong>Phone Calls:</strong> Brief consultations and emergency situations</li>
              </ul>

              <h3>Technology Limitations</h3>
              <ul>
                <li>Electronic communications are not guaranteed to be completely secure</li>
                <li>Technical difficulties may interrupt online sessions</li>
                <li>Backup communication methods will be established</li>
                <li>We are not responsible for technology failures beyond our control</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>9. Professional Boundaries</h2>
              
              <h3>Therapeutic Relationship</h3>
              <ul>
                <li>The relationship between therapist and client is professional only</li>
                <li>Dual relationships (social, business, romantic) are prohibited</li>
                <li>Gift-giving should be minimal and appropriate</li>
                <li>Physical contact is limited to therapeutic handshakes when appropriate</li>
              </ul>

              <h3>Social Media and Online Interaction</h3>
              <ul>
                <li>We do not accept friend requests on personal social media accounts</li>
                <li>Professional information may be shared through official business channels</li>
                <li>Online reviews and testimonials should not include confidential information</li>
                <li>Interactions outside of therapy should be kept to minimum</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>10. Termination of Services</h2>
              
              <h3>Client-Initiated Termination</h3>
              <ul>
                <li>You may discontinue services at any time</li>
                <li>We recommend discussing termination in session for proper closure</li>
                <li>Outstanding balances must be settled</li>
                <li>Referrals can be provided if continued care is needed</li>
              </ul>

              <h3>Therapist-Initiated Termination</h3>
              <p>We may terminate services in the following situations:</p>
              <ul>
                <li>Non-payment of fees despite reasonable efforts to collect</li>
                <li>Consistent non-compliance with treatment recommendations</li>
                <li>Threatening or inappropriate behavior toward staff</li>
                <li>When services are no longer beneficial or appropriate</li>
                <li>If a conflict of interest develops</li>
              </ul>

              <p>In such cases, we will provide reasonable notice and referral resources when clinically appropriate.</p>
            </div>

            <div className="policy-section">
              <h2>11. Liability and Disclaimers</h2>
              
              <h3>Professional Liability</h3>
              <ul>
                <li>We maintain professional liability insurance</li>
                <li>Services are provided with reasonable professional care and skill</li>
                <li>We cannot guarantee specific outcomes or results</li>
                <li>Therapy involves risks including temporary emotional discomfort</li>
              </ul>

              <h3>Limitations of Liability</h3>
              <ul>
                <li>Liability is limited to the extent permitted by law</li>
                <li>We are not responsible for actions taken based on our recommendations</li>
                <li>Insurance coverage and limitations apply</li>
                <li>No liability for indirect, consequential, or punitive damages</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>12. Governing Law</h2>
              <p>These terms are governed by the laws of India and the jurisdiction of Delhi courts. Any disputes will be resolved through:</p>
              <ul>
                <li><strong>Initial Resolution:</strong> Direct discussion and mediation</li>
                <li><strong>Professional Mediation:</strong> Through medical or psychological associations</li>
                <li><strong>Legal Action:</strong> Courts of Delhi, India</li>
                <li><strong>Applicable Law:</strong> Indian Medical Council regulations and relevant healthcare laws</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>13. Changes to Terms</h2>
              <p>We may modify these terms periodically. Changes will be communicated through:</p>
              <ul>
                <li>Email notification to current clients</li>
                <li>Posted notice in our office</li>
                <li>Website updates with effective dates</li>
                <li>Discussion in session for significant changes</li>
              </ul>
              <p>Continued use of services after changes constitutes acceptance of new terms.</p>
            </div>

            <div className="policy-section">
              <h2>14. Contact Information</h2>
              
              <div className="contact-info-box">
                <h3>Tatsav Mind Care</h3>
                <ul>
                  <li><strong>Dr. Pratibha Yadav</strong> - Clinical Psychologist (RCI Registered)</li>
                  <li><strong>Address:</strong> Office No: 302, Plot-12, Aditya Commercial Complex, Community Centre, C-block Preet Vihar, Delhi-110092</li>
                  <li><strong>Phone:</strong> +91 9810006319</li>
                  <li><strong>Email:</strong> contact@tatsavmindcare.com</li>
                  <li><strong>Website:</strong> www.tatsavmindcare.com</li>
                </ul>
              </div>

              <h3>Business Hours</h3>
              <ul>
                <li><strong>Monday - Saturday:</strong> 10:00 AM - 7:00 PM</li>
                <li><strong>Sunday:</strong> By appointment only</li>
                <li><strong>Holidays:</strong> Closed (emergency referrals available)</li>
              </ul>
            </div>

            <div className="policy-section acknowledgment">
              <h2>Acceptance of Terms</h2>
              <p>By scheduling an appointment, using our services, or accessing our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
              
              <p><strong>If you have questions about these terms or need clarification on any policies, please discuss them with Dr. Pratibha Yadav during your consultation or contact us using the information provided above.</strong></p>
              
              <div className="alert-box">
                <p><strong>Important:</strong> These terms constitute a legal agreement between you and Tatsav Mind Care. Please read them carefully and ask questions if anything is unclear.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;