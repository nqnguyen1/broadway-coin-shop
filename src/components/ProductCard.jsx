// components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    if (addToCart && product.inStock) {
      addToCart(product);
    }
  };

  // Determine category tag display text and style
  const getCategoryTag = () => {
    switch(product.category) {
      case 'us-coins':
        return { text: 'US Coin', className: 'us' };
      case 'world-coins':
        return { text: 'World Coin', className: 'world' };
      case 'bullion':
        return { text: 'Bullion', className: 'bullion' };
      case 'currency':
        return { text: 'Currency', className: 'currency' };
      default:
        return { text: 'Collectible', className: '' };
    }
  };

  const categoryTag = getCategoryTag();

  return (
    <div className="coin-card">
      <Link to={`/product/${product.id}`}>
        <img 
          src={product.image} 
          alt={product.title} 
          className="coin-img"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/placeholder.jpg';
          }}
        />
        <div className="coin-details">
          <span className={`coin-tag ${categoryTag.className}`}>
            {categoryTag.text}
          </span>
          
          <h3 className="coin-title">{product.title}</h3>
          <p className="coin-meta">{product.description}</p>
          <div className="coin-price">${product.price.toFixed(2)}</div>
          
          {!product.inStock && (
            <span className="stock-status">Currently Unavailable</span>
          )}
          
          <div className="coin-footer">
            <span className="view-details">View Details</span>
            <button 
              className={`add-to-cart ${!product.inStock ? 'disabled' : ''}`} 
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <i className="fas fa-shopping-cart"></i> Add
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;