import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Achievement from './components/Achievement';
import Services from './components/Services';
import Teams from './components/Teams';
import Project from './components/Project'
import Contact from './components/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* If you're on Register or Login, don't show Navbar */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        {/* For other routes, show the Navbar */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Header />
              <Achievement />
              <About />
              <Services />
              <Teams />
              <Project />
              <Contact />
            </>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
