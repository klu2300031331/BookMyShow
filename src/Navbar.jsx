import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
<link rel="stylesheet" href="home.css"></link>

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">🎬 MovieTime</div>
      <ul className="navbar-links">
        <li><a href="/user-dashboard">Home</a></li>
        <li><a href="/booking-orders">Bookings</a></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
