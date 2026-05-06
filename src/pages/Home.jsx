import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import './Home.css';

function Home(){
    const [products, setProducts] = useState([]);
    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
      });
    }, []);
    return(
        <div className="home-container">
            <h2>Featured Products</h2>
            <div className="product-grid">
                {products.map(product => (
                <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}


export default Home;