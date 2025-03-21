// pages/USCoinsPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import '../styles/CategoryPage.css';

const USCoinsPage = ({ allProducts }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subcategories, setSubcategories] = useState({});
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [selectedSeries, setSelectedSeries] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortOption, setSortOption] = useState('featured');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Define the denomination display names and their corresponding values
  const denominationMap = {
    'half-dollar': { name: 'Half Dollar (50¢)', value: '50c' },
    'quarter': { name: 'Quarter (25¢)', value: '25c' },
    'dime': { name: 'Dime (10¢)', value: '10c' },
    'nickel': { name: 'Nickel (5¢)', value: '5c' },
    'penny': { name: 'Penny (1¢)', value: '1c' },
    'three-cent': { name: 'Three Cent Piece (3¢)', value: '3c' }
  };
  
  // Define series for each denomination
  const seriesMap = {
    'half-dollar': [
      'Franklin (1948-1963)',
      'Walking Liberty (1916-1947)',
      'Barber (1892-1916)'
    ],
    'quarter': [
      'Washington (1932-present)',
      'Standing Liberty (1916-1930)',
      'Seated Liberty (1837-1891)'
    ],
    'dime': [
      'Mercury (1916-1945)',
      'Barber (1892-1916)',
      'Seated Liberty (1837-1891)'
    ],
    'nickel': [
      'Buffalo (1913-1938)',
      'Liberty Nickel (1883-1913)'
    ],
    'penny': [
      'Lincoln (1909-present)',
      'Indian (1859-1909)',
      'Flying Eagle (1856-1858)',
      'Coronet Head (1816-1857)',
      'Classic Head (1808-1814)',
      'Draped Bust (1796-1807)'
    ],
    'three-cent': [
      'Three Cent Nickel (1865-1889)'
    ]
  };
  
  useEffect(() => {
    setLoading(true);
    // Filter US coins from all products
    const usCoins = allProducts.filter(product => product.category === 'us-coins' || 
      (product.Country === 'US' && !product.category));
    
    setProducts(usCoins);
    
    // Group products by denomination and count each denomination
    const subcategoryMap = {};
    usCoins.forEach(product => {
      // Determine subcategory (denomination) from the product
      let subcategory = 'other';
      
      if (product.Denomination === '50c' || product.Denomination_Value === '50') {
        subcategory = 'half-dollar';
      } else if (product.Denomination === '25c' || product.Denomination_Value === '25') {
        subcategory = 'quarter';
      } else if (product.Denomination === '10c' || product.Denomination_Value === '10') {
        subcategory = 'dime';
      } else if (product.Denomination === '5c' || product.Denomination_Value === '5') {
        subcategory = 'nickel';
      } else if (product.Denomination === '1c' || product.Denomination_Value === '1') {
        subcategory = 'penny';
      } else if (product.Denomination === '3c' || product.Denomination_Value === '3') {
        subcategory = 'three-cent';
      }
      
      // Count items in each subcategory
      if (!subcategoryMap[subcategory]) {
        subcategoryMap[subcategory] = { count: 0, series: {} };
      }
      subcategoryMap[subcategory].count += 1;
      
      // Count items by series within each subcategory
      const series = determineSeries(product, subcategory);
      if (series) {
        if (!subcategoryMap[subcategory].series[series]) {
          subcategoryMap[subcategory].series[series] = 0;
        }
        subcategoryMap[subcategory].series[series] += 1;
      }
    });
    
    setSubcategories(subcategoryMap);
    setLoading(false);
  }, [allProducts]);
  
  // Helper function to determine the series based on the product and subcategory
  const determineSeries = (product, subcategory) => {
    // First check if product has Type field that matches a known series
    if (product.Type) {
      const type = product.Type.toLowerCase();
      
      if (subcategory === 'half-dollar') {
        if (type.includes('franklin')) return 'Franklin (1948-1963)';
        if (type.includes('walking') || type.includes('liberty')) return 'Walking Liberty (1916-1947)';
        if (type.includes('barber')) return 'Barber (1892-1916)';
      } 
      else if (subcategory === 'dime') {
        if (type.includes('mercury')) return 'Mercury (1916-1945)';
        if (type.includes('barber')) return 'Barber (1892-1916)';
        if (type.includes('seated') || type.includes('liberty')) return 'Seated Liberty (1837-1891)';
      }
      else if (subcategory === 'penny') {
        if (type.includes('indian')) return 'Indian (1859-1909)';
        if (type.includes('flying')) return 'Flying Eagle (1856-1858)';
      }
    }
    
    // If we couldn't determine the series, return null
    return null;
  };
  
  // Filter products when filters change
  useEffect(() => {
    let result = [...products];
    
    // Subcategory filter
    if (selectedSubcategory !== 'all') {
      result = result.filter(product => {
        // Determine subcategory based on denomination
        if (selectedSubcategory === 'half-dollar') {
          return product.Denomination === '50c' || product.Denomination_Value === '50';
        } else if (selectedSubcategory === 'quarter') {
          return product.Denomination === '25c' || product.Denomination_Value === '25';
        } else if (selectedSubcategory === 'dime') {
          return product.Denomination === '10c' || product.Denomination_Value === '10';
        } else if (selectedSubcategory === 'nickel') {
          return product.Denomination === '5c' || product.Denomination_Value === '5';
        } else if (selectedSubcategory === 'penny') {
          return product.Denomination === '1c' || product.Denomination_Value === '1';
        } else if (selectedSubcategory === 'three-cent') {
          return product.Denomination === '3c' || product.Denomination_Value === '3';
        }
        return false;
      });
    }
    
    // Series filter
    if (selectedSeries !== 'all' && selectedSubcategory !== 'all') {
      result = result.filter(product => {
        const series = determineSeries(product, selectedSubcategory);
        return series === selectedSeries;
      });
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
        // Sort by Date field for coins that have it, otherwise default order
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
  }, [products, selectedSubcategory, selectedSeries, priceRange, sortOption, searchTerm]);
  
  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setSelectedSeries('all'); // Reset series when changing subcategory
  };
  
  const handleSeriesChange = (series) => {
    setSelectedSeries(series);
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
    setSelectedSubcategory('all');
    setSelectedSeries('all');
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
          <h1>US Coins</h1>
          <p>Browse our extensive collection of United States coins</p>
        </div>
      </div>
      
      <div className="container">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search by date, type, or description..." 
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        
        <div className="category-content">
          <aside className="category-sidebar">
            <div className="filter-section">
              <h3>Denominations</h3>
              <div className="filter-options">
                <div className="filter-option">
                  <input 
                    type="radio" 
                    id="subcategory-all" 
                    name="subcategory" 
                    value="all" 
                    checked={selectedSubcategory === 'all'} 
                    onChange={() => handleSubcategoryChange('all')} 
                  />
                  <label htmlFor="subcategory-all">
                    All Denominations 
                    <span className="count">({products.length})</span>
                  </label>
                </div>
                
                {Object.keys(denominationMap).map(subcategory => {
                  // Only show subcategories that have products
                  if (subcategories[subcategory] && subcategories[subcategory].count > 0) {
                    return (
                      <div className="filter-option" key={subcategory}>
                        <input 
                          type="radio" 
                          id={`subcategory-${subcategory}`} 
                          name="subcategory" 
                          value={subcategory} 
                          checked={selectedSubcategory === subcategory} 
                          onChange={() => handleSubcategoryChange(subcategory)} 
                        />
                        <label htmlFor={`subcategory-${subcategory}`}>
                          {denominationMap[subcategory].name} 
                          <span className="count">({subcategories[subcategory].count})</span>
                        </label>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
            
            {selectedSubcategory !== 'all' && (
              <div className="filter-section">
                <h3>Series</h3>
                <div className="filter-options">
                  <div className="filter-option">
                    <input 
                      type="radio" 
                      id="series-all" 
                      name="series" 
                      value="all" 
                      checked={selectedSeries === 'all'} 
                      onChange={() => handleSeriesChange('all')} 
                    />
                    <label htmlFor="series-all">
                      All Series 
                      <span className="count">
                        ({subcategories[selectedSubcategory]?.count || 0})
                      </span>
                    </label>
                  </div>
                  
                  {seriesMap[selectedSubcategory]?.map(series => {
                    // Only show series that have products
                    const seriesCount = subcategories[selectedSubcategory]?.series[series] || 0;
                    if (seriesCount > 0) {
                      return (
                        <div className="filter-option" key={series}>
                          <input 
                            type="radio" 
                            id={`series-${series}`} 
                            name="series" 
                            value={series} 
                            checked={selectedSeries === series} 
                            onChange={() => handleSeriesChange(series)} 
                          />
                          <label htmlFor={`series-${series}`}>
                            {series} 
                            <span className="count">({seriesCount})</span>
                          </label>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            )}
            
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
                      category: product.category,
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

export default USCoinsPage;