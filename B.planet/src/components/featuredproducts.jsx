import React from 'react';
import './featuredproduct.css';
import ProductCard from './productcard';

const FeaturedProducts = () => {
  const products = [
    { id: 1, title: 'Tree 1', image: '/image 1.png' },
    { id: 2, title: 'Tree 1', image: '/image 2.png' },
    { id: 3, title: 'Tree 1', image: '/image 3.png' },
    { id: 4, title: 'Tree 1', image: '/image 4.png' },
    { id: 5, title: 'plant 1', image: '/image 5.png' },
    { id: 6, title: 'Plant 2', image: '/image 6.png' },
    { id: 7, title: 'Plant 3', image: '/image 7.png' },
    { id: 8, title: 'Plant 4', image: '/image 8.png' },
    { id: 9, title: 'Tray ', image: '/image 9.png' },
    { id: 10, title: 'Soil', image: '/image 10.png' },
    { id: 11, title: 'Soil 2', image: '/image 11.png' },
    { id: 12, title: 'Spade', image: '/image 12.png'  },
    { id: 13, title: 'Duck 1', image: '/image 13.png' },
    { id: 14, title: 'Duck 2', image: '/image 14.png' },
    { id: 15, title: 'Duck 3', image: '/image 14-1.png' },
    { id: 16, title: 'Duck 4', image: '/image 15.png' },
    { id: 17, title: 'Pot 1', image: '/image 16.png' },
    { id: 18, title: 'Pot 2', image: '/image 17.png' },
    { id: 19, title: 'Pot 3', image: '/image 18.png' },
    { id: 20, title: 'Pot 4', image: '/image 19.png' },
  ];

  return (
    <div className="big-container">
    <div className="featured-container">
      <h2 className="title">Featured Product</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default FeaturedProducts;