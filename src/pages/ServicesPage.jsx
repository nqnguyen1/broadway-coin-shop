// pages/ServicesPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <div className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Professional numismatic and philatelic services for collectors and investors</p>
        </div>
      </div>
      
      <div className="container">
        <div className="services-content">
          {/* Main Services Section */}
          <section className="main-services">
            <h2>Expert Services We Offer</h2>
            <p className="services-intro">
              At Broadway Coin & Stamp, we provide comprehensive services to meet all your collecting and investing needs. 
              Our team of experts is dedicated to helping you build, maintain, and maximize the value of your collection.
            </p>
            
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <h3>Authentication & Grading</h3>
                <p>
                  Our expert team provides professional authentication and grading services to verify the authenticity and condition of your coins and stamps. 
                  We use industry-standard grading systems and advanced technology to ensure accurate assessments.
                </p>
                <ul className="service-details">
                  <li>Professional coin and stamp authentication</li>
                  <li>Condition assessment and grading</li>
                  <li>Third-party grading submission assistance</li>
                  <li>Counterfeit detection and analysis</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-exchange-alt"></i>
                </div>
                <h3>Buying & Selling</h3>
                <p>
                  Whether you're looking to add to your collection or liquidate all or part of it, we offer fair market prices and transparent transactions. 
                  Our extensive network allows us to find rare pieces and connect sellers with serious buyers.
                </p>
                <ul className="service-details">
                  <li>Fair market offers on all collectibles</li>
                  <li>Consignment sales for valuable items</li>
                  <li>Estate liquidation services</li>
                  <li>Rare coin and stamp acquisition</li>
                </ul>
              </div>
              
              
              
              {/* <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3>Appraisal Services</h3>
                <p>
                Whether you’re exploring a sale or simply seeking expert guidance, our approach keeps the process simple and direct.
                </p>
                <ul className="service-details">
                  <li>Insurance appraisals</li>
                  <li>Estate valuation</li>
                  <li>Investment portfolio assessment</li>
                  <li>Detailed written appraisal reports</li>
                </ul>
              </div> */}
            
              
             
            </div>
          </section>
          
          {/* Service Process Section */}
          <section className="service-process">
            <h2>Our Service Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Initial Consultation</h3>
                <p>We begin with a thorough discussion of your specific needs, whether you're looking to authenticate, appraise, buy, sell, or store coins and stamps.</p>
              </div>
              
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Expert Evaluation</h3>
                <p>Our specialists examine your items using industry-standard methods and specialized equipment to authenticate and assess condition.</p>
              </div>
              
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Detailed Documentation</h3>
                <p>We provide comprehensive documentation of our findings, including authentication certificates, appraisal reports, or purchase offers.</p>
              </div>
              
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Service Completion</h3>
                <p>Depending on the service, we complete the transaction, store your items securely, or return them with all necessary documentation.</p>
              </div>
            </div>
          </section>
          
        </div>
        
        {/* Call to Action */}
        <div className="services-cta">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today to discuss how we can help with your coin and stamp collecting needs.</p>
          <Link to="/contact" className="btn">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;