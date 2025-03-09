import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#">
        <div className="d-flex">
          <img src="/images/logotext.png" alt="Logo" className="logo" />
          <img src="/images/logomind.png" alt="Logo" className="logo" />
        </div>
      </a>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Psychological Test</a>
        </li>
        <li>
          <a href="#">Counseling Services</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Privacy & Policy</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
