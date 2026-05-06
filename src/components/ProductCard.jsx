import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3 className="product-title" title={product.title}>
          {product.title.length > 40 ? `${product.title.substring(0, 40)}...` : product.title}
        </h3>
        <div className="product-price-rating">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <span className="product-rating">⭐ {product.rating.rate}</span>
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
