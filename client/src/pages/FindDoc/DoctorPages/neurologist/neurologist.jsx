import React, { useState, useEffect } from "react";
import styles from "../categories.module.css"; // Import CSS module
import axios from "axios";

import neurologistImage from "../../../../assets/DoctorImages/neurologist.jpg";
import Navbar from "../../../../components/Navbar/Navbar"; // Assuming correct path to Navbar component

function Neurologist() {
  const [searchQuery, setSearchQuery] = useState("");
  const [neurologistsData, setNeurologistsData] = useState([]);
  const neurologists = neurologistsData.map((doctor) => doctor.name);

  const filteredNeurologists = neurologists.filter((neurologist) =>
    neurologist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/doctors/specialization/neurologist")
      .then((res) => {
        setNeurologistsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
            <p>
              Our expert neurologists specialize in diagnosing and treating
              diseases of the nervous system.
            </p>
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
