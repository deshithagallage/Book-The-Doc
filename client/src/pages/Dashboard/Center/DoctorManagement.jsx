/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CenterSidebar from '../Sidebar/CenterSidebar.jsx';
import './DoctorManagement.css';

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
    { id: 1, name: 'Dr. John Doe', timeslots: ['9am - 12pm', '2pm - 5pm'] },
    { id: 2, name: 'Dr. Jane Smith', timeslots: ['10am - 1pm', '3pm - 6pm'] },
  ];

  return (
    <div className="doctor-management">
      <CenterSidebar />
      <div className="content">
        <h1>Doctor Management</h1>
        <div className="doctor-list">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <h2>{doctor.name}</h2>
              <p>Timeslots:</p>
              <ul>
                {doctor.timeslots.map((slot, index) => (
                  <li key={index}>{slot}</li>
                ))}
              </ul>
              <button onClick={() => handleEditDoctor(doctor.id)}>Edit</button>
            </div>
          ))}
        </div>
        <button className="add-doctor" onClick={handleAddDoctor}>
          Add New Doctor
        </button>
      </div>
    </div>
  );
};

export default DoctorManagement;
