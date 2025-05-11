import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Hero from "./pages/Hero/Hero";
import Gallery from "./pages/Gallery/Gallery";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
