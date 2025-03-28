import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import Logo from '../../components/Logo'; // Import the Logo component
import LeftImage from '../../assets/left-image.png';  // Import the PNG image (replace with your image path)

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    let errors = { ...errors };

    if (!formData.name) {
      errors.name = 'Name is required';
      valid = false;
    } else {
      errors.name = '';
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,6}$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      errors.email = 'Invalid email address';
      valid = false;
    } else {
      errors.email = '';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
      valid = false;
    } else {
      errors.password = '';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      valid = false;
    } else {
      errors.confirmPassword = '';
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Registration successful:', formData);
      // Redirect to the login page after successful registration
      window.location.href = '/login';
    }
  };

  return (
    <div className="register-container">
      <div className="left-image">
        <img src={LeftImage} alt="Left Side" />
      </div>
      <div className="register-form-container">
        <div className="logo-container">
          <Logo /> {/* Logo at the top */}
        </div>
        <h2 className="register-title">Create Account</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          </div>

          <button type="submit" className="btn">Register</button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login" className="login-link-text">Click to Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
