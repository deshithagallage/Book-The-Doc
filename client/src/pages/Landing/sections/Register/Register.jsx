import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

function Register() {
  const navigate = useNavigate();

  const handleRegisterButtonClick = () => {
    navigate("/register");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Get Started with Us!</h2>
      <p className={styles.paragraph}>
        Become a part of our growing healthcare network and experience the
        convenience of our innovative platform. Register today to find nearby
        doctors, schedule appointments with ease, and receive real-time updates
        on your appointment status. Whether you are a patient seeking quality
        care or a medical professional looking to streamline your practice, our
        platform offers the tools you need to enhance your healthcare
        experience.
      </p>
      <button className={styles.button} onClick={handleRegisterButtonClick}>
        Register Now
      </button>
    </div>
  );
}

export default Register;
