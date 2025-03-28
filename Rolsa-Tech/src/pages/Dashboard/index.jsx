import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <p>Please login to access the dashboard.</p>;
  }

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <ul>
        <li><a href="/bills">Gas, Electricity, Water Bills</a></li>
        <li><a href="/consultant">Book a Consultant</a></li>
        <li><a href="/carbon">Carbon Footprint Calculator</a></li>
      </ul>
    </div>
  );
};

export default Dashboard;
