// pages/ProductPage.js
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById, getRelatedProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";
import "../styles/ProductPage.css";

const ProductPage = React.memo(({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const productData = await getProductById(parseInt(id));
        setProduct(productData);

        const related = await getRelatedProducts(productData.category);
        setRelatedProducts(
          related.filter((item) => item.id !== parseInt(id)).slice(0, 4)
        );

        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      // Add the product with the selected quantity
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }

      // Show success message or notification here
      alert(`${quantity} ${product.title} added to cart.`);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
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
            <p>
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/shop" className="btn">
              Return to Shop
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-page">
      <div className="container">
        <div className="breadcrumbs">
          <Link to="/">Home</Link> /<Link to="/shop">Shop</Link> /
          <Link to={`/shop?category=${product.category}`}>
            {product.category
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </Link>{" "}
          /<span>{product.title}</span>
        </div>

        <div className="product-detail">
          <div className="product-images">
            <div className="main-image">
              <img
                src={product.image}
                alt={product.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/placeholder.jpg";
                }}
              />
            </div>
            {product.additionalImages && (
              <div className="thumbnail-images">
                {product.additionalImages.map((img, index) => (
                  <div className="thumbnail" key={index}>
                    <img
                      src={img}
                      alt={`${product.title} view ${index + 1}`}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/placeholder.jpg";
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="product-info">
            <h1 className="product-title">{product.title}</h1>
            <div className="product-meta">
              <p>{product.description}</p>
              {product.inStock ? (
                <span className="in-stock">
                  <i className="fas fa-check-circle"></i> In Stock
                </span>
              ) : (
                <span className="out-of-stock">
                  <i className="fas fa-times-circle"></i> Out of Stock
                </span>
              )}
            </div>
            <div className="product-price">${product.price.toFixed(2)}</div>

            <div className="product-short-desc">
              <p>
                {product.shortDescription ||
                  "A rare collectible piece for numismatic enthusiasts and collectors alike. This item has been verified for authenticity and comes with our certification of genuineness."}
              </p>
            </div>

            <div className="product-actions">
              <div className="quantity-selector">
                <button className="quantity-btn" onClick={decrementQuantity}>
                  <i className="fas fa-minus"></i>
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="quantity-input"
                />
                <button className="quantity-btn" onClick={incrementQuantity}>
                  <i className="fas fa-plus"></i>
                </button>
              </div>

              <button
                className="btn add-to-cart-btn"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <i className="fas fa-shopping-cart"></i>
                Add to Cart
              </button>

              <button className="wishlist-btn">
                <i className="far fa-heart"></i>
              </button>
            </div>

            <div className="product-meta-info">
              <p>
                <strong>SKU:</strong> {product.sku || `COIN-${product.id}`}
              </p>
              <p>
                <strong>Category:</strong>{" "}
                {product.category
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </p>
              {product.tags && (
                <p>
                  <strong>Tags:</strong> {product.tags.join(", ")}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="product-tabs">
          <div className="tabs-header">
            <button
              className={`tab-btn ${
                activeTab === "description" ? "active" : ""
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`tab-btn ${activeTab === "details" ? "active" : ""}`}
              onClick={() => setActiveTab("details")}
            >
              Additional Information
            </button>
            <button
              className={`tab-btn ${activeTab === "reviews" ? "active" : ""}`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === "description" && (
              <div className="tab-panel">
                <h3>Product Description</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      product.fullDescription ||
                      `<p>This ${product.title} is a valuable addition to any collection. Known for its historical significance and rarity, this piece represents an era of numismatic excellence.</p>
                  <p>Each piece in our collection undergoes rigorous authentication and grading to ensure you receive exactly what is described. We pride ourselves on accuracy and transparency in our descriptions.</p>`,
                  }}
                />
              </div>
            )}

            {activeTab === "details" && (
              <div className="tab-panel">
                <h3>Additional Information</h3>
                <table className="details-table">
                  <tbody>
                    <tr>
                      <th>Year</th>
                      <td>{product.year || "N/A"}</td>
                    </tr>
                    <tr>
                      <th>Origin</th>
                      <td>{product.origin || "N/A"}</td>
                    </tr>
                    <tr>
                      <th>Condition</th>
                      <td>{product.condition || "N/A"}</td>
                    </tr>
                    <tr>
                      <th>Material</th>
                      <td>{product.material || "N/A"}</td>
                    </tr>
                    <tr>
                      <th>Weight</th>
                      <td>{product.weight || "N/A"}</td>
                    </tr>
                    <tr>
                      <th>Dimensions</th>
                      <td>{product.dimensions || "N/A"}</td>
                    </tr>
                    <tr>
                      <th>Certification</th>
                      <td>
                        {product.certification ||
                          "Broadway Coin & Stamp Certificate of Authenticity"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="tab-panel">
                <h3>Customer Reviews</h3>
                {product.reviews && product.reviews.length > 0 ? (
                  <div className="reviews-list">
                    {product.reviews.map((review, index) => (
                      <div className="review-item" key={index}>
                        <div className="review-header">
                          <div className="reviewer-name">{review.name}</div>
                          <div className="review-rating">
                            {[...Array(5)].map((_, i) => (
                              <i
                                key={i}
                                className={`${
                                  i < review.rating ? "fas" : "far"
                                } fa-star`}
                              ></i>
                            ))}
                          </div>
                          <div className="review-date">{review.date}</div>
                        </div>
                        <div className="review-content">{review.comment}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="no-reviews">
                    <p>There are no reviews for this product yet.</p>
                    <button className="btn">Write a Review</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="related-products">
            <h2>Related Products</h2>
            <div className="coins-grid">
              {relatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default ProductPage;
