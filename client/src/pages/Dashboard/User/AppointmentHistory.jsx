/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import UserSidebar from '../Sidebar/UserSidebar.jsx';
import './AppointmentHistory.css';

const AppointmentHistory = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: 'Dr. John Smith',
      date: '2024-07-01',
      time: '10:00 AM',
      status: 'Completed'
    },
    {
      id: 2,
      doctor: 'Dr. Emily Johnson',
      date: '2024-06-15',
      time: '2:00 PM',
      status: 'Cancelled'
    },
    {
      id: 3,
      doctor: 'Dr. Michael Brown',
      date: '2024-06-10',
      time: '11:00 AM',
      status: 'Completed'
    }
  ]);

  return (
    <div className="appointment-history">
      <UserSidebar />
      <div className="content">
     
      <h1>Appointment History</h1>
        <div className="appointment-list">
          {appointments.length > 0 ? (
            appointments.map((appointment) => (
              <div key={appointment.id} className="appointment-item">
                <h2>{appointment.doctor}</h2>
                <p><strong>Date:</strong> {appointment.date}</p>
                <p><strong>Time:</strong> {appointment.time}</p>
                <p><strong>Status:</strong> <span className={`status ${appointment.status.toLowerCase()}`}>{appointment.status}</span></p>
              </div>
            ))
          ) : (
            <p>No appointments found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentHistory;
