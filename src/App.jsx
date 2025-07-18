// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Import Screen/Page Components
import HomePage from './screens/HomePage/HomePage';
import AboutUsPage from './screens/AboutUsPage/AboutUsPage';
import CareersPage from './screens/CareersPage/CareersPage';

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;