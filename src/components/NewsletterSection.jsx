// components/NewsletterSection.js
import React, { useState } from "react";
import "../styles/NewsletterSection.css";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // In a real app, you would send this to your backend
    console.log("Subscribing email:", email);
    setSubscribed(true);
    setError("");
    setEmail("");

    // Reset the success message after 5 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <h2>Subscribe to Our Newsletter</h2>
          <p>
            Stay updated with our newest acquisitions, exclusive offers, and
            numismatic insights.
          </p>

          {subscribed ? (
            <div className="success-message">
              <i className="fas fa-check-circle"></i> Thank you for subscribing!
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="newsletter-input"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          )}

          {error && <div className="error-message">{error}</div>}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
