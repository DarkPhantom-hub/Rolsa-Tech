import React, { useState } from 'react';
import './CarbonCalculator.css';

const CarbonCalculator = () => {
  const [electricity, setElectricity] = useState('');
  const [gas, setGas] = useState('');
  const [water, setWater] = useState('');
  const [result, setResult] = useState(null);

  const calculateFootprint = () => {
    const footprint = (Number(electricity) * 0.4) + (Number(gas) * 2) + (Number(water) * 0.1);
    setResult(footprint.toFixed(2));
  };

  return (
    <div className="carbon-container">
      <h2>Carbon Footprint Calculator</h2>
      <p>Enter your monthly usage:</p>
      <input type="number" placeholder="Electricity (kWh)" value={electricity} onChange={(e) => setElectricity(e.target.value)} />
      <input type="number" placeholder="Gas (m³)" value={gas} onChange={(e) => setGas(e.target.value)} />
      <input type="number" placeholder="Water (liters)" value={water} onChange={(e) => setWater(e.target.value)} />
      <button onClick={calculateFootprint}>Calculate</button>
      {result && <p className="result">Estimated Carbon Footprint: {result} kg CO₂</p>}
    </div>
  );
};

export default CarbonCalculator;
