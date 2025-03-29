import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Booking confirmed for ${name} on ${date}. Confirmation sent to ${email}.`);
  };

  return (
    <div className="booking-container">
      <h2>Book a Consultant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <button type="submit">Book Now</button>
      </form>
      {message && <p className="confirmation-message">{message}</p>}
    </div>
  );
};

export default Booking;