import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="landing-page">
              <h1>Paradise Nursery</h1>
              <p>Bring home the beauty of nature.</p>
              <Link to="/products">
                <button className="get-started-btn">Get Started</button>
              </Link>
            </div>
          }
        />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
