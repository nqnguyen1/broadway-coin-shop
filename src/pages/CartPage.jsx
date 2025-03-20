// pages/CartPage.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/CartPage.css";

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    // Calculate subtotal
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setSubtotal(total);
  }, [cartItems]);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <i className="fas fa-shopping-cart"></i>
            <p>Your cart is empty</p>
            <Link to="/shop" className="btn">
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              <div className="cart-header">
                <div className="cart-product-col">Product</div>
                <div className="cart-price-col">Price</div>
                <div className="cart-quantity-col">Quantity</div>
                <div className="cart-total-col">Total</div>
                <div className="cart-remove-col"></div>
              </div>

              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-product-col">
                    <div className="cart-product-info">
                      <Link to={`/product/${item.id}`}>
                        <img
                          src={item.image}
                          alt={item.title}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/images/placeholder.jpg";
                          }}
                        />
                      </Link>
                      <div className="cart-product-details">
                        <Link
                          to={`/product/${item.id}`}
                          className="cart-product-title"
                        >
                          {item.title}
                        </Link>
                        <p className="cart-product-meta">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="cart-price-col">${item.price.toFixed(2)}</div>

                  <div className="cart-quantity-col">
                    <div className="quantity-selector">
                      <button
                        className="quantity-btn"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            item.id,
                            parseInt(e.target.value) || 1
                          )
                        }
                        className="quantity-input"
                      />
                      <button
                        className="quantity-btn"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>

                  <div className="cart-total-col">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  <div className="cart-remove-col">
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-actions">
              <div className="coupon-section">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="coupon-input"
                />
                <button className="btn apply-coupon-btn">Apply Coupon</button>
              </div>

              <button className="btn update-cart-btn">Update Cart</button>
            </div>

            <div className="cart-summary">
              <h2>Cart Totals</h2>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Free Shipping</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button className="btn checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
