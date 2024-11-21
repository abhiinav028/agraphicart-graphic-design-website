import React from 'react';
import './work.css';
import Artboard14 from "../../assets/Artboard 14.jpg";
import Artboard15 from "../../assets/Artboard 15.jpg";
import Artboard17 from "../../assets/Artboard 17.jpg";
import BlackBlue from "../../assets/black blue.png";
import GaneshPoster from "../../assets/ganesh poster.png";
import Artboard13 from "../../assets/Artboard 13.jpg";

const Work = () => {
  return (
    <div className="work-page">
      <h1>Work</h1>
      <div className="gallery">
        <img src={Artboard14} alt="Artboard 14" />
        <img src={Artboard15} alt="Artboard 15" />
        <img src={Artboard17} alt="Artboard 17" />
        <img src={BlackBlue} alt="Black Blue" />
        <img src={GaneshPoster} alt="Ganesh Poster" />
        <img src={Artboard13} alt="Artboard 13" />
      </div>
    </div>
  );
};

export default Work;
