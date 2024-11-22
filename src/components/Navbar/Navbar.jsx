// import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../../assets/logo.png"; 
import video from "../../assets/bg.mp4"; 
const Navbar = () => {
  return (
    <div className="navbar-container">
      <video
        className="video"
        autoPlay
        muted
        loop
        playsInline
        src={video} // Corrected to use the imported video variable
      ></video>
      <div className="navbar">
      <div className="navbar-logo">
      <img src={logo} alt="Logo" />
    </div>
        <ul className="nav-menu">
          <li><ScrollLink to="home-section" smooth={true} duration={500}>Home</ScrollLink></li>
          
          <li className="dropdown">
            <ScrollLink to="services-section" smooth={true} duration={500}>
              Services<i className="bi bi-caret-down-fill"></i>
            </ScrollLink>
            <ul className="dropdown-content">
              <li><Link to="/poster-page1">Logo Design</Link></li>
              <li><Link to="/poster-page">Poster Design</Link></li>
              <li><Link to="/service">App Design</Link></li>
              <li><Link to="/logo-design">Ui/Ux Design</Link></li>
              <li><Link to="/logo-design">More</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            <ScrollLink to="explore-section" smooth={true} duration={500}>
              Explore<i className="bi bi-caret-down-fill"></i>
            </ScrollLink>
            <ul className="dropdown-content">
              <li><Link to="/poster-page1">Typography</Link></li>
              <li><Link to="/poster-page">Poster</Link></li>
              <li><Link to="/service">Branding</Link></li>
              <li><Link to="/logo-design">Adobe</Link></li>
            </ul>
          </li>

          <li><ScrollLink to="portfolio-section" smooth={true} duration={500}>Portfolio</ScrollLink></li>
          <li>
  <ScrollLink to="about-section" smooth={true} duration={500}>
    About
  </ScrollLink>
</li>
          <li><ScrollLink to="contact-section" smooth={true} duration={500}>Contact</ScrollLink></li>
        </ul>

        <div className="nav-mode">
          Mode<i className="bi bi-caret-down-fill"></i>
        </div>
        <Link to="/desired-path">
  <div className="nav-connect">
    Connect
  </div>
</Link>
      </div>
    </div>
    // </div>
  );
};

export default Navbar;
