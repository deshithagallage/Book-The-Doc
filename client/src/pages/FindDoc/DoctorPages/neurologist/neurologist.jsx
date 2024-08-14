import React, { useState, useEffect } from "react";
import styles from "../categories.module.css";
import axios from "axios";

import neurologistImage from "../../../../assets/DoctorImages/neurologist.jpg";
import Navbar from "../../../../components/Navbar/Navbar";

function Neurologist() {
  const [searchQuery, setSearchQuery] = useState("");
  const [neurologistsData, setNeurologistsData] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const filteredNeurologists = neurologistsData.filter((neurologist) =>
    neurologist.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleClosePopup = () => {
    setSelectedDoctor(null);
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
    <div className={styles.container}>
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
        <div className={styles.contentContainer}>
          <div className={styles.doctorImage}>
            <img src={neurologistImage} alt="Neurologist" />
          </div>
          <div className={styles.categorySection}>
            <div className={styles.title}>
              <h2>Neurologists</h2>
              <p>
                Our expert neurologists specialize in diagnosing and treating
                diseases of the nervous system.
              </p>
            </div>
            <ul>
              {filteredNeurologists.length > 0 ? (
                filteredNeurologists.map((neurologist, index) => (
                  <li
                    key={index}
                    onClick={() => handleDoctorClick(neurologist)}
                  >
                    {neurologist.name}
                  </li>
                ))
              ) : (
                <li>No neurologists found</li>
              )}
            </ul>
          </div>
        </div>
      </main>
      {selectedDoctor && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h4>
              <b>{selectedDoctor.name}</b>
            </h4>
            <div className={styles.space}></div>
            <p>
              <strong>Qualifications:</strong> {selectedDoctor.qualifications}
            </p>
            <p>
              <strong>SLMC Registration Number:</strong>{" "}
              {selectedDoctor.SLMCNumber}
            </p>
            <p>
              <strong>Gender:</strong> {selectedDoctor.gender}
            </p>
            <button className={styles.closeButton} onClick={handleClosePopup}>
              Close
            </button>
            <br />
            <button className={styles.closeButton} onClick={handleClosePopup}>
              Book an Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Neurologist;
