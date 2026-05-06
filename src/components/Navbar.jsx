import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">🛍️ Cartify</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/compare">Compare</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
