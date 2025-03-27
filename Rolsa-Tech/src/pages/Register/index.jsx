import React, { useState } from 'react';
import './Register.css'; // Make sure this file is correctly named
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import Logo from '../../components/Logo'; // Ensure this is the correct import

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    username: '',
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

    if (!formData.username) {
      errors.username = 'Username is required';
      valid = false;
    } else {
      errors.username = '';
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zAZ0-9]{2,6}$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      errors.email = 'Invalid email address';
      valid = false;
    } else {
      errors.email = '';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 6) {
      errors.password = 'Password should be at least 6 characters';
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
      console.log('Form submitted successfully:', formData);
      // Proceed with registration logic (send data to server)
    }
  };

  return (
    <div className="register-container">
      <div className="logo-container">
        <Logo />  {/* Logo at the top */}
      </div>
      <h2 className="register-title">Sign Up</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
          {errors.username && <p className="error">{errors.username}</p>}
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

      {/* Link to Login page */}
      <p className="login-link">
        Already got an account? <Link to="/login" className="login-link-text">Click to log in</Link>
      </p>
    </div>
  );
};

export default Register;
