// pages/HomePage.js
import React from "react";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import ServiceSection from "../components/ServiceSection";
import TestimonialSection from "../components/TestimonialSection";
import NewsletterSection from "../components/NewsletterSection";

const HomePage = ({ addToCart }) => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts addToCart={addToCart} />
      <ServiceSection />
      <TestimonialSection />
      <NewsletterSection />
    </>
  );
};

export default HomePage;
