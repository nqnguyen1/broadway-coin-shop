// components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/images/broadway-logo.png";
import "../styles/Header.css";

const Header = ({ cartItemsCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <Link to="/">
            <img
              src={logoImage}
              alt="Broadway Coin & Stamp"
              className="logo-img"
            />
          </Link>
        </div>
        <nav>
          <div className="menu-icon" onClick={toggleMenu}>
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>

          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/shop?category=coins"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                Coins
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/shop?category=stamps"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                Stamps
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="search-cart">
            <Link to="/search">
              <i className="fas fa-search"></i>
            </Link>
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
              {cartItemsCount > 0 && (
                <span className="cart-count">{cartItemsCount}</span>
              )}
            </Link>
            <Link to="/account">
              <i className="fas fa-user"></i>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
