import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaProjectDiagram,
  FaCertificate,
} from "react-icons/fa";

import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  

  const links = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/about", label: "About Me", icon: <FaUser /> },
    { to: "/project", label: "Projects", icon: <FaProjectDiagram /> },
    { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
    { to: "/certificate", label: "Certificates", icon: <FaCertificate /> },
  ];

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <NavLink to="/" >
          <img src={logo} alt="logo" />
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <ul className="nav-menu desktop">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
        <li className="nav-connect">
          <a
            href="mailto:rohitpandit.190425@gmail.com"
      
          >
            Connect With Me
          </a>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <ul>
          {links.map(({ to, icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                
              >
                {icon}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

  
    </div>
  );
};

export default Navbar;
