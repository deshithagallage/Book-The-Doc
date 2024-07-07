import React from "react";
import './FindDoc.css'; // Assuming you have a CSS file for styling

import cardiologistImage from '../../images/DoctorImages/cardiologist.jpg';
import pediatricianImage from '../../images/DoctorImages/pediatrician.png';
import neurologistImage from '../../images/DoctorImages/neurologist.jpg';
import logo from '../../images/logo.png';


function FindDoc() {
  return (
    <div className="find-doc-container">
      <header className="header">
        <div className="logo"><img src={logo} width = "180" height = "50" alt="logo" /></div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">How to use</a>
          <button className="login-button">Log In</button>
        </nav>
      </header>
      <main className="main-content">
        <div className="search-section">
          <input type="text" placeholder="Find Your Doctor" className="search-input" />
          <button className="search-button">🔍</button>
        </div>
        <br />
      
        <div className="doctor-image">
          <img src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg" alt="Doctor" />
        </div>
        <div className="category-section">
          <h2>Category</h2>
          <p>Find your doctor according to your need.</p>
          <div className="popular-categories">
            <h3>Popular</h3>
            <div className="category-cards">
              <div className="category-card">
                <img src={cardiologistImage} width = "100" height = "100" alt="Cardiologist" />
                <p>Cardiologists</p>
              </div>
              <div className="category-card">
                <img src={pediatricianImage} width = "100" height = "100" alt="Pediatrician" />
                <p>Pediatricians</p>
              </div>
              <div className="category-card">
                <img src={neurologistImage} width = "100" height = "100" alt="Neurologist" />
                <p>Neurologists</p>
              </div>
            </div>
          </div>
          <div className="alternative-section">
            <h3>Alternative you can try</h3>
            <div className="alternative-cards">
              {/* Replace the following with actual data */}
              <div className="alternative-card">Oncologist</div>
              <div className="alternative-card">Dermatologist</div>
              <div className="alternative-card">Radiologist</div>
              <div className="alternative-card">Psychiatrist</div>
              <div className="alternative-card">Ophthalmology</div>
              <div className="alternative-card">Other</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FindDoc;
