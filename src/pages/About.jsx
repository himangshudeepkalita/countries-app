import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About This Website</h1>
        <p className="about-text">
          This website uses the{" "}
          <span className="highlight">REST Countries API </span>
          to display comprehensive information about countries from around the
          world.
        </p>
        <p className="about-text">
          Explore our data to learn about country names, capitals, regions,
          populations, flags, and much more. Whether you’re curious about a
          particular country or looking for insights about global regions, our
          interactive explorer makes it easy.
        </p>
        <p className="about-text">
          Our goal is to build a fully responsive and modern web application
          using the latest technologies, including React Router for seamless
          routing and CSS for a beautiful, responsive user interface.
        </p>
      </div>
    </div>
  );
};

export default About;
