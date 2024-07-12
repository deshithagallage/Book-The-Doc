/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Axios from 'axios'; // Import Axios for making HTTP requests
import CenterSidebar from '../Sidebar/CenterSidebar.jsx';
import styles from './DoctorForm.module.css'; // Import CSS module
import Cookies from 'js-cookie';
import Navbar from '../../../components/Navbar/Navbar.jsx';
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

      // Configure headers with x-auth-token
      const config = {
        headers: {
          "x-auth-token": Cookies.get("token"),
        },
      };

      // Send POST request to API endpoint with headers
      const response = await Axios.post(
        `http://localhost:3000/api/timeslots/${doctorId}`,
        newTimeslot,
        config
      );

      console.log('Timeslot added:', response.data); // Log the response data for verification

     
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
    <div>
      <Navbar />
    
    <div className={styles.doctorForm}>
      <CenterSidebar />
      <div className={styles.content}>
        <h1>Add TimeSlot</h1>
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
          <button className={styles.save} type="button" onClick={addTimeslot}>Save Changes</button>
         
        </form>
      </div>
    </div>
    </div>
  );
};

export default DoctorForm;
