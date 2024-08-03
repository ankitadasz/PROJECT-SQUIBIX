import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="home-page-container">
        <h1 className="home-page-title">Home Page</h1>
       <div className="header-container">
      <div className="logo-container">
        <h1 className="logo">B.planet</h1>
        <div className="hero-container">
        <div className="plant-quote"><p className='int'>'As interesting </p>
         as a plant'</div>
            <img src="/heroimage2.png" alt="Hero" className="hero-image2" />
            <img src="/heroimage1.png" alt="Hero" className="hero-image1" />
          </div>
        <nav className="navv">
          <a href="#" className="contact-us">Contact Us</a>
          <a href="/login" className='lo-gin'>Login</a>
        </nav>
      </div>
    </div>
    </div>
    </div>
    
  );
};

export default Header;
