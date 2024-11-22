// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Hero.css';
// import profile_img from '../../assets/12.png';
const Hero = () => {
  return (
    <div className="hero">
      {/* <img src={profile_img} alt="Profile" /> */}
      <h1>Designs That Speak Louder  <br /> Than Words</h1>
      <p>
            At Agraphicart,we turn ideas into stunning designs that  <br />make an impact.
      </p>
      {/* Buttons for connect and more */}
      <div className="hero-action">
        <div className="hero-connect">Connect</div>
        {/* <div className="hero-formore">For More</div> */}
      </div>
    </div> 
  );
}

export default Hero;
