import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing-bg">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>Specializing in providing lush ornamental plants for your living space 🌱</p>
        <Link to="/products">
          <button className="start-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}
