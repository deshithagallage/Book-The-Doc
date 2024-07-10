import React from "react";
import styles from './FindDoc.module.css';
import { useNavigate } from 'react-router-dom';

import cardiologistImage from "../../images/DoctorImages/cardiologist.jpg";
import pediatricianImage from "../../images/DoctorImages/pediatrician.png";
import neurologistImage from "../../images/DoctorImages/neurologist.jpg";
import oncologistImage from "../../images/DoctorImages/oncologist.png";
import dermatologistImage from "../../images/DoctorImages/dermatologist.png";
import radiologistImage from "../../images/DoctorImages/radiologist.jpeg";
import psychiatristImage from "../../images/DoctorImages/psychiatrist.jpeg";
import ophthalmologyImage from "../../images/DoctorImages/ophthalmology.jpeg";
import otherImage from "../../images/DoctorImages/otherdoctor.jpeg";

import Navbar from "../../components/Navbar/Navbar";

function FindDoc() {
  const navigate = useNavigate();

  const handleCardiologistButtonClick = () => {
    navigate('/find-doctor/cardiologist');
  };

  const handlePediatricianButtonClick = () => {
    navigate('/find-doctor/pediatrician');
  };

  const handleNeurologistButtonClick = () => {
    navigate('/find-doctor/neurologist');
  };

  return (
    <div className={styles['find-doc-container']}>
      <Navbar />
      <main className={styles['main-content']}>
        <div>
          <div className={styles['search-section']}>
            <input
              type="text"
              placeholder="Find Your Doctor"
              className={styles['search-input']}
            />
            <button className={styles['search-button']}>🔍</button>
          </div>

          <div className={styles['doctor-image']}>
            <img
              src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg"
              width="300"
              height="400"
              alt="Doctor"
            />
          </div>
        </div>

        <div className={styles['category-section']}>
          <h2>Category</h2>
          <p>
            <b>Find your doctor according to your need.</b>
          </p>
          <div className={styles['popular-categories']}>
            <h3>
              <b>Popular</b>
            </h3>
            <div className={styles['category-cards']}>
              <div className={styles['category-card']}>
                <button className={styles['cardiologist-button']} onClick={handleCardiologistButtonClick}>
                  <img src={cardiologistImage} width="100" height="100" alt="Cardiologist" />
                  <p><b>Cardiologist</b></p>
                </button>
              </div>
              <div className={styles['category-card']}>
                <button className={styles['pediatrician-button']} onClick={handlePediatricianButtonClick}>
                  <img src={pediatricianImage} width="100" height="100" alt="Pediatrician" />
                  <p><b>Pediatrician</b></p>
                </button>
              </div>
              <div className={styles['category-card']}>
                <button className={styles['neurologist-button']} onClick={handleNeurologistButtonClick}>
                  <img src={neurologistImage} width="100" height="100" alt="Neurologist" />
                  <p><b>Neurologist</b></p>
                </button>
              </div>
            </div>
          </div>
          <div className={styles['alternative-section']}>
            <h3>
              <b>Alternative you can try</b>
            </h3>
            <div className={styles['alternative-cards']}>
              <div className={styles['alternative-card']}>
                <img
                  src={oncologistImage}
                  width="100"
                  height="100"
                  alt="Oncologist"
                />
                <p>
                  <b>Oncologist</b>
                </p>
              </div>
              <div className={styles['alternative-card']}>
                <img
                  src={dermatologistImage}
                  width="100"
                  height="100"
                  alt="Dermatologist"
                />
                <p>
                  <b>Dermatologist</b>
                </p>
              </div>
              <div className={styles['alternative-card']}>
                <img
                  src={radiologistImage}
                  width="100"
                  height="100"
                  alt="Radiologist"
                />
                <p>
                  <b>Radiologist</b>
                </p>
              </div>
              <div className={styles['alternative-card']}>
                <img
                  src={psychiatristImage}
                  width="100"
                  height="100"
                  alt="Psychiatrist"
                />
                <p>
                  <b>Psychiatrist</b>
                </p>
              </div>
              <div className={styles['alternative-card']}>
                <img
                  src={ophthalmologyImage}
                  width="100"
                  height="100"
                  alt="Ophthalmology"
                />
                <p>
                  <b>Ophthalmology</b>
                </p>
              </div>
              <div className={styles['alternative-card']}>
                <img src={otherImage} width="100" height="100" alt="Other" />
                <p>
                  <b>Other</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FindDoc;
