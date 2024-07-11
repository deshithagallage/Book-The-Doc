import React from "react";
import styles from "./FindDoc.module.css";
import { useNavigate } from "react-router-dom";

import cardiologistImage from "../../assets/DoctorImages/cardiologist.jpg";
import pediatricianImage from "../../assets/DoctorImages/pediatrician.png";
import neurologistImage from "../../assets/DoctorImages/neurologist.jpg";
import oncologistImage from "../../assets/DoctorImages/oncologist.png";
import dermatologistImage from "../../assets/DoctorImages/dermatologist.png";
import radiologistImage from "../../assets/DoctorImages/radiologist.jpeg";
import psychiatristImage from "../../assets/DoctorImages/psychiatrist.jpeg";
import ophthalmologyImage from "../../assets/DoctorImages/ophthalmology.jpeg";
import GeneralImage from "../../assets/DoctorImages/otherdoctor.jpeg";

import Navbar from "../../components/Navbar/Navbar";

function FindDoc() {
  const navigate = useNavigate();

  const handleCardiologistButtonClick = () => {
    navigate("/find-doctor/cardiologist");
  };

  const handlePediatricianButtonClick = () => {
    navigate("/find-doctor/pediatrician");
  };

  const handleGeneralDoctorButtonClick = () => {
    navigate("/find-doctor/generalDoctor");
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.doctorImg}>
          <img
            src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg"
            alt="Doctor"
          />
        </div>
        <div className={styles.categories}>
          <div className={styles.title}>
            <h2>Category</h2>
            <p>Find your doctor according to your need.</p>
          </div>
          <div className={styles.popular}>
            <h3>Popular</h3>
            <div className={styles.popularCards}>
            <div className={styles.popularCard}
                onClick={handleGeneralDoctorButtonClick}
              >
                <img src={GeneralImage} width="100" height="100" alt="Other" />
                <p>General</p>
              </div>
              
              <div
                className={styles.popularCard}
                onClick={handleCardiologistButtonClick}
              >
                
                <img src={cardiologistImage} alt="Cardiologist" />
                <p>Cardiologist</p>
              </div>
              <div
                className={styles.popularCard}
                onClick={handlePediatricianButtonClick}
              >
                <img src={pediatricianImage} alt="Pediatrician" />
                <p>Pediatrician</p>
              </div>
            </div>
          </div>
          <div className={styles.alternative}>
            <h3>Alternative You Can Try</h3>
            <div className={styles.alternativeCards}>
              <div className={styles.alternativeCard}>
                <img
                  src={oncologistImage}
                  width="100"
                  height="100"
                  alt="Oncologist"
                />
                <p>Oncologist</p>
              </div>
              <div className={styles.alternativeCard}>
                <img
                  src={dermatologistImage}
                  width="100"
                  height="100"
                  alt="Dermatologist"
                />
                <p>Dermatologist</p>
              </div>
              <div className={styles.alternativeCard}>
                <img
                  src={radiologistImage}
                  width="100"
                  height="100"
                  alt="Radiologist"
                />
                <p>Radiologist</p>
              </div>
              <div className={styles.alternativeCard}>
                <img
                  src={psychiatristImage}
                  width="100"
                  height="100"
                  alt="Psychiatrist"
                />
                <p>Psychiatrist</p>
              </div>
              <div className={styles.alternativeCard}>
                <img
                  src={ophthalmologyImage}
                  width="100"
                  height="100"
                  alt="Ophthalmology"
                />
                <p>Ophthalmology</p>
              </div>
              <div
                className={styles.alternativeCard}>
                <img src={neurologistImage} alt="Neurologist" />
                <p>Neurologist</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FindDoc;
