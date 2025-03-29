import React from 'react';
import { Navigate } from 'react-router-dom';

// Simulated authentication check (Replace with actual authentication logic)
const isAuthenticated = () => {
  return localStorage.getItem('token') !== null; // Example: Checking if a token exists
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
