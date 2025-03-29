import React, { useState } from 'react';
import './Dashboard.css';
import { FaGasPump, FaBolt, FaTint, FaCalendarCheck, FaLeaf, FaSignOutAlt } from 'react-icons/fa';
import Booking from "../../components/Booking";
import CarbonCalculator from '../../components/CarbonCalculator';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove auth token from localStorage
    sessionStorage.removeItem("authToken"); // Remove auth token from sessionStorage
    window.location.href = "/login"; // Redirect to login page
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'gas':
        return <div className="content">Your Gas Bill: $120</div>;
      case 'electricity':
        return <div className="content">Your Electricity Bill: $90</div>;
      case 'water':
        return <div className="content">Your Water Bill: $60</div>;
      case 'booking':
        return <Booking />;
      case 'carbon':
        return <CarbonCalculator />;
      default:
        return (
          <div className="content">
            <h1>Welcome to Your Dashboard</h1>
            <div className="bills-overview">
              <div className="bill-card" onClick={() => setActiveSection('gas')}>
                <FaGasPump className="icon" />
                <p>Gas Bill: $120</p>
              </div>
              <div className="bill-card" onClick={() => setActiveSection('electricity')}>
                <FaBolt className="icon" />
                <p>Electricity Bill: $90</p>
              </div>
              <div className="bill-card" onClick={() => setActiveSection('water')}>
                <FaTint className="icon" />
                <p>Water Bill: $60</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <button onClick={() => setActiveSection('overview')}>Overview</button>
        <button onClick={() => setActiveSection('booking')}><FaCalendarCheck /> Booking</button>
        <button onClick={() => setActiveSection('carbon')}><FaLeaf /> Carbon Calculator</button>
        <button onClick={handleLogout} className="logout"><FaSignOutAlt /> Logout</button>
      </aside>
      <main className="dashboard-content">{renderContent()}</main>
    </div>
  );
};

export default Dashboard;
