// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import logo from '../assets/images/broadway-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Left Section: Logo and About */}
          <div className="footer-about">
            <img
              src={logo}
              className="logo"
              alt="Broadway Coin & Stamp Exchange Logo"
            />
            <h3>Broadway Coin & Stamp Exchange</h3>
            <p>
              We are specialists in the buying and selling of rare coins, bullion,
              and stamps. Visit us for expert service and competitive prices.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <circle cx="12" cy="12" r="11" fill="#4e4e4e"/>
                  <path d="M13.5 8.5h2v-2h-2c-1.7 0-3 1.3-3 3v1.5h-2v2h2v5h2v-5h2l0.5-2h-2.5V9.5c0-0.6 0.4-1 1-1z" fill="white"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <circle cx="12" cy="12" r="11" fill="#4e4e4e"/>
                  <path d="M18 8.6c-0.5 0.2-1 0.4-1.5 0.4 0.5-0.3 1-0.8 1.2-1.4-0.5 0.3-1 0.5-1.6 0.6-0.5-0.5-1.1-0.8-1.8-0.8-1.4 0-2.5 1.1-2.5 2.5 0 0.2 0 0.4 0.1 0.6-2.1-0.1-3.9-1.1-5.1-2.6-0.2 0.4-0.3 0.8-0.3 1.3 0 0.9 0.4 1.6 1.1 2.1-0.4 0-0.8-0.1-1.1-0.3v0c0 1.2 0.9 2.2 2 2.4-0.2 0.1-0.4 0.1-0.7 0.1-0.2 0-0.3 0-0.5-0.1 0.3 1 1.2 1.7 2.3 1.7-0.8 0.7-1.9 1-3 1-0.2 0-0.4 0-0.6 0 1.1 0.7 2.4 1.1 3.7 1.1 4.5 0 6.9-3.7 6.9-6.9v-0.3c0.5-0.3 0.9-0.8 1.2-1.3z" fill="white"/>
                </svg>
              </a>
              <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <circle cx="12" cy="12" r="11" fill="#4e4e4e"/>
                  <circle cx="12" cy="12" r="3" fill="none" stroke="white" stroke-width="1.5"/>
                  <rect x="7" y="7" width="10" height="10" rx="2.5" ry="2.5" fill="none" stroke="white" stroke-width="1.5"/>
                  <circle cx="16" cy="8" r="1" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Middle Section: Contact Info */}
          <div className="footer-contact">
            <h3 className="footer-special">Contact Info</h3>
            <p className="footer-special">
              <strong>Phone:</strong> <a href="tel:619-440-0362">619-440-0362</a>
            </p>
            <p>
              <strong className="footer-special">Email:</strong>{" "}
              <a href="mailto:greg@broadwaycoin.com">greg@broadwaycoin.com</a>
            </p>
            <p className="footer-special">
              <strong>Business Hours:</strong>
            </p>
            <p>Mon-Sat: 9am - 5pm</p>
            <p>Closed on Sunday</p>
            <p className="footer-special">
              <strong>Address:</strong>
            </p>
            <p>473 Broadway, El Cajon, CA 92021</p>
          </div>
          
          {/* Right Section: Google Map Embed */}
          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.876051998333!2d-116.9604963!3d32.7945725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d956ac9cf5997d%3A0x36a3b519f57f7493!2s473%20Broadway%2C%20El%20Cajon%2C%20CA%2092021%2C%20USA!5e0!3m2!1sen!2sbd!4v1694285584136!5m2!1sen!2sbd"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Broadway Coin & Stamp Map"
            ></iframe>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Broadway Coin & Stamp Exchange. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;