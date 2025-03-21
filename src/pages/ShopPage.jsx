// pages/ShopPage.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import '../styles/ShopPage.css';

const categories = [
  { id: "all", name: "All Items" },
  { id: "us-coins", name: "US Coins" },
  { id: "world-coins", name: "World Coins" },
  { id: "bullion", name: "Bullion" },
  { id: "currency", name: "Currency" }
];
const ShopPage = ( {allProducts} ) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortOption, setSortOption] = useState('featured');
  const [searchTerm, setSearchTerm] = useState('');
  
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Get category from URL query params if present
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    
    // Initialize products
    setLoading(true);
    try {
      setProducts(allProducts);
      setLoading(false);
    } catch (error) {
      console.error('Error loading products:', error);
      setLoading(false);
    }
  }, [location.search, allProducts]);
  
  // Filter and sort products when filters change
  useEffect(() => {
    let result = [...products];
    
    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
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
        case "featured":
          result.sort((a, b) => (a.featured === b.featured) ? 0 : a.featured ? -1 : 1);
      default:
        // 'featured' - no specific sort, use default order
        break;
    }
    
    setFilteredProducts(result);
  }, [products, selectedCategory, priceRange, sortOption, searchTerm]);
  
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    // Update URL to reflect category change
    navigate(`/shop?category=${categoryId}`);
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
    setSelectedCategory('all');
    setPriceRange([0, 5000]);
    setSortOption('featured');
    setSearchTerm('');
    navigate('/shop');
  };
  
  if (loading) {
    return (
      <div className="shop-page loading">
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
    <div className="shop-page">
      <div className="shop-hero">
        <div className="container">
          <h1>Our Collection</h1>
          <p>Browse our extensive range of rare and collectible items</p>
        </div>
      </div>
      
      <div className="container">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search by type, date, or description..." 
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        
        <div className="shop-content">
          <aside className="shop-sidebar">
            <div className="filter-section">
              <h3>Categories</h3>
              <div className="filter-options">
                {categories.map(category => (
                  <div className="filter-option" key={category.id}>
                    <input 
                      type="radio" 
                      id={`category-${category.id}`} 
                      name="category" 
                      value={category.id} 
                      checked={selectedCategory === category.id} 
                      onChange={() => handleCategoryChange(category.id)} 
                    />
                    <label htmlFor={`category-${category.id}`}>{category.name}</label>
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
          
          <div className="shop-products">
            <div className="shop-header">
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
                      inStock: product.Status === "Available" || product.inStock,
                      featured: product.featured
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

export default ShopPage;