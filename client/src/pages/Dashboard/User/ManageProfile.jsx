/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import UserSidebar from "../Sidebar/UserSidebar.jsx";
import styles from "./ManageProfile.module.css"; // Updated import
import axios from "axios";
import Cookies from "js-cookie";

const ManageProfile = () => {
  const token = Cookies.get("token");
  const [user, setUser] = useState({});
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

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Add save logic here (e.g., API call to save user details)
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Add cancel logic here (e.g., revert to original user details)
    setIsEditing(false);
  };

  const calculateAge = (dateString) => {
    const birthDate = new Date(dateString);
    if (isNaN(birthDate.getTime())) {
      return null;
    } else {
      const ageDiffMs = Date.now() - birthDate.getTime();
      const ageDate = new Date(ageDiffMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  };

  const upcomingAppointmentsCount = appointments.filter(
    (appointment) => appointment.status === "upcoming"
  ).length;
  const pastAppointmentsCount = appointments.filter(
    (appointment) => appointment.status === "completed"
  ).length;

  return (
    <div className={styles.manageProfile}>
      <UserSidebar />
      <div className={styles.content}>
        <h1>Manage Profile</h1>
        <div className={styles.profileContainer}>
          <img
            src={user.profilePicture}
            alt="Profile"
            className={styles.profilePicture}
          />
          <div className={styles.profileDetails}>
            {isEditing ? (
              <div className={styles.editForm}>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Age:
                  <input
                    type="number"
                    name="age"
                    value={calculateAge(user.dob)}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Age:
                  <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                  />
                </label>
                {/* <label>
                  City:
                  <input
                    type="text"
                    name="city"
                    value={user.city}
                    onChange={handleChange}
                  />
                </label> */}
                <div className={styles.buttons}>
                  <button onClick={handleSave}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </div>
              </div>
            ) : (
              <div className={styles.viewForm}>
                <p>
                  <strong>Name:</strong> {user.name}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Age:</strong> {calculateAge(user.dob)}
                </p>
                <p>
                  <strong>Phone:</strong> {user.phone}
                </p>
                {/* <p>
                  <strong>City:</strong> {user.city}
                </p> */}
                <p>
                  <strong>Total Ongoing Appointments:</strong>{" "}
                  {upcomingAppointmentsCount}
                </p>
                <p>
                  <strong>Total Past Appointments:</strong>{" "}
                  {pastAppointmentsCount}
                </p>
                <button onClick={handleEdit}>Edit</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProfile;
