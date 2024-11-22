
import "./Yourwork.css";
import Artboard14 from "../../assets/Artboard 14.jpg";
import Artboard15 from "../../assets/Artboard 15.jpg";
import Artboard17 from "../../assets/Artboard 17.jpg";
import BlackBlue from "../../assets/black blue.png";
import GaneshPoster from "../../assets/ganesh poster.png";
import Artboard13 from "../../assets/Artboard 13.jpg";

const Portfolio = () => {
  
  const portfolioItems = [
    { src: Artboard13, alt: "Artboard 13 Poster" },
    { src: Artboard14, alt: "Artboard 14 Poster" },
    { src: Artboard15, alt: "Artboard 15 Poster" },
    { src: Artboard17, alt: "Artboard 17 Poster" },
    { src: BlackBlue, alt: "Black Blue Poster" },
    { src: GaneshPoster, alt: "Artboard 17 Poster" },
    { src: GaneshPoster, alt: "Artboard 17 Poster" },
    { src: GaneshPoster, alt: "Artboard 17 Poster" },
  ];

  return (
    <div id="Yourwork">
      <div className="container">
        <h1 className="mywork-title">Your <span>Work</span></h1>
        <div className="mywork-container">
          {portfolioItems.map((work, index) => (
            <img key={index} src={work.src} alt={work.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

