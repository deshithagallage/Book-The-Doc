import React from "react";
import './cardiologist.css'; // Assuming you have a CSS file for styling

import neurologistImage from '../../../../images/DoctorImages/cardiologist.jpg';
import logo from '../../../../images/logo.png';

function Cardiologist() {
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
          <img src={neurologistImage} width="300" height="300" alt="Cardiologist" />
        </div>
        </div>

        <div className="category-section">
          <h2>Cardiologists</h2>
          <p>Our expert cardiologists specialize in diagnosing and treating diseases of the cardiovascular system.</p>
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

export default Cardiologist;
