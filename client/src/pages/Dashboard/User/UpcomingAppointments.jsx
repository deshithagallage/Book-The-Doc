/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import UserSidebar from "../Sidebar/UserSidebar.jsx";
import styles from "./UpcomingAppointments.module.css";
import axios from "axios";
import Cookies from "js-cookie";
import Navbar from "../../../components/Navbar/Navbar";

const UpcomingAppointments = () => {
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

  const upcomingAppointments = appointments.filter(
    (appointment) => appointment.status === "upcoming"
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
    <div>
      <Navbar />
      <div className={styles.dashboard}>
        <UserSidebar />
        <div className={styles.main}>
          <h1>Upcoming Appointments</h1>
          <div className={styles.appointmentList}>
            {upcomingAppointments.length > 0 ? (
              upcomingAppointments.map((appointment) => (
                <div
                  key={appointment._id}
                  className={`${styles.appointmentItem} ${styles.upcoming}`}
                >
                  <div className={styles.queueNumber}>
                    <h2>{appointment.queueNumber}</h2>
                  </div>
                  <div className={styles.details}>
                    <h2>{appointment.doctor}</h2>
                    <p>
                      <strong>Date:</strong> {formatDate(appointment.date, 0)}
                    </p>
                    <p>
                      <strong>Time:</strong> {formatDate(appointment.date, 1)}
                    </p>
                    <p>
                      <strong>Status:</strong>{" "}
                      <span className={`${styles.status} ${styles[appointment.status.toLowerCase()]}`}>
                        {appointment.status}
                      </span>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No upcoming appointments found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointments;
