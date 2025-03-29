import React from 'react';
import { Navigate } from 'react-router-dom';

// TEMPORARY BYPASS: Set `isAuthenticated` to true for testing
const isAuthenticated = true; // Change this to false when authentication is implemented

const PrivateRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
