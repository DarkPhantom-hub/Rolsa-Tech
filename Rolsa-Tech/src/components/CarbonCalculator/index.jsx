import React, { useState } from 'react';
import './CarbonCalculator.css';

const CarbonCalculator = () => {
  const [electricity, setElectricity] = useState('');
  const [gas, setGas] = useState('');
  const [water, setWater] = useState('');
  const [transportation, setTransportation] = useState('');
  const [food, setFood] = useState('');
  const [region, setRegion] = useState('US');
  const [result, setResult] = useState(null);
  const [feedback, setFeedback] = useState('');

  const emissionCoefficients = {
    'US': { electricity: 0.4, gas: 2, water: 0.1, transportation: 0.5, food: 0.2 },
    'EU': { electricity: 0.3, gas: 1.8, water: 0.09, transportation: 0.4, food: 0.18 },
    'India': { electricity: 0.5, gas: 2.5, water: 0.12, transportation: 0.6, food: 0.25 }
  };

  const isValidNumber = (value) => !isNaN(value) && Number(value) >= 0;

  const calculateFootprint = () => {
    if (
      !isValidNumber(electricity) || !isValidNumber(gas) || !isValidNumber(water) || 
      !isValidNumber(transportation) || !isValidNumber(food)
    ) {
      alert('Please enter valid positive numbers for all fields.');
      return;
    }

    const selectedRegion = emissionCoefficients[region];
    const footprint = 
      (Number(electricity) * selectedRegion.electricity) + 
      (Number(gas) * selectedRegion.gas) + 
      (Number(water) * selectedRegion.water) +
      (Number(transportation) * selectedRegion.transportation) +
      (Number(food) * selectedRegion.food);

    setResult(footprint.toFixed(2));

    let feedbackMessage = "Low Footprint";
    if (footprint > 100) feedbackMessage = "High Footprint";
    else if (footprint > 50) feedbackMessage = "Moderate Footprint";
    setFeedback(feedbackMessage);
  };

  const getSuggestions = (footprint) => {
    if (footprint > 100) return "Consider reducing energy consumption and using eco-friendly transport options.";
    else if (footprint > 50) return "You're doing well! Keep up the energy-saving habits.";
    else return "Great job! You're living sustainably!";
  };

  const suggestions = result ? getSuggestions(result) : '';

  return (
    <div className="carbon-container">
      <h2>Carbon Footprint Calculator</h2>
      <p>Enter your monthly usage:</p>
      <input 
        type="number" 
        placeholder="Electricity (kWh)" 
        value={electricity} 
        onChange={(e) => setElectricity(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Gas (m³)" 
        value={gas} 
        onChange={(e) => setGas(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Water (liters)" 
        value={water} 
        onChange={(e) => setWater(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Transportation (km)" 
        value={transportation} 
        onChange={(e) => setTransportation(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Food (kg)" 
        value={food} 
        onChange={(e) => setFood(e.target.value)} 
      />
      <select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value="US">US</option>
        <option value="EU">EU</option>
        <option value="India">India</option>
      </select>
      <button onClick={calculateFootprint}>Calculate</button>
      
      {result && (
        <div>
          <p className="result">Estimated Carbon Footprint: {result} kg CO₂</p>
          <p className={`feedback ${feedback.toLowerCase()}`}>{feedback}</p>
          <p>{suggestions}</p>
        </div>
      )}
    </div>
  );
};

export default CarbonCalculator;
