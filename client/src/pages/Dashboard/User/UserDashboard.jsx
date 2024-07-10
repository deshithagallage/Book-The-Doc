/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserSidebar from "../Sidebar/UserSidebar.jsx";
import styles from "./UserDashboard.module.css"; // Import styles from module.css
import axios from "axios";
import Cookies from "js-cookie";
import Navbar from "../../../components/Navbar/Navbar";

const UserDashboard = () => {
  const [user, setUser] = useState({});
  const token = Cookies.get("token");
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/patients/patient", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/appointments/patient", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => {
        setAppointments(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const upcomingAppointments = appointments.filter(
    (appointment) => appointment.status === "upcoming"
  );
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
    <div>
      <Navbar />
      <div className={styles.dashboard}>
        <UserSidebar />
        <div className={styles.content}>
          <h1>User Dashboard</h1>
          <img
            src={user.profilePicture}
            alt="Profile"
            className={styles["profile-picture"]}
          />
          <div className={styles["user-info"]}>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Birthday:</strong> {formatDate(user.dob)}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
          </div>
          <Link to="/find-doctor">
            <button className={styles["find-doc-button"]}>Find a Doctor</button>
          </Link>
          <div className={styles["appointments-section"]}>
            <h2>Upcoming Appointments</h2>
            {upcomingAppointments.length > 0 ? (
              <ul>
                {/* mul thuna witharak map krnn */}
                {upcomingAppointments.map((appointment) => (
                  <li key={appointment._id}>
                    <p>
                      <strong>Doctor:</strong> {appointment.doctor}
                    </p>
                    <p>
                      <strong>Date:</strong> {formatDate(appointment.date, 0)}
                    </p>
                    <p>
                      <strong>Time:</strong> {formatDate(appointment.date, 1)}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles["no-appointments"]}>
                No upcoming appointments.
              </p>
            )}
          </div>
          <div className={styles["appointments-section"]}>
            <h2>Past Appointments</h2>
            {pastAppointments.length > 0 ? (
              <ul>
                {pastAppointments.map((appointment) => (
                  <li key={appointment._id}>
                    <p>
                      <strong>Doctor:</strong> {appointment.doctor}
                    </p>
                    <p>
                      <strong>Date:</strong> {formatDate(appointment.date, 0)}
                    </p>
                    <p>
                      <strong>Time:</strong> {formatDate(appointment.date, 1)}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles["no-appointments"]}>No past appointments.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
