import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Element } from 'react-scroll'; // For wrapping sections
import Navbar from './components/Navbar/Navbar';
// import Work from './components/work/work';
import Service from './components/Services/Services';
import Hero from './components/Hero/Hero';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Portfolio from './components/portfolio/portfolio';

import About from './components/about/about';
const AppContent = () => {
  // const location = useLocation();

  // const showNavbar = location.pathname !== "/poster-page" && location.pathname !== "/poster-page1";

  return (
    <div>
      {showNavbar && <Navbar />}
      {showNavbar && (
        <>
            <Element name="home-section">
            <Navbar />
          </Element>
          <Element name="home-section">
            <Hero />
          </Element>
          <Element name="about-section">
            <About />
          </Element>
          <Element name="services-section">
            <Service />
          </Element>
          <Element name="portfolio-section">
            <Portfolio />
          </Element>
          <Element name="contact-section">
            <Contact />
          </Element>
        </>
      )}
      <Routes>
        {/* <Route path="/poster-page" element={<Poster />} />
        <Route path="/poster-page1" element={<Poster1 />} /> */}
        <Route path="/service" element={<Service />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
