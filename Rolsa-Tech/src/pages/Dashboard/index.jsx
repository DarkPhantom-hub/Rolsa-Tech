import React, { useState } from 'react';
import './Dashboard.css';
import { FaGasPump, FaBolt, FaTint, FaCalendarCheck, FaLeaf, FaSignOutAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Booking from '../../components/Booking';
import CarbonCalculator from '../../components/CarbonCalculator';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const userName = "John Doe"; // Replace with dynamic user data

  // Sample usage data
  const usageData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Electricity (kWh)',
        data: [120, 150, 100, 130, 160, 140],
        borderColor: '#f39c12',
        fill: false,
      },
      {
        label: 'Gas (kWh)',
        data: [80, 100, 90, 110, 130, 120],
        borderColor: '#e74c3c',
        fill: false,
      },
      {
        label: 'Water (Liters)',
        data: [300, 250, 270, 290, 310, 280],
        borderColor: '#3498db',
        fill: false,
      },
    ],
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
            <h1 className="welcome">Welcome, {userName}!</h1>
            <div className="stats-container">
              <div className="bill-card paid" onClick={() => setActiveSection('gas')}>
                <FaGasPump className="icon gas-icon" />
                <p>Gas Bill: $120</p>
                <FaCheckCircle className="status paid" />
              </div>
              <div className="bill-card pending" onClick={() => setActiveSection('electricity')}>
                <FaBolt className="icon" />
                <p>Electricity Bill: $90</p>
                <FaTimesCircle className="status pending" />
              </div>
              <div className="bill-card paid" onClick={() => setActiveSection('water')}>
                <FaTint className="icon water-icon" />
                <p>Water Bill: $60</p>
                <FaCheckCircle className="status paid" />
              </div>
            </div>
            <div className="chart-container">
              <h2>Usage Overview</h2>
              <Line data={usageData} />
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
        <button onClick={() => { localStorage.removeItem("authToken"); sessionStorage.removeItem("authToken"); window.location.href = "/login"; }} className="logout">
          <FaSignOutAlt /> Logout
        </button>
      </aside>
      <main className="dashboard-content">{renderContent()}</main>
    </div>
  );
};

export default Dashboard;