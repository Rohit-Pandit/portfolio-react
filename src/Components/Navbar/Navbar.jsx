import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
          <div className="navbar-logo">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
        </div>
        <ul className='nav-menu'>
            <li>
              <NavLink 
                 to="/"  
                 end
                 className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
               Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                 to="/about"  
                 end
                 className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                  About Me
              </NavLink>
            </li>
            <li>
              <NavLink 
                 to="/project"  
                 end
                 className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                 to="/contact" 
                 end
                 className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Contact
              </NavLink>
            </li>
             <li>
              <NavLink 
                 to="/certificate" 
                 end
                 className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Certificates
              </NavLink>
            </li>
        </ul>
        {/* <div className='nav-connect'>Connect With Me</div> */}
        <div className="nav-connect">
           <a href="mailto:rohitpandit.190425@gmail.com">Connect With Me</a>
      </div>
    </div>
  )
}

export default Navbar