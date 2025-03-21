// components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "../styles/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faShoppingCart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = React.memo(({ cartItemsCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Close category dropdown when toggling menu
    if (categoryDropdown) setCategoryDropdown(false);
  };

  const toggleCategoryDropdown = (e) => {
    e.preventDefault();
    setCategoryDropdown(!categoryDropdown);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setCategoryDropdown(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
        
        <nav className={menuOpen ? "active" : ""}>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a 
                href="#" 
                className="nav-link dropdown-toggle"
                onClick={toggleCategoryDropdown}
              >
                Shop <i className={`fas ${categoryDropdown ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
              </a>
              <ul className={`dropdown-menu ${categoryDropdown ? 'active' : ''}`}>
              <li>
                  <Link to="/shop" className="dropdown-item" onClick={handleLinkClick}>
                    All Products
                  </Link>
                </li>
                <li>
                  <Link to="/us-coins" className="dropdown-item" onClick={handleLinkClick}>
                    US Coins
                  </Link>
                </li>
                <li>
                  <Link to="/world-coins" className="dropdown-item" onClick={handleLinkClick}>
                    World Coins
                  </Link>
                </li>
                <li>
                  <Link to="/bullion" className="dropdown-item" onClick={handleLinkClick}>
                    Bullion
                  </Link>
                </li>
                <li>
                  <Link to="/currency" className="dropdown-item" onClick={handleLinkClick}>
                    Currency
                  </Link>
                </li>

              </ul>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-link"
                onClick={handleLinkClick}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link"
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
          
         
        </nav>
      </div>
    </header>
  );
});

export default Header;