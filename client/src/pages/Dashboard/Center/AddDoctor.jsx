/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import Cookie from "js-cookie";
import styles from "./AddDoctor.module.css"; // Import the CSS module
import Navbar from "../../../components/Navbar/Navbar.jsx";
import CenterSidebar from "../Sidebar/CenterSidebar.jsx";

const AddDoctor = () => {
  const token = Cookie.get("token");
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    qualifications: "",
    gender: "",
  });

  const specializations = [
    "cardiologist",
    "dermatologist",
    "neurologist",
    "pediatrician",
    "oncologist",
    "radiologist",
    "psychiatrist",
    "ophthalmology",
    "general",
    // Add more specializations as needed
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "x-auth-token": token,
        },
      };
      const res = await axios.post(
        "http://localhost:3000/api/doctors/adddoc",
        formData,
        config
      );
      console.log(res.data); // Handle success scenario
    } catch (err) {
      console.error("Error adding doctor:", err);
      // Handle error scenario
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      specialization: "",
      qualifications: "",
      gender: "",
    });
  };

  return (
    <div>
      <Navbar />
      <div className="flex w-full h-full">
        <div className="w-[17%] h-full">
          <CenterSidebar />
        </div>
        <div className="w-[83%] h-full my-24 flex flex-col justify-center items-center">
          <form className={styles.Form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <h2 className={styles.h2tag}>Add New Doctor</h2>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="specialization">Specialization:</label>
              <select
                id="specialization"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                required
              >
                <option value="">Select Specialization</option>
                {specializations.map((specialization) => (
                  <option key={specialization} value={specialization}>
                    {specialization}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="qualifications">Qualifications:</label>
              <input
                type="text"
                id="qualifications"
                name="qualifications"
                value={formData.qualifications}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <div className={styles.buttonContainer}>
                <button className={styles.Save} type="submit">
                  Save
                </button>
                <br />
                <button
                  className={styles.Cancel}
                  type="button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
