// pages/AboutPage.js
import React from "react";
import { Link } from "react-router-dom";
import TestimonialSection from "../components/TestimonialSection";
import "../styles/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>About Broadway Coin & Stamp</h1>
          <p>Serving collectors and numismatic enthusiasts for over 33 years</p>
        </div>
      </div>

      <div className="container">
        <div className="about-content">
          <div className="about-section">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
              Broadway Coin and Stamp Exchange has been located in the same Shopping center for over 33 year. We buy Sell and Trade, US and World wide Coins, Bullions, Medals, Tokens, Paper Money and Stamps. We also offer Appraisals, in store or at your Site. Call us, or if local come in and see us.
              </p>
              <p>
              With years of experience in the precious metals industry, we provide trustworthy services for buying and selling gold and collectible items. Our knowledgeable staff is always available to answer your questions and help you make informed decisions about your investments. Whether you're looking to expand your collection or sell your items, we offer competitive rates and exceptional customer service.
              </p>
            </div>
            <div className="about-image">
              <img
                src="http://broadwaycoin.com/images/placeholder.jpg"
                alt="Broadway Coin & Stamp Store"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/placeholder.jpg";
                }}
              />
            </div>
          </div>

          <div className="about-section reverse">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                At Broadway Coin & Stamp, our mission is to preserve numismatic
                history while offering collectors access to authentic,
                high-quality pieces that bring both pleasure and value to their
                collections.
              </p>
              <p>
              We are committed to offering the highest quality gold, bullion, and stamps. Our collection features a wide variety of items, including rare coins and bullion bars sourced from reputable mints. We take pride in offering products that meet rigorous standards for authenticity and purity.
              </p>
            </div>
            <div className="about-image">
              <img
                src="http://broadwaycoin.com/images/placeholder.jpg"
                alt="Authentication Process"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/placeholder.jpg";
                }}
              />
            </div>
          </div>

          {/* <div className="team-section">
            <h2>Meet Our Team</h2>
            <p className="team-intro">
              Our team consists of passionate experts with decades of combined
              experience in numismatics and philately.
            </p>

            <div className="team-members">
              <div className="team-member">
                <img
                  src="/images/about/team-1.jpg"
                  alt="Robert Broadway"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/placeholder.jpg";
                  }}
                />
                <h3>Robert Broadway</h3>
                <p className="position">CEO & Head Numismatist</p>
                <p className="bio">
                  With over 30 years of experience, Robert has been a leading
                  voice in the numismatic community and carries on the tradition
                  of excellence started by his father.
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/images/about/team-2.jpg"
                  alt="Sarah Chen"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/placeholder.jpg";
                  }}
                />
                <h3>Sarah Chen</h3>
                <p className="position">Head of Authentication</p>
                <p className="bio">
                  Sarah is our authentication expert with specialized knowledge
                  in American and European coinage. Her meticulous eye for
                  detail has made her renowned in the industry.
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/images/about/team-3.jpg"
                  alt="Michael Goldstein"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/placeholder.jpg";
                  }}
                />
                <h3>Michael Goldstein</h3>
                <p className="position">Philately Expert</p>
                <p className="bio">
                  Michael brings 25 years of experience in rare stamps,
                  specializing in 19th and 20th century American and British
                  Commonwealth issues.
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/images/about/team-4.jpg"
                  alt="Elizabeth Rodriguez"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/placeholder.jpg";
                  }}
                />
                <h3>Elizabeth Rodriguez</h3>
                <p className="position">Customer Relations Director</p>
                <p className="bio">
                  Elizabeth ensures our clients receive personalized service and
                  expert guidance whether building a collection or making an
                  investment.
                </p>
              </div>
            </div>
          </div> */}

          <div className="values-section">
            <h2>Our Values</h2>

            <div className="values-grid">
              <div className="value-card">
              <div className="value-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" fill="#E0B73B"/>
  
  <path d="M 30,50 L 45,65 L 70,35" fill="none" stroke="#333333" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
           </div>
                <h3>Authenticity</h3>
                <p>
                  Every item in our inventory undergoes rigorous authentication
                  and grading to ensure its provenance and value.
                </p>
              </div>

              <div className="value-card">
              <div className="value-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" fill="#E0B73B"/>
  
  <path d="M 50,20 L 30,28 C 30,48 38,65 50,77 C 62,65 70,48 70,28 L 50,20 Z" fill="none" stroke="#333333" stroke-width="5"/>
</svg>
</div>
                <h3>Integrity</h3>
                <p>
                  We believe in transparent business practices and fair pricing
                  for both buyers and sellers.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" fill="#E0B73B"/>
  
  <path d="M 20,45 L 50,30 L 80,45 L 50,60 Z" fill="#333333"/>
  <rect x="48" y="60" width="4" height="15" fill="#333333"/>
  <rect x="40" y="75" width="20" height="3" fill="#333333"/>
</svg>
                </div>
                <h3>Education</h3>
                <p>
                  We're committed to educating collectors about numismatics and
                  philately through resources and events.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" fill="#E0B73B"/>
  
 
  <circle cx="50" cy="35" r="8" fill="#333333"/>
  <path d="M 50,43 L 50,65" stroke="#333333" stroke-width="4" stroke-linecap="round"/>
  
  <circle cx="30" cy="40" r="7" fill="#333333"/>
  <path d="M 30,47 L 30,65" stroke="#333333" stroke-width="3.5" stroke-linecap="round"/>
  
  <circle cx="70" cy="40" r="7" fill="#333333"/>
  <path d="M 70,47 L 70,65" stroke="#333333" stroke-width="3.5" stroke-linecap="round"/>
  
  <path d="M 36,50 L 64,50" stroke="#333333" stroke-width="3" stroke-linecap="round"/>
  <path d="M 30,55 L 50,55" stroke="#333333" stroke-width="3" stroke-linecap="round"/>
  <path d="M 50,55 L 70,55" stroke="#333333" stroke-width="3" stroke-linecap="round"/>
</svg>
                </div>
                <h3>Community</h3>
                <p>
                  We foster a vibrant community of collectors through clubs,
                  events, and shared enthusiasm for the hobby.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TestimonialSection />

      <div className="container">
        <div className="cta-section">
          <h2>Visit Us Today</h2>
          <p>
            We invite you to visit our store to explore our collection in person
            and speak with our experts.
          </p>
          <Link to="/contact" className="btn">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
