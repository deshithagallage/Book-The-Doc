/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import UserSidebar from '../Sidebar/UserSidebar.jsx';
import './UpcomingAppointments.css'; // Assuming you have a CSS file for styling

const UpcomingAppointments = () => {
  // Mock data, replace this with API call
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: 'Dr. Alice Williams',
      date: '2024-07-10',
      time: '10:00 AM',
      status: 'Upcoming'
    },
    {
      id: 2,
      doctor: 'Dr. Robert Davis',
      date: '2024-07-15',
      time: '2:00 PM',
      status: 'Upcoming'
    },
    {
      id: 3,
      doctor: 'Dr. Linda Martinez',
      date: '2024-07-20',
      time: '11:00 AM',
      status: 'Upcoming'
    }
  ]);

  // useEffect to fetch appointments from API if needed
  // useEffect(() => {
  //   // Fetch appointments from an API
  //   // setAppointments(fetchedAppointments);
  // }, []);

  return (
    <div className="upcoming-appointments">
      <UserSidebar />
      <div className="content">
        <h1>Upcoming Appointments</h1>
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
            <p>No upcoming appointments found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointments;
