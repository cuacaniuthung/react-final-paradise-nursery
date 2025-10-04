import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage(){
  return (
    <div className="landing" style={{
      backgroundImage: "url('/images/landing-bg.jpg')",
      backgroundSize: 'cover',
      minHeight: '70vh',
      padding: 40,
      color: '#fff'
    }}>
      <h2>Paradise Nursery</h2>
      <p>We bring nature to your home. Explore our curated houseplants—perfect for beginners and plant lovers.</p>
      <Link to="/products"><button className="btn">Get Started</button></Link>
    </div>
  );
}
