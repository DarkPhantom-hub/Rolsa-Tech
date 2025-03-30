import React, { useState } from "react";
import "./booking.css";

const Booking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Booking confirmed for ${name} on ${date} at ${time}. Confirmation sent to ${email}.`);
  };

  return (
    <div className="booking-container">
      <h2>Book a Consultation</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        <select value={service} onChange={(e) => setService(e.target.value)} required>
          <option value="">Select Service</option>
          <option value="Consultation">Consultation</option>
          <option value="Strategy Session">Strategy Session</option>
        </select>
        <textarea placeholder="Special Requests" value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)} />
        <button type="submit">Book Now</button>
      </form>
      {message && <p className="confirmation-message">{message}</p>}
      <h3>User Reviews</h3>
    </div>
  );
};

export default Booking;