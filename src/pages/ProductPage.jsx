// pages/ProductPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import '../styles/ProductPage.css';



const ProductPage = ({ allProducts}) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the product by ID or inventory number
    const productData = allProducts.find(p => p.Inv_NUM === id || p.id === id)
    
    if (productData) {
      setProduct(productData);
      
      // Find related products (same category or type)
      const related = allProducts.filter(p => {
        if (p.Inv_NUM === productData.Inv_NUM || p.id === productData.id) {
          return false; // Exclude the current product
        }
        if (productData.category && p.category === productData.category) {
          return true;
        }
        if (productData.Type && p.Type === productData.Type) {
          return true;
        }
        return false;
      }).slice(0, 4);
      
      setRelatedProducts(related);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [id]);
  

  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  if (loading) {
    return (
      <div className="product-page loading">
        <div className="container">
          <div className="loading-spinner">
            <i className="fas fa-spinner fa-spin"></i>
            <p>Loading product details...</p>
          </div>
        </div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="product-page error">
        <div className="container">
          <div className="error-message">
            <i className="fas fa-exclamation-circle"></i>
            <h2>Product Not Found</h2>
            <p>The product you're looking for doesn't exist or has been removed.</p>
            <Link to="/shop" className="btn">Return to Shop</Link>
          </div>
        </div>
      </div>
    );
  }
  
  // Determine if the product is in stock
  const inStock = product.Status === "Available" || product.inStock;
  
  // Format product details for display
  const productTitle = product.Type || product.title || '';
  const productDate = product.Date || '';
  const productDescription = product.description;
  const productPrice = parseFloat(product.Price || product.price);
  const productCategory = {
    'us-coins': 'US Coins',
    'world-coins': 'World Coins',
    'bullion': 'Bullion',
    'currency': 'Currency'
  }[product.category] || 'Collectible';
  
  return (
    <div className="product-page">
      <div className="container">
        <div className="breadcrumbs">
          <Link to="/">Home</Link> / 
          <Link to="/shop">Shop</Link> / 
          <Link to={`/shop?category=${product.category}`}>
            {productCategory}
          </Link> / 
          <span>{productTitle} {productDate}</span>
        </div>
        
        <div className="product-detail">
          <div className="product-images">
            <div className="main-image">
              <img 
                src={product.image} 
                alt={productTitle} 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/placeholder.jpg';
                }}
              />
            </div>
          </div>
          
          <div className="product-info">
            <h1 className="product-title">
              {productDate && <span className="product-date">{productDate}</span>}
              {' '}
              {productTitle}
            </h1>
            
            <div className="product-meta">
              {product.Grade && (
                <div className="meta-item">
                  <span className="meta-label">Grade:</span>
                  <span className="meta-value">{product.Grade}</span>
                </div>
              )}
              
              {product.Denomination && (
                <div className="meta-item">
                  <span className="meta-label">Denomination:</span>
                  <span className="meta-value">{product.Denomination}</span>
                </div>
              )}
              
              {inStock ? (
                <span className="in-stock"><i className="fas fa-check-circle"></i> In Stock</span>
              ) : (
                <span className="out-of-stock"><i className="fas fa-times-circle"></i> Out of Stock</span>
              )}
            </div>
            
            <div className="product-price">${productPrice.toFixed(2)}</div>
            
            <div className="product-description">
              {productDescription}
            </div>
            

            
            <div className="product-meta-info">
              <p><strong>Inventory #:</strong> {product.Inv_NUM || product.id}</p>
              <p><strong>Category:</strong> {productCategory}</p>
              {product.Country && <p><strong>Country:</strong> {product.Country}</p>}
            </div>
          </div>
        </div>
        
        {relatedProducts.length > 0 && (
          <div className="related-products">
            <h2>Related Products</h2>
            <div className="products-grid">
              {relatedProducts.map(relatedProduct => (
                <ProductCard 
                  key={relatedProduct.Inv_NUM || relatedProduct.id} 
                  product={{
                    id: relatedProduct.Inv_NUM || relatedProduct.id,
                    title: `${relatedProduct.Date || ''} ${relatedProduct.Type || relatedProduct.title || ''}`,
                    description: relatedProduct.description || `${relatedProduct.Denomination || ''} ${relatedProduct.Grade || ''}`,
                    price: parseFloat(relatedProduct.Price || relatedProduct.price),
                    image: relatedProduct.image,
                    category: relatedProduct.category,
                    inStock: relatedProduct.Status === "Available" || relatedProduct.inStock
                  }}
             
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;