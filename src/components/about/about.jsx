import React from "react";
import "./About.css";
import profile from "../../assets/profile_image.png";

const About = () => {
  return (
        <div className="about">
          <div className="about-title">
            <h1>About Me</h1>
          </div>
          <div className="about-content">
            <div className="about-left">
              <img src={profile} alt="Profile" className="about-profile-img" />
            </div>
            <div className="about-right">
              <p>
                Hi, I'm Abhinav, a passionate graphic designer with 2.5 years of
                experience in creating stunning visuals, logos, and user-friendly
                designs. I specialize in branding, poster design, and UI/UX that
                captivates audiences.
              </p>
              <div className="about-skills">
                <div className="skill">
                  <p>HTML & CSS</p>
                  <hr />
                </div>
                <div className="skill">
                  <p>Logo Design</p>
                  <hr />
                </div>
                <div className="skill">
                  <p>Branding</p>
                  <hr />
                </div>
                <div className="skill">
                  <p>Poster Design</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
 

export default About;
