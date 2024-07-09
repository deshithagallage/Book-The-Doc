import React, { useState } from "react";
import styles from '../categories.module.css'; // Import CSS module

import pediatricianImage from '../../../../images/DoctorImages/pediatrician.png';
import Navbar from "../../../../components/Navbar/Navbar"; // Assuming correct path to Navbar component

function Pediatrician() {
  const [searchQuery, setSearchQuery] = useState("");
  const pediatricians = [
    "Dr. John Smith",
    "Dr. Emily Davis",
    "Dr. Michael Brown",
    "Dr. Sarah Wilson",
    "Dr. David Johnson",
  ];

  const filteredPediatricians = pediatricians.filter(pediatrician =>
    pediatrician.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={styles.findDocContainer}>
      <Navbar />
      <main className={styles.mainContent}>
        <div className={styles.searchSection}>
          <input
            type="text"
            placeholder="Find Your Doctor"
            className={styles.searchInput}
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button className={styles.searchButton}>🔍</button>
        </div>

        <div className={styles.space}></div>

        <div className={styles.contentContainer}>
          <div className={styles.doctorImage}>
            <img src={pediatricianImage} alt="Pediatrician" />
          </div>

          <div className={styles.categorySection}>
            <h2>Pediatricians</h2>
            <p>Our expert pediatricians specialize in diagnosing and treating diseases in children.</p>
            <ul>
              {filteredPediatricians.length > 0 ? (
                filteredPediatricians.map((pediatrician, index) => (
                  <li key={index}>{pediatrician}</li>
                ))
              ) : (
                <li>No pediatricians found</li>
              )}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Pediatrician;
