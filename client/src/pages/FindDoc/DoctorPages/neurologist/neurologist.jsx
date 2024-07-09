import React, { useState } from "react";
import styles from '../categories.module.css'; // Import CSS module

import neurologistImage from '../../../../images/DoctorImages/neurologist.jpg';
import Navbar from "../../../../components/Navbar/Navbar"; // Assuming correct path to Navbar component

function Neurologist() {
  const [searchQuery, setSearchQuery] = useState("");
  const neurologists = [
    "Dr. John Smith",
  "Dr. Emily Davis",
  "Dr. Michael Brown",
  "Dr. Sarah Wilson",
  "Dr. David Johnson",
  "Dr. Jessica Lee",
  "Dr. Andrew Miller",
  "Dr. Olivia Clark",
  "Dr. Benjamin Garcia",
  "Dr. Sophia Martinez",
  "Dr. Ethan Thompson",
  "Dr. Isabella White",
  "Dr. Jacob Harris",
  "Dr. Mia Lopez",
  "Dr. Alexander Robinson",
  "Dr. Ava Young",
  ];

  const filteredNeurologists = neurologists.filter(neurologist =>
    neurologist.toLowerCase().includes(searchQuery.toLowerCase())
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
            <img src={neurologistImage} alt="Neurologist" />
          </div>

          <div className={styles.categorySection}>
            <h2>Neurologists</h2>
            <p>Our expert neurologists specialize in diagnosing and treating diseases of the nervous system.</p>
            <ul>
              {filteredNeurologists.length > 0 ? (
                filteredNeurologists.map((neurologist, index) => (
                  <li key={index}>{neurologist}</li>
                ))
              ) : (
                <li>No neurologists found</li>
              )}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Neurologist;
