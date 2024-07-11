import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserSidebar from "../Sidebar/UserSidebar.jsx";
import styles from "./UserDashboard.module.css";
import axios from "axios";
import Cookies from "js-cookie";
import Navbar from "../../../components/Navbar/Navbar";

import profilePic from "../../../assets/UserProfilePic.jpg";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton.jsx";

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

  const navigate = useNavigate();
  const handleDocButtonClick = () => {
    navigate("/find-doctor");
  };

  return (
    <div>
      <Navbar />
      <div className={styles.dashboard}>
        <div className={styles.sidebar}>
          <UserSidebar />
        </div>
        <div className={styles.main}>
          <div className={styles.header}>
            <h1>Hi, {user.name}..! 👋</h1>
          </div>
          <div className={styles.content}>
            <div className={styles.profile}>
              <div className={styles.userInfo}>
                <img
                  src={profilePic}
                  alt="User Profile"
                  className={styles.circleImg}
                />
                <div className={styles.details}>
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
              </div>
              <div className={styles.findDoctor}>
                <h2>Find Doctors</h2>
                <p>
                  Need medical assistance? Use the button below to find a doctor
                  relevant to your needs.
                </p>
                <div className={styles.buttonContainer}>
                  <PrimaryButton
                    text="Find a Doctor"
                    onClick={handleDocButtonClick}
                  />
                </div>
              </div>
              {/* <Link to="/find-doctor">
                <button className={styles["find-doc-button"]}>
                  Find a Doctor
                </button>
              </Link> */}
            </div>
            <div className={styles.appointments}>
              <div className={styles.appointmentsSection}>
                <h2>Upcoming Appointments</h2>
                {upcomingAppointments.length > 0 ? (
                  <ul>
                    {/* mul thuna witharak map krnn */}
                    {upcomingAppointments.slice(0, 3).map((appointment) => (
                      <li key={appointment._id} className={styles.upcoming}>
                        <p>
                          <strong>Doctor:</strong> {appointment.doctor}
                        </p>
                        <p>
                          <strong>Date:</strong>{" "}
                          {formatDate(appointment.date, 0)}
                        </p>
                        <p>
                          <strong>Time:</strong>{" "}
                          {formatDate(appointment.date, 1)}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.noAppointments}>
                    No upcoming appointments.
                  </p>
                )}
              </div>
              <div className={styles.appointmentsSection}>
                <h2>Past Appointments</h2>
                {pastAppointments.length > 0 ? (
                  <ul>
                    {pastAppointments.slice(0, 3).map((appointment) => (
                      <li key={appointment._id} className={styles.past}>
                        <p>
                          <strong>Doctor:</strong> {appointment.doctor}
                        </p>
                        <p>
                          <strong>Date:</strong>{" "}
                          {formatDate(appointment.date, 0)}
                        </p>
                        <p>
                          <strong>Time:</strong>{" "}
                          {formatDate(appointment.date, 1)}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.noAppointments}>No past appointments.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
