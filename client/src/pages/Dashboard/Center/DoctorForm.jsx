/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CenterSidebar from '../Sidebar/CenterSidebar.jsx';
import styles from './DoctorForm.module.css'; // Import CSS module

const DoctorForm = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState({ name: '', timeslots: [''] });

  useEffect(() => {
    if (doctorId !== 'new') {
      // Fetch the doctor data based on doctorId and set it to state
      // For now, we will use dummy data
      const fetchedDoctor = { name: 'Dr. John Doe', timeslots: ['9am - 12pm', '2pm - 5pm'] };
      setDoctor(fetchedDoctor);
    }
  }, [doctorId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleTimeslotChange = (index, value) => {
    const newTimeslots = [...doctor.timeslots];
    newTimeslots[index] = value;
    setDoctor({ ...doctor, timeslots: newTimeslots });
  };

  const addTimeslot = () => {
    setDoctor({ ...doctor, timeslots: [...doctor.timeslots, ''] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the doctor data
    navigate('/dashboard/center/doctor-management');
  };

  return (
    <div className={styles.doctorForm}>
      <CenterSidebar />
      <div className={styles.content}>
        <h1>{doctorId === 'new' ? 'Add New Doctor' : 'Edit Doctor'}</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={doctor.name} onChange={handleInputChange} required />
          </div>
          {doctor.timeslots.map((timeslot, index) => (
            <div key={index}>
              <label htmlFor={`timeslot-${index}`}>Timeslot {index + 1}</label>
              <input
                type="text"
                id={`timeslot-${index}`}
                name={`timeslot-${index}`}
                value={timeslot}
                onChange={(e) => handleTimeslotChange(index, e.target.value)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={addTimeslot}>Add Timeslot</button>
          <button type="submit">{doctorId === 'new' ? 'Add Doctor' : 'Save Changes'}</button>
        </form>
      </div>
    </div>
  );
};

export default DoctorForm;
