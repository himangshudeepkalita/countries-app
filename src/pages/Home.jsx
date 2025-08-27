import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-grid">
          <div className="home-content">
            <div className="home-main">
              <h1 className="home-title">
                <span className="highlight">Explore Countries with </span>
                <span className="highlight-secondary">Real-Time Data</span>
              </h1>

              <p className="home-description">
                Discover details about every country around the world - from
                capitals to regions!
              </p>
              <div className="home-buttons">
                <Link to="/countries" className="btn-primary">
                  Explore Now{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>

                <Link to="/about" className="btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="home-image-container">
            <div className="home-wrapper">
              <img
                // src="https://image.winudf.com/v2/image/Ymx1ZWNhcC5pbWFnZXouYmVhdXRpZnVsX2NvdW50cmllc193YWxscGFwZXJzX3NjcmVlbl8wXzlpMW14OWl1/screen-0.webp?fakeurl=1&type=.webp"
                src="https://plus.unsplash.com/premium_photo-1700483717331-6da3888bc3db?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="home-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
