import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1 className="company-name">Paradise Nursery</h1>
          <p className="company-description">
            Welcome to Paradise Nursery, where nature meets elegance. We are a premium
            houseplant destination offering a carefully curated collection of aromatic,
            medicinal, and air-purifying plants. Our mission is to bring the beauty and
            benefits of nature into your home, creating a healthier and more vibrant
            living space. Each plant is selected with care to ensure quality, beauty,
            and sustainability. Transform your space into a green paradise today!
          </p>
          <Link to="/products" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
