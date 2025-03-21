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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="40px" height="40px" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(60, 60)">
        <g fill="#333333" transform="scale(1.1)">
          <circle cx="-10" cy="-10" r="25" fill="none" stroke="#333333" stroke-width="6"/>
          <path d="M 8,8 L 30,30" stroke="#333333" stroke-width="6" stroke-linecap="round"/>
          <circle cx="-10" cy="-10" r="15" fill="none" stroke="#333333" stroke-width="3"/>
          <path d="M -16,-10 L -4,-10 M -10,-16 L -10,-4" stroke="#333333" stroke-width="3"/>
        </g>
      </g>
    </svg>
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
                <svg fill="#333333"   version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 182.026 182.026" xml:space="preserve">
      <g id="SVGRepo_bgCarrier" stroke-width="0"  ></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier" > 
        <g > 
          <g > 
            <path d="M31.859,91.005c0-29.508,21.753-53.977,50.061-58.382v12.881l36.396-22.755L81.913,0v14.222 c-38.388,4.545-68.266,37.218-68.266,76.784c0,27.809,14.789,52.153,36.849,65.778l17.853-11.141 C46.939,136.717,31.859,115.602,31.859,91.005z"></path> 
            <path d="M131.525,25.237l-17.851,11.157c21.418,8.892,36.499,30.012,36.499,54.611c0,29.532-21.749,53.985-50.058,58.396v-12.887 l-36.402,22.764l36.402,22.747v-14.244c38.386-4.53,68.263-37.199,68.263-76.776C168.379,63.207,153.59,38.865,131.525,25.237z"></path> 
            <path d="M95.401,130.802v-9.942c11.204-1.953,17.362-9.362,17.362-18.041c0-8.777-4.679-14.134-16.275-18.241 c-8.298-3.121-11.716-5.166-11.716-8.383c0-2.733,2.045-5.464,8.395-5.464c7.015,0,11.496,2.235,14.041,3.319l2.819-11.023 c-3.203-1.557-7.602-2.919-14.131-3.208v-8.586h-9.562v9.261c-10.42,2.041-16.473,8.777-16.473,17.355 c0,9.458,7.123,14.344,17.568,17.846c7.204,2.441,10.323,4.782,10.323,8.493c0,3.896-3.796,6.041-9.354,6.041 c-6.336,0-12.093-2.048-16.183-4.29l-2.925,11.411c3.693,2.148,10.041,3.899,16.569,4.189v9.264H95.401z"></path> 
          </g> 
        </g> 
      </g>
    </svg>
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