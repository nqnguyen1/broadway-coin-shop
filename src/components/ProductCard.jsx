// components/ProductCard.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="coin-card">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="coin-img"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/images/placeholder.jpg";
          }}
        />
        <div className="coin-details">
          {product.tag && (
            <span
              className={`coin-tag ${
                product.tag.toLowerCase() === "rare" ? "rare" : ""
              }`}
            >
              {product.tag}
            </span>
          )}
          <h3 className="coin-title">{product.title}</h3>
          <p className="coin-meta">{product.description}</p>
          <div className="coin-price">${product.price.toFixed(2)}</div>
          <div className="coin-footer">
            <span className="view-details">View Details</span>
            <button className="add-to-cart" onClick={handleAddToCart}>
              <i className="fas fa-shopping-cart"></i> Add
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
