import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Achievement from './components/Achievement';
import Services from './components/Services';
import Teams from './components/Teams';
import Project from './components/Project';
import Contact from './components/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Booking from './components/Booking/index';
import CarbonCalculator from './components/CarbonCalculator/index';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'; // Import PrivateRoute

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Layout>
              <Header />
              <Achievement />
              <About />
              <Services />
              <Teams />
              <Project />
              <Contact />
            </Layout>
          }
        />

        {/* Protected Route for Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
                <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
