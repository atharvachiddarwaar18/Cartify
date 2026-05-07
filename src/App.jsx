import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ComparePage from './pages/ComparePage';
import { CompareProvider } from './context/CompareContext';
import ProductDetail from './pages/ProductDetal';

function App() {
  return (
    <CompareProvider>
    <Router>
      <div className="app-container">
        <Navbar/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/compare" element={<ComparePage/>}/>
            <Route path="/product/:id" element={<ProductDetail/>} />
            <Route path="/cart" element={<div style={{padding: '2rem'}}>Cart Page (Coming Soon)</div>} />
          </Routes>
        </main>
      </div>
    </Router>
    </CompareProvider>
  );
}

export default App;