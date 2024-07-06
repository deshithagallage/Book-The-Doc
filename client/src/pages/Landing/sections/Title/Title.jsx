import React from "react";
import { useNavigate } from "react-router-dom";
import titleImg from "../../../../assets/landingImage.png";
import styles from "./Title.module.css";

function Title() {
  const navigate = useNavigate();

  const handleDocButtonClick = () => {
    navigate("/find-doctor");
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.title1}>One Step Solution</h1>
        <h1>
          for all your <br />
          medical needs.
        </h1>
        <p className={styles.description}>
          Your Gateway to Convenient Doctor <br />
          Appointments
        </p>
        <div className={styles.buttonContainer}>
          <button
            className={styles.doctorButton}
            onClick={handleDocButtonClick}
          >
            Find a Doctor
          </button>
        </div>
      </div>
      <div className={styles.image}>
        <img src={titleImg} alt="Medical" />
      </div>
    </div>
  );
}

export default Title;
