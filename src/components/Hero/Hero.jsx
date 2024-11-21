// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Hero.css';
// import profile_img from '../../assets/12.png';
const Hero = () => {
  return (
    <div className="hero">
      {/* <img src={profile_img} alt="Profile" /> */}
      <h1> UI/UX Designer<span> <br /> Im Abhinav</span></h1>
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
