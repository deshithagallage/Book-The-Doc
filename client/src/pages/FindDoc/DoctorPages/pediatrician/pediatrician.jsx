import React from "react";
import './pediatrician.css'; // Assuming you have a CSS file for styling

import pediatricianImage from '../../../../images/DoctorImages/pediatrician.png';
import logo from '../../../../images/logo.png';

function Pediatrician() {
  return (
    <div className="find-doc-container">
      <header className="header">
        <div className="logo">
          <img src={logo} width="180" height="50" alt="logo" />
        </div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">How to use</a>
          <button className="login-button">Log In</button>
        </nav>
      </header>
      <main className="main-content">
        <div>
        <div className="search-section">
          <input type="text" placeholder="Find Your Doctor" className="search-input" />
          <button className="search-button">🔍</button>
        </div>
        
        <div className="doctor-image">
          <img src={pediatricianImage} width="300" height="300" alt="Pediatrician" />
        </div>
        </div>

        <div className="category-section">
          <h2>Pediatricians</h2>
          <p>Our expert pediatricians specialize in diagnosing and treating diseases in children.</p>
          <ul>
            <li>Dr. John Smith</li>
            <li>Dr. Emily Davis</li>
            <li>Dr. Michael Brown</li>
            <li>Dr. Sarah Wilson</li>
            <li>Dr. David Johnson</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Pediatrician;