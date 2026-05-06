import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CompareContext } from '../context/CompareContext';
import './ComparePage.css';

function ComparePage() {
  const { compareList, toggleCompare } = useContext(CompareContext);

  // Handle empty state
  if (compareList.length === 0) {
    return (
      <div className="compare-empty">
        <h2>No products selected for comparison</h2>
        <p>Go to the home page and click "Compare" on up to 4 products.</p>
        <Link to="/" className="btn-primary" style={{marginTop: '1rem', display: 'inline-block', padding: '0.75rem 1.5rem', backgroundColor: 'var(--primary-color)', color: 'white', borderRadius: '4px'}}>
          Browse Products
        </Link>
      </div>
    );
  }


  const lowestPrice = Math.min(...compareList.map(item => item.price));
  

  const highestRating = Math.max(...compareList.map(item => item.rating.rate));

  return (
    <div className="compare-page-container">
      <h2>Smart Comparison Dashboard</h2>
      
      <div 
        className="compare-grid" 
        style={{ gridTemplateColumns: `repeat(${compareList.length}, minmax(200px, 1fr))` }}
      >
        {compareList.map(product => {
          const isBestPrice = product.price === lowestPrice;
          const isBestRating = product.rating.rate === highestRating;

          return (
            <div key={product.id} className="compare-column">
              <button 
                className="btn-remove-compare" 
                onClick={() => toggleCompare(product)}
                title="Remove from comparison"
              >
                ✕
              </button>
              
              <div className="compare-image-container">
                <img src={product.image} alt={product.title} />
              </div>
              
              <h3 className="compare-title">{product.title}</h3>
              <p className="compare-category">{product.category}</p>
              
              <div className={`compare-stat ${isBestPrice ? 'highlight-price' : ''}`}>
                <span className="stat-label">Price</span>
                <span className="stat-value">${product.price.toFixed(2)}</span>
                {isBestPrice && <div className="badge price-badge">Lowest Price!</div>}
              </div>
              
              <div className={`compare-stat ${isBestRating ? 'highlight-rating' : ''}`}>
                <span className="stat-label">Rating</span>
                <span className="stat-value">⭐ {product.rating.rate}</span>
                {isBestRating && <div className="badge rating-badge">Highest Rated!</div>}
              </div>

              <div className="compare-action">
                <button className="btn-add-cart-large">Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ComparePage;