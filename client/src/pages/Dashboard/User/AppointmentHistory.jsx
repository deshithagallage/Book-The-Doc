/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import UserSidebar from "../Sidebar/UserSidebar.jsx";
import styles from "./AppointmentHistory.module.css";
import axios from "axios";
import Cookies from "js-cookie";

const AppointmentHistory = () => {
  const [appointments, setAppointments] = useState([]);
  const token = Cookies.get("token");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/appointments/patient", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => {
        setAppointments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const pastAppointments = appointments.filter(
    (appointment) => appointment.status !== "upcoming"
  );

  const formatDate = (dateString, index) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return null;
    } else {
      return date.toLocaleString().split(", ")[index];
    }
  };

  return (
    <div className={styles.appointmentHistory}>
      <UserSidebar />
      <div className={styles.content}>
        <h1>Appointment History</h1>
        <div className={styles.appointmentList}>
          {pastAppointments.length > 0 ? (
            pastAppointments.map((appointment) => (
              <div key={appointment._id} className={styles.appointmentItem}>
                <h2>{appointment.doctor}</h2>
                <p>
                  <strong>Date:</strong> {formatDate(appointment.date, 0)}
                </p>
                <p>
                  <strong>Time:</strong> {formatDate(appointment.date, 1)}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    className={`${styles.status} ${styles[appointment.status.toLowerCase()]}`}
                  >
                    {appointment.status}
                  </span>
                </p>
              </div>
            ))
          ) : (
            <p>No past appointments found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentHistory;
