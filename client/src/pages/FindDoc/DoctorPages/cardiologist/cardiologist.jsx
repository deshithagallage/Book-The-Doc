import React, { useState, useEffect } from "react";
import styles from "../categories.module.css"; // Updated to CSS module
import axios from "axios";

import cardiologistImage from "../../../../images/DoctorImages/cardiologist.jpg";

import Navbar from "../../../../components/Navbar/Navbar"; // Assuming this is the correct path to the Navbar component

function Cardiologist() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cardiologistsData, setCardiologistsData] = useState([]);
  const cardiologists = cardiologistsData.map((doctor) => doctor.name);

  const filteredCardiologists = cardiologists.filter((cardiologist) =>
    cardiologist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/doctors/specialization/cardiologist")
      .then((res) => {
        setCardiologistsData(res.data);
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
            value={searchQuery}
            onChange={handleSearchInputChange}
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>🔍</button>
        </div>

        <div className={styles.space}></div>

        <div className={styles.contentContainer}>
          <div className={styles.doctorImage}>
            <img src={cardiologistImage} alt="Cardiologist" />
          </div>

          <div className={styles.categorySection}>
            <h2>Cardiologists</h2>
            <p>
              Our expert cardiologists specialize in diagnosing and treating
              diseases of the cardiovascular system.
            </p>
            <ul>
              {filteredCardiologists.length > 0 ? (
                filteredCardiologists.map((cardiologist, index) => (
                  <li key={index}>{cardiologist}</li>
                ))
              ) : (
                <li>No cardiologists found</li>
              )}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cardiologist;
