/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import CenterSidebar from "../Sidebar/CenterSidebar.jsx";
import styles from "./DoctorManagement.module.css";
import Navbar from "../../../components/Navbar/Navbar.jsx";

const DoctorManagement = () => {
  const navigate = useNavigate();

  const handleEditDoctor = (doctorId) => {
    navigate(`/dashboard/center/doctors/edit/${doctorId}`);
  };

  const handleAddDoctor = () => {
    navigate(`/dashboard/center/doctors/new`);
  };

  // Dummy doctor data
  const doctors = [
    { id: 1, name: "Dr. John Doe", timeslots: ["9am - 12pm", "2pm - 5pm"] },
    { id: 2, name: "Dr. Jane Smith", timeslots: ["10am - 1pm", "3pm - 6pm"] },
  ];

  return (
    <div>
      <Navbar />
      <div className={styles.doctorManagement}>
        <CenterSidebar />
        <div className={styles.content}>
          <h1>Doctor Management</h1>
          <div className={styles.doctorList}>
            {doctors.map((doctor) => (
              <div key={doctor.id} className={styles.doctorCard}>
                <h2>{doctor.name}</h2>
                <p>Timeslots:</p>
                <ul>
                  {doctor.timeslots.map((slot, index) => (
                    <li key={index}>{slot}</li>
                  ))}
                </ul>
                <button
                  className={styles.Edit}
                  onClick={() => handleEditDoctor(doctor.id)}
                >
                  Edit
                </button>
              </div>
            ))}
          </div>
          <button className={styles.addDoctor} onClick={handleAddDoctor}>
            Add New Doctor
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorManagement;
