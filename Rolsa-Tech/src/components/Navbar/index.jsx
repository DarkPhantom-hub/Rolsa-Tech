import React, { useState, useEffect, useRef } from 'react';
import "./Navbar.css";
import { navTabs } from "../../data";
import { Link as ScrollLink } from 'react-scroll';
import { Link, useNavigate } from 'react-router-dom';
import { RiMenu3Fill } from 'react-icons/ri';
import Logo from '../Logo';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [user, setUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  const profileRef = useRef(null);

  // Check if user is logged in
  useEffect(() => {
    const fetchUser = () => {
      const token = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");
      if (token && storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };

    fetchUser();
    window.addEventListener("storage", fetchUser);

    return () => window.removeEventListener("storage", fetchUser);
  }, []);

  const handleScroll = () => {
    setActiveNavbar(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
              to={tab.id}
              className='tab'
              activeClass='g-text'
              smooth={true}
              spy={true}
              offset={-70}
              onClick={() => setOpen(false)}
              key={index}
            >
              {tab.name}
            </ScrollLink>
          ))
        }
      </div>
      <div className="box">
        {user ? (
          <div className="profile-container" ref={profileRef}>
            <button className="btn profile-btn" onClick={() => setProfileOpen(!profileOpen)}>
              {user.name || "Profile"}
            </button>
            {profileOpen && (
              <div className="dropdown-content">
                <Link to="/dashboard" className='dropdown-item'>Dashboard</Link>
                <button className='dropdown-item' onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <Link to='/register' className='btn contact__btn'>Sign Up</Link>
        )}
        <div className='icon__container menu__btn' onClick={() => setOpen(!open)}>
          <RiMenu3Fill />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
