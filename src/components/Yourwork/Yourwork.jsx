
import "./Yourwork.css";
import Artboard1 from "../../assets/black blue.png";
import Artboard2 from "../../assets/poster13.jpg";
import Artboard3 from "../../assets/business man.png";
import Artboard4 from "../../assets/mind poster.png";
import Artboard5 from "../../assets/poster8.jpg";
// import Artboard6 from "../../assets/poster2.jpg";
import Artboard7 from "../../assets/shoes poster 1.png";
import Artboard8 from "../../assets/poster7.jpg";

const Portfolio = () => {
  
  const portfolioItems = [
    { src: Artboard1, alt: "Artboard 13 Poster" },
    { src: Artboard2, alt: "Artboard 14 Poster" },
    { src: Artboard3, alt: "Artboard 15 Poster" },
    { src: Artboard4, alt: "Artboard 17 Poster" },
    { src: Artboard5, alt: "Black Blue Poster" },
    // { src: Artboard6, alt: "Artboard 17 Poster" },
    { src: Artboard7, alt: "Artboard 17 Poster" },
    { src: Artboard8, alt: "Artboard 17 Poster" },
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

