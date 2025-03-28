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
        {/* Routes without Navbar */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Routes with Navbar */}
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
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
