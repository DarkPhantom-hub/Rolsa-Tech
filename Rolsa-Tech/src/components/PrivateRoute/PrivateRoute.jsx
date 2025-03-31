import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');  // Check if the token exists

  if (!token) {
    // Redirect to login page if the user is not authenticated
    return <Navigate to="/login" />;
  }

  return children; // If authenticated, render the child component
};

export default PrivateRoute;
