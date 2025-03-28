import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { navTabs } from "../../data";
import { Link as ScrollLink } from 'react-scroll';  // For scrolling to sections
import { Link } from 'react-router-dom';  // For page navigation
import { RiMenu3Fill } from 'react-icons/ri';
import Logo from '../Logo';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [user, setUser] = useState(null);  // To store the logged-in user

  // Check if user is logged in
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser)); // Set user from localStorage
    }
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > 50) {
      setActiveNavbar(true);
    } else {
      setActiveNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");  // Remove user from localStorage
    setUser(null);  // Reset user state
  };

  return (
    <nav className={`navbar ${activeNavbar ? 'active' : ''}`}>
      {open && <div className='sidebar__overlay' onClick={() => setOpen(false)}></div>}
      <Logo />
      <div className={`box nav__tabs ${open ? 'visible' : ''}`}>
        <div className="icon__container cancel__btn" onClick={() => setOpen(false)}>
          <FaTimes />
        </div>
        {
          navTabs.map((tab, index) => (
            <ScrollLink
              to={tab.id}  // Use the tab's ID for scrolling
              className='tab'
              activeClass='g-text'  // Add active class when section is in view
              smooth={true}         // Smooth scrolling
              spy={true}            // Detect when the section is in view
              offset={-70}          // Adjust scroll position slightly
              onClick={() => setOpen(false)} // Close the mobile menu when clicked
              key={index}
            >
              {tab.name}
            </ScrollLink>
          ))
        }
      </div>
      <div className="box">
        {user ? (
          <div className="profile-dropdown">
            <button className="btn profile-btn">Profile</button>
            <div className="dropdown-content">
              <a href='/dashboard' className='dropdown-item'>Dashboard</a>
              <button className='dropdown-item' onClick={handleLogout}>Logout</button>
            </div>
          </div>
        ) : (
          <Link to='/register' className='btn contact__btn'>Sign Up</Link>  // Only show Sign Up if not logged in
        )}
        <div className='icon__container menu__btn' onClick={() => setOpen(!open)}>
          <RiMenu3Fill />
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
