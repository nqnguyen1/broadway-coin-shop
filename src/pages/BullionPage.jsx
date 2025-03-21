// pages/BullionPage.js
import React, { useState, useEffect } from 'react';

import ProductCard from '../components/ProductCard';
import '../styles/CategoryPage.css';

const BullionPage = ({  allProducts  }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortOption, setSortOption] = useState('featured');
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    setLoading(true);
    
    // Filter bullion products from all products
    const bullionItems = allProducts.filter(product => 
      product.category === 'bullion' || 
      (product.Type && product.Type.toLowerCase().includes('bullion'))
    );
    
    setProducts(bullionItems);
    setLoading(false);
  }, [allProducts]);
  
  // Filter products when filters change
  useEffect(() => {
    let result = [...products];
    
    // Price range filter
    result = result.filter(product => {
      const price = parseFloat(product.Price || product.price);
      return price >= priceRange[0] && price <= priceRange[1];
    });
    
    // Search term filter
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      result = result.filter(product => {
        const title = product.Type || product.title || '';
        const date = product.Date || '';
        const desc = product.description || '';
        return (
          title.toLowerCase().includes(search) || 
          date.toLowerCase().includes(search) ||
          desc.toLowerCase().includes(search)
        );
      });
    }
    
    // Sort
    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => parseFloat(a.Price || a.price) - parseFloat(b.Price || b.price));
        break;
      case 'price-high':
        result.sort((a, b) => parseFloat(b.Price || b.price) - parseFloat(a.Price || a.price));
        break;
      case 'newest':
        result.sort((a, b) => {
          if (!a.Date && !b.Date) return 0;
          if (!a.Date) return 1;
          if (!b.Date) return -1;
          return b.Date.localeCompare(a.Date);
        });
        break;
      case 'alphabetical':
        result.sort((a, b) => {
          const titleA = a.Type || a.title || '';
          const titleB = b.Type || b.title || '';
          return titleA.localeCompare(titleB);
        });
        break;
      default:
        // 'featured' - no specific sort, use default order
        break;
    }
    
    setFilteredProducts(result);
  }, [products, priceRange, sortOption, searchTerm]);
  
  const handlePriceRangeChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = Number(e.target.value);
    setPriceRange(newRange);
  };
  
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const clearFilters = () => {
    setPriceRange([0, 5000]);
    setSortOption('featured');
    setSearchTerm('');
  };
  
  if (loading) {
    return (
      <div className="category-page loading">
        <div className="container">
          <div className="loading-spinner">
            <i className="fas fa-spinner fa-spin"></i>
            <p>Loading products...</p>
          </div>
        </div>
      </div>
    );
  }
  
  // Find maximum price for the range slider
  const maxPrice = Math.max(...products.map(p => parseFloat(p.Price || p.price) || 0)) + 100;
  
  return (
    <div className="category-page">
      <div className="category-hero">
        <div className="container">
          <h1>Bullion</h1>
          <p>Explore our selection of precious metal bullion coins and bars</p>
        </div>
      </div>
      
      <div className="container">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search bullion products..." 
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        
        <div className="category-content">
          <aside className="category-sidebar">
            <div className="filter-section">
              <h3>Price Range</h3>
              <div className="price-range-inputs">
                <div className="price-input">
                  <label htmlFor="min-price">Min: ${priceRange[0]}</label>
                  <input 
                    type="range" 
                    id="min-price" 
                    min="0" 
                    max={maxPrice} 
                    value={priceRange[0]} 
                    onChange={(e) => handlePriceRangeChange(e, 0)} 
                  />
                </div>
                <div className="price-input">
                  <label htmlFor="max-price">Max: ${priceRange[1]}</label>
                  <input 
                    type="range" 
                    id="max-price" 
                    min={priceRange[0]} 
                    max={maxPrice} 
                    value={priceRange[1]} 
                    onChange={(e) => handlePriceRangeChange(e, 1)} 
                  />
                </div>
              </div>
            </div>
            
            <button className="btn btn-outline clear-filters" onClick={clearFilters}>
              Clear Filters
            </button>
          </aside>
          
          <div className="category-products">
            <div className="category-header">
              <div className="product-count">
                {filteredProducts.length} products found
              </div>
              
              <div className="sort-options">
                <label htmlFor="sort-select">Sort by:</label>
                <select 
                  id="sort-select" 
                  value={sortOption} 
                  onChange={handleSortChange}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                  <option value="alphabetical">Alphabetical</option>
                </select>
              </div>
            </div>
            
            <div className="products-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <ProductCard 
                    key={product.Inv_NUM || product.id} 
                    product={{
                      id: product.Inv_NUM || product.id,
                      title: `${product.Date || ''} ${product.Type || product.title || ''}`,
                      description: product.description || `${product.Denomination || ''} ${product.Grade || ''}`,
                      price: parseFloat(product.Price || product.price),
                      image: product.image,
                      category: 'bullion',
                      inStock: product.Status === "Available" || product.inStock
                    }}
             
                  />
                ))
              ) : (
                <div className="no-products">
                  <p>No products found matching your criteria.</p>
                  <button 
                    className="btn" 
                    onClick={clearFilters}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BullionPage;