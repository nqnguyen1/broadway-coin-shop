// components/CategorySection.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/CategorySection.css";
import placeholder from "../assets/images/placeholder.jpg";


const categories = [
  {
    id: 1,
    name: "US Coins",
    image: "../assets/images/placeholder.jpg",
    slug: "us-coins",
  },
  {
    id: 2,
    name: "World Coins",
    image: "../assets/images/placeholder.jpg",
    slug: "world-coins",
  },
  {
    id: 3,
    name: "Bullion",
    image: "../assets/images/placeholder.jpg",
    slug: "bullion",
  },
  {
    id: 4,
    name: "Currency",
    image: "../assets/images/placeholder.jpg",
    slug: "currency",
  },

];

const CategorySection = () => {
  return (
    <section className="featured">
      <div className="container">
        <div className="section-title">
          <h2>
            Browse <span>Categories</span>
          </h2>
        </div>

        <div className="featured-categories">
          {categories.map((category) => (
            <Link
              to={`/${category.slug}`}
              key={category.id}
              className="category-card"
            >
              <img
                src= "http://broadwaycoin.com/images/placeholder.jpg"
                alt={category.name}
                className="category-img"

              />
              <div className="category-name">{category.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;