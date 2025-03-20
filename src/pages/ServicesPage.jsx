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
              
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Secure Storage Solutions</h3>
                <p>
                  Protect your valuable collection with our state-of-the-art storage facilities. We offer climate-controlled, 
                  secure storage options with comprehensive insurance coverage for collections of all sizes.
                </p>
                <ul className="service-details">
                  <li>Climate-controlled environment</li>
                  <li>24/7 security monitoring</li>
                  <li>Individual storage options</li>
                  <li>Fully insured and bonded facility</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3>Appraisal Services</h3>
                <p>
                  Our certified appraisers provide detailed valuations for insurance, estate planning, or market knowledge purposes. 
                  Each appraisal includes comprehensive documentation of your collection's current market value.
                </p>
                <ul className="service-details">
                  <li>Insurance appraisals</li>
                  <li>Estate valuation</li>
                  <li>Investment portfolio assessment</li>
                  <li>Detailed written appraisal reports</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-search-dollar"></i>
                </div>
                <h3>Investment Consulting</h3>
                <p>
                  Make informed decisions about numismatic and philatelic investments with guidance from our market experts. 
                  We help collectors and investors identify opportunities that align with their investment goals.
                </p>
                <ul className="service-details">
                  <li>Market trend analysis</li>
                  <li>Portfolio diversification advice</li>
                  <li>Acquisition strategies</li>
                  <li>Long-term investment planning</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-book-open"></i>
                </div>
                <h3>Educational Resources</h3>
                <p>
                  Expand your knowledge with our educational programs, workshops, and reference materials. 
                  We believe informed collectors make better decisions and enjoy the hobby more deeply.
                </p>
                <ul className="service-details">
                  <li>Collector workshops and seminars</li>
                  <li>Reference library access</li>
                  <li>One-on-one collecting consultations</li>
                  <li>Newsletter with market insights</li>
                </ul>
              </div>
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
          
          {/* Service Rates Section */}
          <section className="service-rates">
            <h2>Service Rates</h2>
            <p className="rates-intro">
              Our service rates are competitive and transparent. Below are our standard rates for common services. 
              For complex collections or specialized services, please contact us for a custom quote.
            </p>
            
            <div className="rates-tables">
              <div className="rate-table">
                <h3>Authentication & Grading</h3>
                <table>
                  <tbody>
                    <tr>
                      <th>Service</th>
                      <th>Rate</th>
                    </tr>
                    <tr>
                      <td>Basic Authentication</td>
                      <td>$25 per item</td>
                    </tr>
                    <tr>
                      <td>Authentication with Grading</td>
                      <td>$45 per item</td>
                    </tr>
                    <tr>
                      <td>Expedited Service</td>
                      <td>Additional $20 per item</td>
                    </tr>
                    <tr>
                      <td>Third-Party Submission</td>
                      <td>$15 handling fee + grading costs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="rate-table">
                <h3>Appraisal Services</h3>
                <table>
                  <tbody>
                    <tr>
                      <th>Service</th>
                      <th>Rate</th>
                    </tr>
                    <tr>
                      <td>Individual Item Appraisal</td>
                      <td>$50 per item</td>
                    </tr>
                    <tr>
                      <td>Collection Appraisal (up to 50 items)</td>
                      <td>$200 flat fee</td>
                    </tr>
                    <tr>
                      <td>Collection Appraisal (51+ items)</td>
                      <td>$200 + $3 per additional item</td>
                    </tr>
                    <tr>
                      <td>Written Appraisal Report</td>
                      <td>$50 additional fee</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="rate-table">
                <h3>Storage Solutions</h3>
                <table>
                  <tbody>
                    <tr>
                      <th>Service</th>
                      <th>Rate</th>
                    </tr>
                    <tr>
                      <td>Small Safe Deposit Box</td>
                      <td>$25 per month</td>
                    </tr>
                    <tr>
                      <td>Medium Safe Deposit Box</td>
                      <td>$40 per month</td>
                    </tr>
                    <tr>
                      <td>Large Safe Deposit Box</td>
                      <td>$60 per month</td>
                    </tr>
                    <tr>
                      <td>Collection Storage (insured)</td>
                      <td>0.5% of appraised value per year</td>
                    </tr>
                  </tbody>
                </table>
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