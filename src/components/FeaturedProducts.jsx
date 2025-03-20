// components/FeaturedProducts.js
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import "../styles/FeaturedProducts.css";

// Sample featured products data
const featuredProducts = [
  {
    id: 1,
    title: "1933 Gold Double Eagle",
    description: "Condition: MS-63 · Gold",
    price: 2995.0,
    image: "/images/products/gold-double-eagle.jpg",
    tag: "Rare",
    category: "gold-coins",
  },
  {
    id: 2,
    title: "Inverted Jenny Stamp",
    description: "1918 · Very Fine Condition",
    price: 4250.0,
    image: "/images/products/inverted-jenny.jpg",
    tag: "Premium",
    category: "rare-stamps",
  },
  {
    id: 3,
    title: "1894-S Barber Dime",
    description: "Condition: F-12 · Silver",
    price: 1875.0,
    image: "/images/products/barber-dime.jpg",
    tag: "Rare",
    category: "silver-coins",
  },
  {
    id: 4,
    title: "1885 Morgan Silver Dollar",
    description: "Condition: AU-58 · Silver",
    price: 149.0,
    image: "/images/products/morgan-dollar.jpg",
    tag: "Classic",
    category: "silver-coins",
  },
];

const FeaturedProducts = ({ addToCart }) => {
  return (
    <section className="featured-coins">
      <div className="container">
        <div className="section-title">
          <h2>
            Featured <span>Collection</span>
          </h2>
        </div>

        <div className="coins-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>

        <div className="view-all-container">
          <Link to="/shop" className="btn">
            View All Items
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
