// components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="footer-about">
            <h3 className="footer-logo">
              Broadway <span>Coin & Stamp</span>
            </h3>
            <p>
              We specialize in rare coins and stamps, offering expertly curated
              collections for both passionate collectors and investors since
              1975.
            </p>
            <div className="social-links">
              <a
                href="https://facebook.com"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="footer-links-container">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li className="footer-link">
                <Link to="/">Home</Link>
              </li>
              <li className="footer-link">
                <Link to="/shop?category=coins">Coins</Link>
              </li>
              <li className="footer-link">
                <Link to="/shop?category=stamps">Stamps</Link>
              </li>
              <li className="footer-link">
                <Link to="/about">About Us</Link>
              </li>
              <li className="footer-link">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links-container">
            <h3 className="footer-title">Customer Service</h3>
            <ul className="footer-links">
              <li className="footer-link">
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="footer-link">
                <Link to="/shipping">Shipping</Link>
              </li>
              <li className="footer-link">
                <Link to="/returns">Returns</Link>
              </li>
              <li className="footer-link">
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li className="footer-link">
                <Link to="/terms">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt contact-icon"></i>
              <p>123 Broadway Avenue, New York, NY 10001</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone-alt contact-icon"></i>
              <p>+1 (212) 555-1234</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope contact-icon"></i>
              <p>info@broadwaycoin.com</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock contact-icon"></i>
              <p>Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Broadway Coin & Stamp. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
