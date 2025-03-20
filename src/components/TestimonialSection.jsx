// components/TestimonialSection.js
import React from "react";
import "../styles/TestimonialSection.css";

const testimonials = [
  {
    id: 1,
    text: "I've been collecting coins for over 20 years, and Broadway Coin & Stamp has consistently provided the most authentic and fairly priced pieces. Their expertise and customer service are unmatched.",
    author: "James Miller",
    position: "Coin Collector",
    image: "/images/testimonials/james.jpg",
  },
  {
    id: 2,
    text: "As a philatelist, finding rare stamps can be challenging. Broadway's extensive collection and knowledgeable staff have made building my collection a joy. I highly recommend them to all stamp enthusiasts.",
    author: "Sarah Thompson",
    position: "Stamp Collector",
    image: "/images/testimonials/sarah.jpg",
  },
  {
    id: 3,
    text: "The appraisal service at Broadway Coin & Stamp is exceptional. Their detailed assessment helped me understand the true value of my inherited collection. Professional, thorough, and trustworthy.",
    author: "Robert Chen",
    position: "Estate Collector",
    image: "/images/testimonials/robert.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>
            Customer <span>Testimonials</span>
          </h2>
        </div>

        <div className="testimonials-container">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="author-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/placeholder.jpg";
                  }}
                />
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
