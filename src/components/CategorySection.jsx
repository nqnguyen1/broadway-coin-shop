// components/CategorySection.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/CategorySection.css";

const categories = [
  {
    id: 1,
    name: "Gold Coins",
    image: "/images/categories/gold-coins.jpg",
    slug: "gold-coins",
  },
  {
    id: 2,
    name: "Silver Coins",
    image: "/images/categories/silver-coins.jpg",
    slug: "silver-coins",
  },
  {
    id: 3,
    name: "Rare Stamps",
    image: "/images/categories/rare-stamps.jpg",
    slug: "rare-stamps",
  },
  {
    id: 4,
    name: "Commemorative",
    image: "/images/categories/commemorative.jpg",
    slug: "commemorative",
  },
  {
    id: 5,
    name: "Ancient Coins",
    image: "/images/categories/ancient-coins.jpg",
    slug: "ancient-coins",
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
              to={`/shop?category=${category.slug}`}
              key={category.id}
              className="category-card"
            >
              <img
                src={category.image}
                alt={category.name}
                className="category-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/placeholder.jpg";
                }}
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
