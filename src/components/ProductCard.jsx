import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={"https://unsplash.com/s/photos/product"} alt={"Headphones"} className="product-image" />
      </div>
      <div className="product-info">
        <p className="product-category">{"Music"}</p>
        <h3 className="product-title" title={"Headphones"}>
            Headphones
        </h3>
        <div className="product-price-rating">
          <span className="product-price">$2400</span>
          <span className="product-rating">⭐ 4.8</span>
        </div>
        <div className="product-actions">
          <button className="btn-add-cart">Add to Cart</button>
          <button className="btn-compare">Compare</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
