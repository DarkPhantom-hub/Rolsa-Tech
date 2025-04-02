import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const EnergyUsage = () => {
  const [usageData, setUsageData] = useState({
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
  });

  const [newElectricity, setNewElectricity] = useState('');
  const [newGas, setNewGas] = useState('');
  const [newWater, setNewWater] = useState('');
  const [history, setHistory] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'electricity') setNewElectricity(value);
    if (name === 'gas') setNewGas(value);
    if (name === 'water') setNewWater(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newElectricity || !newGas || !newWater) {
      alert('Please fill in all fields');
      return;
    }

    const newHistoryEntry = {
      electricity: parseFloat(newElectricity),
      gas: parseFloat(newGas),
      water: parseFloat(newWater),
    };

    setHistory([...history, newHistoryEntry]);

    const newLabels = [...usageData.labels, `Month ${usageData.labels.length + 1}`];

    const newData = {
      labels: newLabels,
      datasets: [
        {
          label: 'Electricity (kWh)',
          data: [...usageData.datasets[0].data, newHistoryEntry.electricity],
          borderColor: '#f39c12',
          fill: false,
        },
        {
          label: 'Gas (kWh)',
          data: [...usageData.datasets[1].data, newHistoryEntry.gas],
          borderColor: '#e74c3c',
          fill: false,
        },
        {
          label: 'Water (Liters)',
          data: [...usageData.datasets[2].data, newHistoryEntry.water],
          borderColor: '#3498db',
          fill: false,
        },
      ],
    };

    setUsageData(newData);
    setNewElectricity('');
    setNewGas('');
    setNewWater('');
  };

  return (
    <div className="content">
      <h2>Energy Usage Overview</h2>
      <div className="main-container">
        <div className="chart-container">
          <Line data={usageData} />
        </div>
        <div className="right-column">
          <div className="form-container">
            <h3>Track Your Energy Usage</h3>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="electricity">Electricity (kWh): </label>
                <input
                  type="number"
                  id="electricity"
                  name="electricity"
                  value={newElectricity}
                  onChange={handleInputChange}
                  placeholder="Enter electricity usage"
                />
              </div>
              <div className="input-group">
                <label htmlFor="gas">Gas (kWh): </label>
                <input
                  type="number"
                  id="gas"
                  name="gas"
                  value={newGas}
                  onChange={handleInputChange}
                  placeholder="Enter gas usage"
                />
              </div>
              <div className="input-group">
                <label htmlFor="water">Water (Liters): </label>
                <input
                  type="number"
                  id="water"
                  name="water"
                  value={newWater}
                  onChange={handleInputChange}
                  placeholder="Enter water usage"
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="history">
            <h3>Energy Usage History</h3>
            {history.length === 0 ? (
              <p>No entries yet. Submit data to see history.</p>
            ) : (
              <ul>
                {history.map((entry, index) => (
                  <li key={index} className="history-entry">
                    <p><strong>Month {index + 1}:</strong></p>
                    <p>Electricity: {entry.electricity} kWh</p>
                    <p>Gas: {entry.gas} kWh</p>
                    <p>Water: {entry.water} Liters</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyUsage;
