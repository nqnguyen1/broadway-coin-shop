// components/HeroSection.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>
          Rare and Collectible <span>Coins & bullion</span>
        </h1>
        <p>
          Discover our curated collection of numismatic treasures and philatelic
          rarities. From ancient coins to modern stamps and bullion, find your next valuable
          piece at Broadway.
        </p>
        <div className="hero-btns">
          <Link to="/shop" className="btn">
            Shop Collection
          </Link>
          <Link to="/services" className="btn btn-outline">
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
