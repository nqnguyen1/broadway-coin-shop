// pages/WorldCoinsPage.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/CategoryPage.css';

const WorldCoinsPage = ({ allProducts }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState({});
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortOption, setSortOption] = useState('featured');
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    setLoading(true);
    
    // Filter world coins from all products
    const worldCoins = allProducts.filter(product => {
      // Include products specifically marked as world-coins or
      // any coin with a Country field that's not 'US'
      return (product.category === 'world-coins' || 
             (product.Country && product.Country !== 'US'));
    });
    
    setProducts(worldCoins);
    
    // Group products by country and count each country
    const countryMap = {};
    worldCoins.forEach(product => {
      const country = product.Country || 'Unknown';
      if (!countryMap[country]) {
        countryMap[country] = 0;
      }
      countryMap[country] += 1;
    });
    
    setCountries(countryMap);
    setLoading(false);
  }, [allProducts]);
  
  // Filter and sort products when filters change
  useEffect(() => {
    let result = [...products];
    
    // Country filter
    if (selectedCountry !== 'all') {
      result = result.filter(product => product.Country === selectedCountry);
    }
    
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
        const country = product.Country || '';
        return (
          title.toLowerCase().includes(search) || 
          date.toLowerCase().includes(search) ||
          desc.toLowerCase().includes(search) ||
          country.toLowerCase().includes(search)
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
      case 'country':
        result.sort((a, b) => {
          const countryA = a.Country || 'Unknown';
          const countryB = b.Country || 'Unknown';
          return countryA.localeCompare(countryB);
        });
        break;
      default:
        // 'featured' - no specific sort, use default order
        break;
    }
    
    setFilteredProducts(result);
  }, [products, selectedCountry, priceRange, sortOption, searchTerm]);
  
  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };
  
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
    setSelectedCountry('all');
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
  
  // Sort countries alphabetically for the filter
  const sortedCountries = Object.keys(countries).sort();
  
  return (
    <div className="category-page">
      <div className="category-hero">
        <div className="container">
          <h1>World Coins</h1>
          <p>Explore our collection of coins from around the world</p>
        </div>
      </div>
      
      <div className="container">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search by country, date, type, or description..." 
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        
        <div className="category-content">
          <aside className="category-sidebar">
            <div className="filter-section">
              <h3>Countries</h3>
              <div className="filter-options filter-scrollable">
                <div className="filter-option">
                  <input 
                    type="radio" 
                    id="country-all" 
                    name="country" 
                    value="all" 
                    checked={selectedCountry === 'all'} 
                    onChange={() => handleCountryChange('all')} 
                  />
                  <label htmlFor="country-all">
                    All Countries 
                    <span className="count">({products.length})</span>
                  </label>
                </div>
                
                {sortedCountries.map(country => (
                  <div className="filter-option" key={country}>
                    <input 
                      type="radio" 
                      id={`country-${country}`} 
                      name="country" 
                      value={country} 
                      checked={selectedCountry === country} 
                      onChange={() => handleCountryChange(country)} 
                    />
                    <label htmlFor={`country-${country}`}>
                      {country} 
                      <span className="count">({countries[country]})</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
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
                  <option value="country">Country</option>
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
                      title: `${product.Country ? product.Country + ' · ' : ''} ${product.Date || ''} ${product.Type || product.title || ''}`,
                      description: product.description || `${product.Denomination || ''} ${product.Grade || ''}`,
                      price: parseFloat(product.Price || product.price),
                      image: product.image,
                      category: 'world-coins',
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

export default WorldCoinsPage;