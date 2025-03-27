import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate for redirection
import './Login.css';
import Logo from '../../components/Logo'; // Import the Logo component

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Hook to redirect after successful login

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
    } else {
      errors.password = '';
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Login successful:', formData);
      // Assuming login is successful, we redirect to the homepage
      navigate('/'); // Redirect to the homepage or the page with the Navbar
    }
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <Logo />  {/* Logo at the top */}
      </div>
      <h2 className="login-title">Log In</h2>
      <form onSubmit={handleSubmit} className="login-form">
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

        <button type="submit" className="btn">Log In</button>
      </form>

      {/* Link to Register page */}
      <p className="register-link">
        Don't have an account? <Link to="/register" className="register-link-text">Click to Register</Link>
      </p>
    </div>
  );
};

export default Login;
