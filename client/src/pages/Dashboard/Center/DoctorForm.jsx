/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Axios from 'axios'; // Import Axios for making HTTP requests
import CenterSidebar from '../Sidebar/CenterSidebar.jsx';
import styles from './DoctorForm.module.css'; // Import CSS module

const DoctorForm = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState({ name: '', timeslots: [] });
  const [timeslotFormData, setTimeslotFormData] = useState({
    date: '',
    startTime: '',
    endTime: '',
    maxPatients: '',
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTimeslotFormData({ ...timeslotFormData, [name]: value });
  };

  const addTimeslot = async () => {
    try {
      const newTimeslot = {
      
        date: timeslotFormData.date,
        startTime: timeslotFormData.startTime,
        endTime: timeslotFormData.endTime,
        maxPatients: parseInt(timeslotFormData.maxPatients),
      };

      // Send POST request to API endpoint
      const response = await Axios.post(`http://localhost:3000/api/timeslots/${doctorId}`, newTimeslot);
      console.log('Timeslot added:', response.data); // Log the response data for verification

      // Update state or UI as needed
      setDoctor({ ...doctor, timeslots: [...doctor.timeslots, `${timeslotFormData.startTime} - ${timeslotFormData.endTime}`] });
    } catch (error) {
      console.error('Error adding timeslot:', error);
      // Handle error gracefully, e.g., show a notification to the user
      alert('Error adding timeslot. Please try again later.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/dashboard/center/doctors/edit/${doctorId}`);
  };

  return (
    <div className={styles.doctorForm}>
      <CenterSidebar />
      <div className={styles.content}>
        <h1>Edit Doctor</h1>
        <form className={styles.formStyle} onSubmit={handleSubmit}>
          
          <div>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" value={timeslotFormData.date} onChange={handleInputChange} required />
          </div>
          <div>
            <label htmlFor="startTime">Start Time</label>
            <input type="time" id="startTime" name="startTime" value={timeslotFormData.startTime} onChange={handleInputChange} required />
          </div>
          <div>
            <label htmlFor="endTime">End Time</label>
            <input type="time" id="endTime" name="endTime" value={timeslotFormData.endTime} onChange={handleInputChange} required />
          </div>
          <div>
            <label htmlFor="maxPatients">Max Patients</label>
            <input type="number" id="maxPatients" name="maxPatients" value={timeslotFormData.maxPatients} onChange={handleInputChange} required />
          </div>
          <button type="button" onClick={addTimeslot}>Add Timeslot</button>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default DoctorForm;
