import React from 'react';
import './Hero.css';
// import profile_img from '../../assets/12.png';
import video from "../../assets/bg.mp4"; 

const Hero = () => {
  return (
    <div className="hero">
      {/* <img src={profile_img} alt="Profile" /> */}
      <h1> UI/UX Designer<span> <br />I'm Abhinav</span></h1>
      <p>
        A Graphic Designer crafts visually engaging designs to communicate ideas and enhance branding. <br />
        They create logos, marketing materials, and visual assets that leave a lasting impression.
      </p>
      {/* Buttons for connect and more */}
      <div className="hero-action">
        <div className="hero-connect">Connect</div>
        <div className="hero-formore">For More</div>
      </div>
    </div> 
  );
}

export default Hero;
