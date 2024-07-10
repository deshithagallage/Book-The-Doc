import React, { useState, useEffect } from "react";
import styles from '../categories.module.css';
import axios from "axios";
import pediatricianImage from '../../../../images/DoctorImages/pediatrician.png';
import Navbar from "../../../../components/Navbar/Navbar";

function Pediatrician() {
  const [searchQuery, setSearchQuery] = useState("");
  const [pediatriciansData, setPediatriciansData] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const filteredPediatricians = pediatriciansData.filter(pediatrician =>
    pediatrician.name.toLowerCase().includes(searchQuery.toLowerCase())
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
      .get("http://localhost:3000/api/doctors/specialization/pediatrician")
      .then((res) => {
        setPediatriciansData(res.data);
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
                  <li key={index} onClick={() => handleDoctorClick(pediatrician)}>
                    {pediatrician.name}
                  </li>
                ))
              ) : (
                <li>No pediatricians found</li>
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

export default Pediatrician;
