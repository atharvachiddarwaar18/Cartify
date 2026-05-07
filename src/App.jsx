import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ComparePage from './pages/ComparePage';
import { CompareProvider } from './context/CompareContext';
import ProductDetail from './pages/ProductDetal';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
    <CompareProvider>
    <Router>
      <div className="app-container">
        <Navbar/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/compare" element={<ComparePage/>}/>
            <Route path="/product/:id" element={<ProductDetail/>} />
            <Route path="/cart" element={<CartPage/>} />
          </Routes>
        </main>
      </div>
    </Router>
    </CompareProvider>
    </CartProvider>
  );
}

export default App;