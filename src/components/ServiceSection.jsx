// components/ServiceSection.js
import React from "react";
import "../styles/ServiceSection.css";

const services = [
  {
    id: 1,
    title: "Authentication",
    description:
      "Expert verification and grading services to authenticate your coins and determine their true value.",
    icon: "fas fa-certificate",
  },
  {
    id: 2,
    title: "Buy & Sell",
    description:
      "Fair market prices whether you're looking to add to your collection or sell your numismatic treasures.",
    icon: "fas fa-exchange-alt",
  },
  // {
  //   id: 3,
  //   title: "Secure Storage",
  //   description:
  //     "Climate-controlled storage solutions to preserve the condition and value of your rare coins.",
  //   icon: "fas fa-shield-alt",
  // },
  {
    id: 3,
    title: "Appraisal",
    description:
      "Professional appraisal services for insurance, estate planning, or personal knowledge.",
    icon: "fas fa-graduation-cap",
  },
];

const ServiceSection = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>

        <div className="services-container">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
