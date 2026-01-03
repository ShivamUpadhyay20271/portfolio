import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#" className="logo">
          Shivam<span className="dot">.</span>
        </a>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#resume" onClick={() => setIsOpen(false)}>Resume</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
