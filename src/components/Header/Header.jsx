import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header className="site-header">
      <div className="site-logo">Nandish Homes</div>

      <div className="hamburger" onClick={toggleNav}>
        <span className={isNavOpen ? 'line open' : 'line'}></span>
        <span className={isNavOpen ? 'line open' : 'line'}></span>
        <span className={isNavOpen ? 'line open' : 'line'}></span>
      </div>

      <nav className={`site-nav ${isNavOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsNavOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsNavOpen(false)}>About Us</Link>
        <Link to="/contact" onClick={() => setIsNavOpen(false)}>Contact Us</Link>
      </nav>
    </header>
  );
}

export default Header;
