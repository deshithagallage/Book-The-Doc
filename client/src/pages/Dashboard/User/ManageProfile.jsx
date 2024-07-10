/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import UserSidebar from "../Sidebar/UserSidebar.jsx";
import styles from "./ManageProfile.module.css"; // Updated import
import Navbar from "../../../components/Navbar/Navbar";
import profilePic from "../../../../src/assets/image.png";

const ManageProfile = () => {
  const [user, setUser] = useState({
    username: "JohnDoe",
    email: "john.doe@example.com",
    profilePicture: profilePic,
    name: "John Doe",
    age: 30,
    city: "New York",
    totalAppointments: 15,
    previousDoctors: ["Dr. Alice Williams", "Dr. Robert Davis"],
    sugarLevel: 90, // mg/dL
  });

  const [isEditing, setIsEditing] = useState(false);
  const [userProfiles, setUserProfiles] = useState([user]); // Array to store user profiles

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Save the updated user details to the array
    setUserProfiles([...userProfiles, user]);
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Revert to the original user details (assuming the last profile in the array is the latest saved profile)
    setUser(userProfiles[userProfiles.length - 1]);
    setIsEditing(false);
  };

  return (
    <div>
      <Navbar />
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
                    Username:
                    <input
                      type="text"
                      name="username"
                      value={user.username}
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
                    Name:
                    <input
                      type="text"
                      name="name"
                      value={user.name}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Age:
                    <input
                      type="number"
                      name="age"
                      value={user.age}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    City:
                    <input
                      type="text"
                      name="city"
                      value={user.city}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Total Appointments:
                    <input
                      type="number"
                      name="totalAppointments"
                      value={user.totalAppointments}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Sugar Level (mg/dL):
                    <input
                      type="number"
                      name="sugarLevel"
                      value={user.sugarLevel}
                      onChange={handleChange}
                    />
                  </label>
                  <div className={styles.buttons}>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                  </div>
                </div>
              ) : (
                <div className={styles.viewForm}>
                  <p>
                    <strong>Username:</strong> {user.username}
                  </p>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Name:</strong> {user.name}
                  </p>
                  <p>
                    <strong>Age:</strong> {user.age}
                  </p>
                  <p>
                    <strong>City:</strong> {user.city}
                  </p>
                  <p>
                    <strong>Total Appointments:</strong>{" "}
                    {user.totalAppointments}
                  </p>
                  <p>
                    <strong>Previous Doctors:</strong>{" "}
                    {user.previousDoctors.join(", ")}
                  </p>
                  <p>
                    <strong>Sugar Level:</strong> {user.sugarLevel} mg/dL
                  </p>
                  <button onClick={handleEdit}>Edit</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProfile;
