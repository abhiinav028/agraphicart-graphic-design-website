import  { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../../assets/logoname2.png";
import video from "../../assets/bg4.mp4";

const Navbar = () => {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        navbar.style.transform = 'translateY(-100%)'; 
      } else {
        navbar.style.transform = 'translateY(0)'; 
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="navbar-container">
      {/* Uncomment if video background is needed */}
      <video
        className="video"
        autoPlay
        muted
        loop
        playsInline
        src={video}
      ></video>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-menu">
          <li><ScrollLink to="home-section" smooth={true} duration={500}>Home</ScrollLink></li>
          <li className="dropdown">
            <ScrollLink to="/" smooth={true} duration={500}>
            Explore <i className="bi bi-caret-down-fill"></i>
            </ScrollLink>
            <ul className="dropdown-content">
              <li><Link to="/poster-page1">Typography</Link></li>
              <li><Link to="/poster-page">Poster</Link></li>
              <li><Link to="/service">Branding</Link></li>
              <li><Link to="/logo-design">illustrator</Link></li>
              <li><Link to="/more">Adobe</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <ScrollLink to="services-section" smooth={true} duration={500}>
              Services <i className="bi bi-caret-down-fill"></i>
            </ScrollLink>
            <ul className="dropdown-content">
              <li><Link to="/poster-page1">Logo Design</Link></li>
              <li><Link to="/poster-page">Poster Design</Link></li>
              <li><Link to="/service">App Design</Link></li>
              <li><Link to="/logo-design">UI/UX Design</Link></li>
              <li><Link to="/more">Web Design</Link></li>
            </ul>
          </li>
          <li><ScrollLink to="portfolio-section" smooth={true} duration={500}>Work</ScrollLink></li>
          <li><ScrollLink to="blog-section" smooth={true} duration={500}>Blog</ScrollLink></li>
          <li><ScrollLink to="more-section" smooth={true} duration={500}>More</ScrollLink></li>
        </ul>
        <div className="nav-search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="nav-connect">
          Learn
        </div>
      </div>
    </div>
  );
};

export default Navbar;
