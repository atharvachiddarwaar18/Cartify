import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<>HIII</>} />
            <Route path="/compare" element={<div style={{padding: '2rem'}}>Compare Page (Coming Soon)</div>} />
            <Route path="/cart" element={<div style={{padding: '2rem'}}>Cart Page (Coming Soon)</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;