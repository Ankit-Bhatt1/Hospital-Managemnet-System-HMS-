import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MyWebsite</Link> {/* Use Link instead of a */}
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link> {/* Use Link to="/" */}
        <Link to="/About">About</Link> {/* Corrected to use Link to /about */}
        <Link to="/services">Services</Link> {/* Corrected to use Link to /services */}
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </div>
    </nav>
  );
};

export default NavBar;
