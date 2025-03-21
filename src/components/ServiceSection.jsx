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
  {
    id: 3,
    title: "Appraisal",
    description:
      "Professional appraisal services for insurance, estate planning, or personal knowledge.",
    icon: "fas fa-graduation-cap",
  },
];

const ServiceSection = () => {
  const svgArr = [
    // Authentication - Added explicit width, height, and preserved aspect ratio
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="40px" height="40px" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(60, 60)">
        <g fill="#333333" transform="scale(1.1)">
          <circle cx="-10" cy="-10" r="25" fill="none" stroke="#333333" stroke-width="6"/>
          <path d="M 8,8 L 30,30" stroke="#333333" stroke-width="6" stroke-linecap="round"/>
          <circle cx="-10" cy="-10" r="15" fill="none" stroke="#333333" stroke-width="3"/>
          <path d="M -16,-10 L -4,-10 M -10,-16 L -10,-4" stroke="#333333" stroke-width="3"/>
        </g>
      </g>
    </svg>,
    
    // Buy & Sell - Already has width and height
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
    </svg>,
    // Appraisal - Added explicit width, height, and preserved aspect ratio
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="40px" height="40px" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(60, 60)">
        <g fill="#333333" transform="scale(1.1)">
          <rect x="-25" y="-30" width="50" height="60" rx="3" fill="none" stroke="#333333" stroke-width="4"/>
          <line x1="-15" y1="-15" x2="15" y2="-15" stroke="#333333" stroke-width="3"/>
          <line x1="-15" y1="0" x2="15" y2="0" stroke="#333333" stroke-width="3"/>
          <line x1="-15" y1="15" x2="5" y2="15" stroke="#333333" stroke-width="3"/>
          <circle cx="20" cy="15" r="12" fill="none" stroke="#333333" stroke-width="3"/>
          <path d="M 17,15 L 23,15" stroke="#333333" stroke-width="2"/>
        </g>
      </g>
    </svg>
  ];
  
  return (
    <section className="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>

        <div className="services-container">
          {services.map((service, index) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                {svgArr[index]}
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