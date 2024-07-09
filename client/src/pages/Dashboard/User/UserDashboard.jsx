/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserSidebar from '../Sidebar/UserSidebar.jsx';
import styles from './UserDashboard.module.css'; // Import styles from module.css
import axios from 'axios';

const UserDashboard = () => {
  const [user, setUser] = useState({
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    profilePicture: 'https://via.placeholder.com/150',
    age: 30,
    city: 'New York',
    sugarLevel: 'Normal',
    bloodPressure: '120/80',
    totalAppointments: 5,
    bookedPreviousDoctors: ['Dr. Smith', 'Dr. Johnson']
  });
  
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments data from the backend
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('/api/appointments'); // Make sure the endpoint is correct
        if (Array.isArray(response.data)) {
          setAppointments(response.data);
        } else {
          console.error('Fetched appointments data is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  const upcomingAppointments = appointments.filter(appointment => appointment.status === 'upcoming');
  const pastAppointments = appointments.filter(appointment => appointment.status === 'completed');

  return (
    <div className={styles.dashboard}>
      <UserSidebar />
      <div className={styles.content}>
        <h1>User Dashboard</h1>
        <img src={user.profilePicture} alt="Profile" className={styles['profile-picture']} />
        <div className={styles['user-info']}>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>City:</strong> {user.city}</p>
          <p><strong>Sugar Level:</strong> {user.sugarLevel}</p>
          <p><strong>Blood Pressure:</strong> {user.bloodPressure}</p>
          <p><strong>Total Appointments:</strong> {user.totalAppointments}</p>
          <p><strong>Booked Previous Doctors:</strong> {user.bookedPreviousDoctors.join(', ')}</p>
        </div>
        <Link to="/find-doctor">
          <button className={styles['find-doc-button']}>Find a Doctor</button>
        </Link>
        <div className={styles['appointments-section']}>
          <h2>Upcoming Appointments</h2>
          {upcomingAppointments.length > 0 ? (
            <ul>
              {upcomingAppointments.map(appointment => (
                <li key={appointment._id}>
                  <p><strong>Doctor:</strong> {appointment.doctorName}</p>
                  <p><strong>Date:</strong> {new Date(appointment.date).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles['no-appointments']}>No upcoming appointments.</p>
          )}
        </div>
        <div className={styles['appointments-section']}>
          <h2>Past Appointments</h2>
          {pastAppointments.length > 0 ? (
            <ul>
              {pastAppointments.map(appointment => (
                <li key={appointment._id}>
                  <p><strong>Doctor:</strong> {appointment.doctorName}</p>
                  <p><strong>Date:</strong> {new Date(appointment.date).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles['no-appointments']}>No past appointments.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
