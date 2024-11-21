
import "./Services.css";

const Service = () => {
  const services = [
    {
      icon: "fa-solid fa-code",
      title: "Graphic Design",
      description:
        "Deliver versatile graphic design solutions tailored to your needs. With creativity at the core, I ensure designs that resonate across platforms.",
      link: "#",
    },
    {
      icon: "fa-brands fa-figma",
      title: "Logo Design",
      description:
        "Craft custom logos that establish a strong visual identity for your brand. From minimalist designs to intricate details, I ensure your logo represents your brand's essence.",
      link: "#",
    },
    {
      icon: " bi bi-brush",
      title: "Poster Design",
      description:
        "Create eye-catching posters that convey messages effectively. From bold graphics to striking typography, I design for impact.",
      link: "#",
    },
    {
        icon: " bi bi-brush",
        title: "Branding",
        description:
          "Build a cohesive brand identity that speaks your values. Through thoughtful design, I ensure every element—from colors to visuals—tells your unique story.",
        link: "#",
      },
      {
        icon: " bi bi-brush",
        title: "Typography",
        description:
          "Craft bespoke typography that brings words to life. Whether it’s elegant serifs or bold sans-serif styles, I ensure your message stands out with clarity and style.",
        link: "#",
      },
      {
        icon: " bi bi-brush",
        title: "Web Design",
        description:
          "Create visually captivating posters for events, promotions, or campaigns. Each design is tailored to communicate your message effectively and attractively.",
        link: "#",
      },
  ];

  return (
    <div id="Service">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <i className={service.icon}></i>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <a href={service.link}>Learn more </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
