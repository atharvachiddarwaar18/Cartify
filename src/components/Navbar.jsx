import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { CartContext } from '../context/CartContext';

function Navbar() {
  const { cartItems } = useContext(CartContext);

  const [scrolled, setScrolled] = useState(false);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <Link to="/">🛍️ Cartify</Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/compare">Compare</Link>
        </li>

        <li>
          <Link to="/cart">
            Cart
            {totalItems > 0 && (
              <span className="cart-badge">
                {totalItems}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;