import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(null);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setDropdownOpen(null);
    };

    if (dropdownOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [dropdownOpen]);

  const links = [
    // { path: "/", label: "Home" },
    { 
      path: "/services", 
      label: "Services",
      dropdown: [
        { path: "/psychological-test", label: "Psychological Testing" },
        { path: "/iq-assessment", label: "IQ Assessment" },
        { path: "/career-counseling", label: "Career Counseling" },
        { path: "/individual-therapy", label: "Individual Therapy" }
      ]
    },
    { path: "/aboutme", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/privacy-policy", label: "Privacy Policy" },
  ];

  const handleDropdownToggle = (index, e) => {
    e.preventDefault();
    e.stopPropagation();
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
       <Link to="/" className="navbar-brand" style={{marginLeft:"20px"}}>
          <motion.img 
            src="/images/logotext.png" 
            alt="Psychology Services Logo" 
            className="logo-text"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <div className="divider"></div>
          <motion.img 
            src="/images/logo.jpeg" 
            alt="Clinical Psychology Logo" 
            className="logo-icon"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
        </Link>
      <div className="navbar-container">
        {/* Logo */}
       

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <ul className="nav-links">
            {links.map((link, index) => (
              <li key={index} className="nav-item">
                {link.dropdown ? (
                  <div className="dropdown-container">
                    {/* <button
                      className={`nav-link dropdown-trigger ${
                        link.dropdown.some(item => location.pathname === item.path) ? "active-link" : ""
                      }`}
                      onClick={(e) => handleDropdownToggle(index, e)}
                    >
                      <span>{link.label}</span>
                      <motion.div
                        animate={{ rotate: dropdownOpen === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </button> */}
                      <button
                      className={`nav-link dropdown-trigger ${
                        link.dropdown.some(item => location.pathname === item.path) ? "active-link" : ""
                      }`}
                      onClick={(e) => handleDropdownToggle(index, e)}
                    >
                      <span>{link.label}</span>
                      <motion.div
                        animate={{ rotate: dropdownOpen === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {dropdownOpen === index && (
                        <motion.div
                          className="dropdown-menu"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.dropdown.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              to={dropdownItem.path}
                              className={`dropdown-item ${
                                location.pathname === dropdownItem.path ? "active" : ""
                              }`}
                              onClick={() => setDropdownOpen(null)}
                            >
                              <div className="dropdown-item-content">
                                <span className="dropdown-item-title">{dropdownItem.label}</span>
                                <span className="dropdown-item-desc">{dropdownItem.description}</span>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`nav-link ${location.pathname === link.path ? "active-link" : ""}`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <motion.button 
            className="cta-btn"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <span>Book Consultation</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={menuOpen ? "close" : "open"}
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </motion.div>
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            >
              <motion.div
                className="mobile-menu" mt-4
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                onClick={(e) => e.stopPropagation()}
              >

                <div className="mobile-menu-content">
                  {links.map((link, index) => (
                    <motion.div 
                      key={index} 
                      className="mobile-nav-item"
                      variants={mobileItemVariants}
                    >
                      {link.dropdown ? (
                        <>
                          <button
                            className={`mobile-nav-link dropdown ${
                              link.dropdown.some(item => location.pathname === item.path) ? "active" : ""
                            }`}
                            onClick={(e) => handleDropdownToggle(index, e)}
                          >
                            <span>{link.label}</span>
                            <motion.div
                              animate={{ rotate: dropdownOpen === index ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown size={18} />
                            </motion.div>
                          </button>
                          
                          <AnimatePresence>
                            {dropdownOpen === index && (
                              <motion.div
                                className="mobile-dropdown"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                {link.dropdown.map((dropdownItem, dropdownIndex) => (
                                  <Link
                                    key={dropdownIndex}
                                    to={dropdownItem.path}
                                    className={`mobile-dropdown-item ${
                                      location.pathname === dropdownItem.path ? "active" : ""
                                    }`}
                                    onClick={() => setMenuOpen(false)}
                                  >
                                    {dropdownItem.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={link.path}
                          className={`mobile-nav-link ${
                            location.pathname === link.path ? "active" : ""
                          }`}
                          onClick={() => setMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    className="mobile-cta"
                    variants={mobileItemVariants}
                  >
                    <button className="mobile-cta-btn">
                      <span>Book Consultation</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu Backdrop */}
      {menuOpen && <div className="mobile-backdrop" onClick={() => setMenuOpen(false)} />}
    </motion.nav>
  );
};

export default Navbar;