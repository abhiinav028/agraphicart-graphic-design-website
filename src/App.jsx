// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Element } from 'react-scroll'; // For wrapping sections
import Navbar from './components/Navbar/Navbar';
import Service from './components/Services/Services';
import Hero from './components/Hero/Hero';
// import About from './components/about/about';
import Contact from './components/contact/contact';
import Portfolio from './components/Yourwork/Yourwork';

const AppContent = () => {
  const location = useLocation();

  const showNavbar = location.pathname !== "/poster-page" && location.pathname !== "/poster-page1";

  return (
    // Debugging wrapper for mouse events
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        background: "rgba(0, 0, 255, 0.1)", // Light blue transparent background
      }}
      onMouseMove={() => console.log("Mouse is working!")}
    >
      {showNavbar && <Navbar />}
      {showNavbar && (
        <>
          <Element name="home-section">
            <Navbar />
          </Element>
          <Element name="home-section">
            <Hero />
          </Element>
          {/* <Element name="about-section">
            <About />
          </Element> */}
          <Element name="portfolio-section">
            <Portfolio />
          </Element>
          <Element name="services-section">
            <Service />
          </Element>
          <Element name="contact-section">
            <Contact />
          </Element>
        </>
      )}
      <Routes>
        {/* Uncomment these routes when needed */}
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
