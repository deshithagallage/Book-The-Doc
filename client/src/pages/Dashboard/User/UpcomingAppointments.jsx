/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import UserSidebar from "../Sidebar/UserSidebar.jsx";
import styles from "./UpcomingAppointments.module.css"; // Updated import
import axios from "axios";
import Navbar from "../../../components/Navbar/Navbar";

const UpcomingAppointments = () => {
  const [appointments, setAppointments] = useState([
    {
      _id: 1,
      doctor: "Dr. Sarah Connor",
      date: "2024-07-15T09:00:00Z",
      time: "9:00 AM",
      status: "Upcoming",
    },
    {
      _id: 2,
      doctor: "Dr. James Cameron",
      date: "2024-07-20T14:00:00Z",
      time: "2:00 PM",
      status: "Upcoming",
    },
    {
      _id: 3,
      doctor: "Dr. Ellen Ripley",
      date: "2024-07-25T11:00:00Z",
      time: "11:00 AM",
      status: "Upcoming",
    },
  ]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/appointments/upcoming"
        );
        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <Navbar />
      <div
        className={
          sidebarOpen
            ? `${styles.upcomingAppointments} ${styles.sidebarOpen}`
            : styles.upcomingAppointments
        }
      >
        <UserSidebar />
        <div className={styles.content}>
          <h1 className={styles.appointmentstag}>Upcoming Appointments</h1>
          <div className={styles.appointmentList}>
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
                <div key={appointment._id} className={styles.appointmentItem}>
                  <h2>{appointment.doctor}</h2>
                  <p>
                    <strong>Date:</strong>{" "}
                    {new Date(appointment.date).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Time:</strong> {appointment.time}
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
              <p>No upcoming appointments found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointments;
