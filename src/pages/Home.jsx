import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import './Home.css';

function Home(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
    }, []);

    if (loading) {
        return <div className="loading-spinner">Loading products...</div>;
    }

    return (
        <div className="home-container">
        <h2>Featured Products</h2>
        <div className="product-grid">
            {products.map(product => (
            <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </div>
    );
}


export default Home;