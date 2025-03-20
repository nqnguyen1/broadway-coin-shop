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
          <p>Serving collectors and numismatic enthusiasts for over 45 years</p>
        </div>
      </div>

      <div className="container">
        <div className="about-content">
          <div className="about-section">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Broadway Coin & Stamp was founded in 1975 by numismatic expert
                James Broadway, whose passion for rare coins and stamps began as
                a childhood hobby and transformed into a lifelong commitment to
                the preservation and appreciation of these historical treasures.
              </p>
              <p>
                Starting with a small shop in downtown New York, our collection
                and reputation have grown over the decades. Today, we are proud
                to be one of the most trusted sources for authentic coins and
                stamps for collectors, investors, and enthusiasts around the
                world.
              </p>
            </div>
            <div className="about-image">
              <img
                src="/images/about/store-front.jpg"
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
                We believe that coins and stamps are not just collectibles but
                tangible connections to history, art, and culture. Through
                meticulous authentication, expert curation, and exceptional
                customer service, we aim to be your trusted partner in building
                a collection that reflects your passion and investment goals.
              </p>
            </div>
            <div className="about-image">
              <img
                src="/images/about/authentication.jpg"
                alt="Authentication Process"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/placeholder.jpg";
                }}
              />
            </div>
          </div>

          <div className="team-section">
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
          </div>

          <div className="values-section">
            <h2>Our Values</h2>

            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3>Authenticity</h3>
                <p>
                  Every item in our inventory undergoes rigorous authentication
                  and grading to ensure its provenance and value.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3>Integrity</h3>
                <p>
                  We believe in transparent business practices and fair pricing
                  for both buyers and sellers.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-book"></i>
                </div>
                <h3>Education</h3>
                <p>
                  We're committed to educating collectors about numismatics and
                  philately through resources and events.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-users"></i>
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
