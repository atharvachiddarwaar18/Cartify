import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';

function ProductDetail() {

  const { id } = useParams(); 
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching product details:", err);
        setLoading(false);
      });
  }, [id]); 

  if (loading) {
    return <div className="loading-spinner">Loading product details...</div>;
  }

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found!</h2>
        <Link to="/" className="btn-primary" style={{marginTop: '1rem', display: 'inline-block', padding: '0.75rem 1.5rem', backgroundColor: 'var(--primary-color)', color: 'white', borderRadius: '4px'}}>Go back to Home</Link>
      </div>
    );
  }


  return (
    <div className="product-detail-container">
      <Link to="/" className="back-link">← Back to Products</Link>
      
      <div className="product-detail-card">
        <div className="product-detail-image">
          <img src={product.image} alt={product.title} />
        </div>
        
        <div className="product-detail-info">
          <p className="detail-category">{product.category}</p>
          <h2 className="detail-title">{product.title}</h2>
          
          <div className="detail-price-rating">
            <span className="detail-price">${product.price.toFixed(2)}</span>
            <span className="detail-rating">
              ⭐ {product.rating.rate} <span className="review-count">({product.rating.count} reviews)</span>
            </span>
          </div>
          
          <div className="detail-description">
            <h3>Product Description</h3>
            <p>{product.description}</p>
          </div>
          
          <div className="detail-actions">
            <button 
              className="btn-add-cart-large"
            >
              Add to Cart
            </button>
            <button 
            >
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
