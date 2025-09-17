import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="logo" />
        </NavLink>
      </div>

      {/* Navigation menu */}
      <ul className={`nav-menu ${menuOpen ? "mobile-open" : ""}`}>
        <li>
          <NavLink 
            to="/"  
            end
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about"  
            end
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={() => setMenuOpen(false)}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/project"  
            end
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            end
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/certificate" 
            end
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={() => setMenuOpen(false)}
          >
            Certificates
          </NavLink>
        </li>
        <li className="nav-connect">
          <a href="mailto:rohitpandit.190425@gmail.com" onClick={() => setMenuOpen(false)}>
            Connect With Me
          </a>
        </li>
      </ul>

      {/* Hamburger button */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
