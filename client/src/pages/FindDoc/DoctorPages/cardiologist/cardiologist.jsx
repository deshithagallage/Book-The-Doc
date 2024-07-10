import React, { useState, useEffect } from "react";
import styles from "../categories.module.css"; // Updated to CSS module
import axios from "axios";

import cardiologistImage from "../../../../images/DoctorImages/cardiologist.jpg";
import Navbar from "../../../../components/Navbar/Navbar"; // Assuming this is the correct path to the Navbar component

function Cardiologist() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cardiologistsData, setCardiologistsData] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const filteredCardiologists = cardiologistsData.filter((cardiologist) =>
    cardiologist.name.toLowerCase().includes(searchQuery.toLowerCase())
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
      .get("http://localhost:3000/api/doctors/specialization/cardiologist")
      .then((res) => {
        setCardiologistsData(res.data);
        console.log(res.data);
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
                  <li key={index} onClick={() => handleDoctorClick(cardiologist)}>
                    {cardiologist.name}
                  </li>
                ))
              ) : (
                <li>No cardiologists found</li>
              )}
            </ul>
          </div>
        </div>
      </main>
      {selectedDoctor && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h4><b>{selectedDoctor.name}</b></h4>
            <div className={styles.space}></div>
            <p><strong>Qualifications:</strong> {selectedDoctor.qualifications}</p>
            <p><strong>SLMC Registration Number:</strong> {selectedDoctor.SLMCNumber}</p>
            <p><strong>Gender:</strong> {selectedDoctor.gender}</p>
            <button className={styles.closeButton} onClick={handleClosePopup}>Close</button>
            <br />
            <button className={styles.closeButton} onClick={handleClosePopup}>Book an Appointment</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cardiologist;
