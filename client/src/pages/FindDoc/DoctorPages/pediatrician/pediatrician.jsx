import React, { useState, useEffect } from "react";
import styles from "../categories.module.css"; // Import CSS module
import axios from "axios";

import pediatricianImage from "../../../../assets/DoctorImages/pediatrician.png";
import Navbar from "../../../../components/Navbar/Navbar"; // Assuming correct path to Navbar component

function Pediatrician() {
  const [searchQuery, setSearchQuery] = useState("");
  const [pediatriciansData, setPediatriciansData] = useState([]);
  const pediatricians = pediatriciansData.map((doctor) => doctor.name);

  const filteredPediatricians = pediatricians.filter((pediatrician) =>
    pediatrician.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/doctors/specialization/pediatrician")
      .then((res) => {
        setPediatriciansData(res.data);
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
            <img src={pediatricianImage} alt="Pediatrician" />
          </div>

          <div className={styles.categorySection}>
            <h2>Pediatricians</h2>
            <p>
              Our expert pediatricians specialize in diagnosing and treating
              diseases in children.
            </p>
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
