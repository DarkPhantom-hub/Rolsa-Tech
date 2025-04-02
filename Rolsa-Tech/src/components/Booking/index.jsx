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
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset any previous error message
    
    // Basic validations
    if (!name || !email || !date || !time || !service) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    if (new Date(date) < new Date()) {
      setErrorMessage("You cannot book a consultation in the past.");
      return;
    }

    setMessage(`Booking confirmed for ${name} on ${date} at ${time}. Confirmation sent to ${email}.`);
    
    // Reset form
    setName("");
    setEmail("");
    setDate("");
    setTime("");
    setService("");
    setSpecialRequests("");
  };

  return (
    <div className="booking-container">
      <h2>Book a Consultation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          aria-label="Name"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          aria-label="Consultation Date"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          aria-label="Consultation Time"
        />
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
          aria-label="Consultation Type"
        >
          <option value="">Select Service</option>
          <option value="Consultation">Consultation</option>
          <option value="Strategy Session">Strategy Session</option>
        </select>
        <textarea
          placeholder="Special Requests"
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          aria-label="Special Requests"
        />
        <button type="submit">Book Now</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {message && <p className="confirmation-message">{message}</p>}
    </div>
  );
};

export default Booking;
