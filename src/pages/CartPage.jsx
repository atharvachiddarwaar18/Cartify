import React from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';

function CartPage() {
  return (
      <div className="cart-empty-container">
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <Link to="/" className="btn-continue-shopping">Start Shopping</Link>
      </div>
    );

}
export default CartPage;