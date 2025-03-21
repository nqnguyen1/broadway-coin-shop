// pages/ContactPage.js
import React, { useState } from "react";
import "../styles/ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError("Please fill in all required fields");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setFormError("Please enter a valid email address");
      return;
    }

    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData);

    // Show success message
    setFormSubmitted(true);
    setFormError("");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you. Reach out with any questions about our
            collection or services.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="11" fill="none" stroke="#D4AF37" stroke-width="1.5"/>
  <path d="M12 6c-2.2 0-4 1.8-4 4 0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4zm0 5.5c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5z" fill="#D4AF37"/>
</svg>
              <div className="info-content">
                <h3>Visit Our Store</h3>
                <p>
                473 Broadway
                  <br />
                  El Cajon, CA 92021
                  <br />
                  United States
                </p>
              </div>
            </div>

            <div className="info-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
  <circle cx="250" cy="250" r="200" fill="none" stroke="#dbb540" stroke-width="25"/>
  
  <g transform="translate(125, 125) scale(11)">
    <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" 
          fill="none" 
          stroke="#dbb540" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"/>
  </g>
</svg>
              <div className="info-content">
                <h3>Call Us</h3>
                <p>+1 (619) 440 - 0362</p>
              </div>
            </div>

            <div className="info-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="11" fill="none" stroke="#D4AF37" stroke-width="1.5"/>
  <path d="M17 8H7c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h10c0.6 0 1-0.4 1-1V9c0-0.6-0.4-1-1-1z" fill="none" stroke="#D4AF37" stroke-width="1.5"/>
  <path d="M17 9l-5 3.5L7 9" fill="none" stroke="#D4AF37" stroke-width="1.5"/>
</svg>
              <div className="info-content">
                <h3>Email Us</h3>
                <p>greg@broadwaycoin.com</p>
              </div>
            </div>

            <div className="info-item">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              <div className="info-content">
                <h3>Opening Hours</h3>
                <p>Mon-Sat: 9am - 5pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="social-links">
              <h3>Connect With Us</h3>
              <div className="social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="11" fill="#4e4e4e"/>
  <path d="M13.5 8.5h2v-2h-2c-1.7 0-3 1.3-3 3v1.5h-2v2h2v5h2v-5h2l0.5-2h-2.5V9.5c0-0.6 0.4-1 1-1z" fill="white"/>
</svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="11" fill="#4e4e4e"/>
  <path d="M18 8.6c-0.5 0.2-1 0.4-1.5 0.4 0.5-0.3 1-0.8 1.2-1.4-0.5 0.3-1 0.5-1.6 0.6-0.5-0.5-1.1-0.8-1.8-0.8-1.4 0-2.5 1.1-2.5 2.5 0 0.2 0 0.4 0.1 0.6-2.1-0.1-3.9-1.1-5.1-2.6-0.2 0.4-0.3 0.8-0.3 1.3 0 0.9 0.4 1.6 1.1 2.1-0.4 0-0.8-0.1-1.1-0.3v0c0 1.2 0.9 2.2 2 2.4-0.2 0.1-0.4 0.1-0.7 0.1-0.2 0-0.3 0-0.5-0.1 0.3 1 1.2 1.7 2.3 1.7-0.8 0.7-1.9 1-3 1-0.2 0-0.4 0-0.6 0 1.1 0.7 2.4 1.1 3.7 1.1 4.5 0 6.9-3.7 6.9-6.9v-0.3c0.5-0.3 0.9-0.8 1.2-1.3z" fill="white"/>
</svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="11" fill="#4e4e4e"/>
  <circle cx="12" cy="12" r="3" fill="none" stroke="white" stroke-width="1.5"/>
  <rect x="7" y="7" width="10" height="10" rx="2.5" ry="2.5" fill="none" stroke="white" stroke-width="1.5"/>
  <circle cx="16" cy="8" r="1" fill="white"/>
</svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="11" fill="#4e4e4e"/>
  <path d="M8 10v6.5h2.5V10H8zm1.2-3.5c-0.8 0-1.4 0.6-1.4 1.4s0.6 1.4 1.4 1.4 1.4-0.6 1.4-1.4-0.6-1.4-1.4-1.4zM13.5 10v6.5H16V13c0-1.4 1.6-1.5 1.6 0v3.5H20v-4c0-3-3.3-2.9-3.8-1.4V10h-2.7z" fill="white"/>
</svg>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send Us a Message</h2>

            {formSubmitted ? (
              <div className="form-success">
                <i className="fas fa-check-circle"></i>
                <p>
                  Thank you for your message! We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {formError && <div className="form-error">{formError}</div>}

                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn submit-btn">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

        
      
    </div>
  );
};

export default ContactPage;
