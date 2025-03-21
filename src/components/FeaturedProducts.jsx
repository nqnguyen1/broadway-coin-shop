// components/FeaturedProducts.js
import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import "../styles/FeaturedProducts.css";



const FeaturedProducts = ({allProducts}) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  useEffect(() => {
    const feature = allProducts.filter((product) => product.featured);
    setFeaturedProducts(feature);
  }, [allProducts]);
  return (
    <section className="featured-coins">
      <div className="container">
        <div className="section-title">
          <h2>
            Featured <span>Collection</span>
          </h2>
        </div>

        <div className="coins-grid">
          {featuredProducts.map((product) => (
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
