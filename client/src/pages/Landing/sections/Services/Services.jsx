import React from "react";
import styles from "./Services.module.css";

import serviceImg1 from "../../../../assets/service1Img.png"; // replace with your image path
import serviceImg2 from "../../../../assets/service2Img.png"; // replace with your image path
import serviceImg3 from "../../../../assets/service3Img.png"; // replace with your image path

function Services() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Services</h1>
      <div className={styles.services}>
        <div className={styles.serviceBox}>
          <img
            src={serviceImg1}
            alt="Online Appointment Scheduling"
            className={styles.image}
          />
          <h2 className={styles.serviceTitle}>Online Appointment Scheduling</h2>
          <p className={styles.description}>
            Users can search for nearby doctors and schedule appointments online
            with ease. Receive a unique channel number to track your place in
            the queue and get real-time updates on your appointment status,
            reducing waiting times and improving your healthcare experience.
          </p>
        </div>
        <div className={styles.serviceBox}>
          <img
            src={serviceImg2}
            alt="Medical Center Listing"
            className={styles.image}
          />
          <h2 className={styles.serviceTitle}>Medical Center Listing</h2>
          <p className={styles.description}>
            Register your medical center on our platform to increase visibility
            and reach potential patients easily. Manage appointments, update
            queues in real-time, and provide seamless healthcare services
            through our user-friendly interface.
          </p>
        </div>
        <div className={styles.serviceBox}>
          <img
            src={serviceImg3}
            alt="Queue Management and Wait Time Prediction"
            className={styles.image}
          />
          <h2 className={styles.serviceTitle}>
            Queue Management and Wait Time Prediction
          </h2>
          <p className={styles.description}>
            Doctors and their receptionists can manage patient queues
            efficiently by updating ongoing queue numbers in real-time. Our
            system also uses machine learning to predict wait times, helping
            users plan their schedules better. Plus, get recommendations for
            nearby channeling centers based on your needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
