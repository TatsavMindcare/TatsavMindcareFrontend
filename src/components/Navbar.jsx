import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#">
        <div className="d-flex">
          <img src="/images/logotext.png" alt="Logo" className="logo" />
          <img src="/images/logomind.png" alt="Logo" className="logo" />
        </div>
      </a>

      {/* Toggle Button */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Navigation Links */}
      <ul
        className={`nav-links ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active-link" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/psychological-test"
            className={
              location.pathname === "/psychological-test" ? "active-link" : ""
            }
          >
            Psychological Test
          </Link>
        </li>
        <li>
          <Link
            to="/counseling-services"
            className={
              location.pathname === "/counseling-services" ? "active-link" : ""
            }
          >
            Counseling Services
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active-link" : ""}
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            to="/privacy-policy"
            className={
              location.pathname === "/privacy-policy" ? "active-link" : ""
            }
          >
            Privacy & Policy
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
