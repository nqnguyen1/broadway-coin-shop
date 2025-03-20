// pages/ShopPage.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "../styles/ShopPage.css";

// This would normally come from an API
import { getProducts } from "../services/productService";

const ShopPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortOption, setSortOption] = useState("featured");

  const location = useLocation();

  useEffect(() => {
    // Get category from URL query params if present
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");

    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }

    // Fetch products (simulated)
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);

        // Extract unique categories
        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [location.search]);

  // Filter and sort products when filters change
  useEffect(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Price range filter
    result = result.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort
    switch (sortOption) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      case "alphabetical":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        // 'featured' - no specific sort, use default order
        break;
    }

    setFilteredProducts(result);
  }, [products, selectedCategory, priceRange, sortOption]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceRangeChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = Number(e.target.value);
    setPriceRange(newRange);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
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

  return (
    <div className="shop-page">
      <div className="shop-hero">
        <div className="container">
          <h1>Our Collection</h1>
          <p>Browse our extensive range of rare and collectible items</p>
        </div>
      </div>

      <div className="container">
        <div className="shop-content">
          <aside className="shop-sidebar">
            <div className="filter-section">
              <h3>Categories</h3>
              <div className="filter-options">
                <div className="filter-option">
                  <input
                    type="radio"
                    id="category-all"
                    name="category"
                    value="all"
                    checked={selectedCategory === "all"}
                    onChange={handleCategoryChange}
                  />
                  <label htmlFor="category-all">All Categories</label>
                </div>

                {categories.map((category) => (
                  <div className="filter-option" key={category}>
                    <input
                      type="radio"
                      id={`category-${category}`}
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={handleCategoryChange}
                    />
                    <label htmlFor={`category-${category}`}>
                      {category
                        .split("-")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>Price Range</h3>
              <div className="price-range-inputs">
                <div className="price-input">
                  <label htmlFor="min-price">Min:</label>
                  <input
                    type="number"
                    id="min-price"
                    min="0"
                    max={priceRange[1]}
                    value={priceRange[0]}
                    onChange={(e) => handlePriceRangeChange(e, 0)}
                  />
                </div>
                <div className="price-input">
                  <label htmlFor="max-price">Max:</label>
                  <input
                    type="number"
                    id="max-price"
                    min={priceRange[0]}
                    value={priceRange[1]}
                    onChange={(e) => handlePriceRangeChange(e, 1)}
                  />
                </div>
              </div>
              <div className="price-range-slider">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceRangeChange(e, 0)}
                />
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceRangeChange(e, 1)}
                />
              </div>
            </div>
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
                filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                  />
                ))
              ) : (
                <div className="no-products">
                  <p>No products found matching your criteria.</p>
                  <button
                    className="btn"
                    onClick={() => {
                      setSelectedCategory("all");
                      setPriceRange([0, 5000]);
                      setSortOption("featured");
                    }}
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
