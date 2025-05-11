import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home'; // Create this component
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          
        </Routes>
      </main>
       <Footer/>
    </div>
  );
}

export default App;
