import './Branding.css';
import image1 from '../../assets/poster12.jpg'; // Correct path for image
// import image2 from 'assets/image2.jpg'; // Example additional image
// import image3 from 'assets/image3.jpg'; // Example additional image
// import image4 from 'assets/image4.jpg'; // Example additional image
// import image5 from 'assets/image5.jpg'; // Example additional image
// import image6 from 'assets/image6.jpg'; // Example additional image

const brandingImages = [
  { image: image1 },
  { image: image1 },
  { image: image1 },
  { image: image1 },
  { image: image1 },
  { image: image1 },
  { image: image1 },
  { image: image1 },
  { image: image1 },
  { image: image1 },
  { image: image1 },
  
  // { image: image2 },
  // { image: image3 },
  // { image: image4 },
  // { image: image5 },
  // { image: image6 },
];

const Branding = () => {
  return (
    <div id="Service">
      <div className="container">
        <h1 className="sub-title">Branding</h1>
        <div className="services-list">
          {brandingImages.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={`Branding ${index + 1}`} className="service-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Branding;
