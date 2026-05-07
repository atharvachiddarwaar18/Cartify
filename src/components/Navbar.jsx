import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Navbar() {
  const { cartItems } = useContext(CartContext);
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">🛍️ Cartify</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/compare">Compare</Link></li>
        <li><Link to="/cart">Cart {totalItems > 0 && <span className="cart-badge">({totalItems})</span>}</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
