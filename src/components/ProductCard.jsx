import React, { useContext } from 'react';
import { CompareContext } from '../context/CompareContext';
import './ProductCard.css';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const { toggleCompare, isInCompareList } = useContext(CompareContext);
  const isCompared = isInCompareList(product.id);

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} >
        <div className="product-image-container">
          <img src={product.image} alt={product.title} className="product-image" />
        </div>
      </Link>
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
          <button 
            className={`btn-compare ${isCompared ? 'active' : ''}`}
            onClick={() => toggleCompare(product)}
          >
            {isCompared ? 'Remove Compare' : 'Compare'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;