import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Toast.css';

function Toast() {
  const { toastMessage } = useContext(CartContext);

  if (!toastMessage) return null;

  return (
    <div className="toast-container">
      <div className="toast-content">
        <span className="toast-icon">✅</span>
        <p>{toastMessage}</p>
      </div>
    </div>
  );
}

export default Toast;