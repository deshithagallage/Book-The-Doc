/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import UserSidebar from '../Sidebar/UserSidebar.jsx';
import './UpcomingAppointments.css'; // Assuming you have a CSS file for styling
import axios from 'axios';

const UpcomingAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/appointments/upcoming');
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="upcoming-appointments">
      <UserSidebar />
      <div className="content">
        <h1>Upcoming Appointments</h1>
        <div className="appointment-list">
          {appointments.length > 0 ? (
            appointments.map((appointment) => (
              <div key={appointment._id} className="appointment-item">
                <h2>{appointment.doctor}</h2>
                <p><strong>Date:</strong> {new Date(appointment.date).toLocaleDateString()}</p>
                <p><strong>Time:</strong> {appointment.time}</p>
                <p><strong>Status:</strong> <span className={`status ${appointment.status.toLowerCase()}`}>{appointment.status}</span></p>
              </div>
            ))
          ) : (
            <p>No upcoming appointments found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointments;
