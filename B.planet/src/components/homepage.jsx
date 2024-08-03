import React from 'react';
import './homepage.css';
import Header from './header';
import FeaturedProducts from './featuredproducts';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;