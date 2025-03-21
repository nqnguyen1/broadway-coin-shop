// components/FeaturedProducts.js
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import "../styles/FeaturedProducts.css";

const FeaturedProducts = ({ allProducts }) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  useEffect(() => {
    const feature = allProducts.filter((product) => product.featured);
    setFeaturedProducts(feature);
    
    // Determine items per slide based on window width
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 992) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [allProducts]);

  const totalSlides = Math.ceil(featuredProducts.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 75) {
      // Swipe left
      nextSlide();
    } else if (touchEndX - touchStartX > 75) {
      // Swipe right
      prevSlide();
    }
  };
  
  // Calculate visible products for current slide
  const visibleProducts = featuredProducts.slice(
    currentIndex * itemsPerSlide,
    (currentIndex * itemsPerSlide) + itemsPerSlide
  );

  return (
    <section className="featured-coins">
      <div className="container">
        <div className="section-title">
          <h2>
            Featured <span>Collection</span>
          </h2>
        </div>
        
        <div className="carousel-container">
          <div 
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div className="carousel-slide" key={slideIndex}>
                <div className="coins-grid carousel-grid">
                  {featuredProducts
                    .slice(
                      slideIndex * itemsPerSlide,
                      (slideIndex * itemsPerSlide) + itemsPerSlide
                    )
                    .map((product) => (
                      <ProductCard
                        key={product.Inv_NUM || product.id}
                        product={{
                          id: product.Inv_NUM || product.id,
                          title: `${product.Country ? product.Country + ' · ' : ''} ${product.Date || ''} ${product.Type || product.title || ''}`,
                          description: product.description || `${product.Denomination || ''} ${product.Grade || ''}`,
                          price: parseFloat(product.Price || product.price),
                          image: product.image,
                          category: product.category,
                          inStock: product.Status === "Available" || product.inStock,
                          featured: product.featured,
                        }}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-control carousel-prev" onClick={prevSlide}>
            &lt;
          </button>
          <button className="carousel-control carousel-next" onClick={nextSlide}>
            &gt;
          </button>
          
          <div className="carousel-dots">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="view-all-container">
          <Link to="/shop" className="btn">
            View All Items
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;