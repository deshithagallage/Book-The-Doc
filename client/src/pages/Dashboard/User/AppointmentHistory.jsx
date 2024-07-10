/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import UserSidebar from '../Sidebar/UserSidebar.jsx';
import styles from './AppointmentHistory.module.css';
import Navbar from '../../../components/Navbar/Navbar';

const AppointmentHistory = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
    },
    {
      id: 4,
      doctor: 'Dr. Michael Brown',
      date: '2024-06-10',
      time: '11:00 AM',
      status: 'Completed'
    },
    {
      id: 5,
      doctor: 'Dr. Michael Brown',
      date: '2024-06-10',
      time: '11:00 AM',
      status: 'Completed'
    },
    {
      id: 6,
      doctor: 'Dr. Michael Brown',
      date: '2024-06-10',
      time: '11:00 AM',
      status: 'Completed'
    }
  ]);

  return (
    <div>
      <Navbar />
      <div className={styles.appointmentHistory}>
        <UserSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`${styles.content} ${isSidebarOpen ? styles.shifted : ''}`}>
          <h1 className={styles.appointmentstag}>Appointment History</h1>
          <div className={styles.appointmentList}>
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
                <div key={appointment.id} className={styles.appointmentItem}>
                  <h2>{appointment.doctor}</h2>
                  <p><strong>Date:</strong> {appointment.date}</p>
                  <p><strong>Time:</strong> {appointment.time}</p>
                  <p><strong>Status:</strong> <span className={`${styles.status} ${styles[appointment.status.toLowerCase()]}`}>{appointment.status}</span></p>
                </div>
              ))
            ) : (
              <p>No appointments found.</p>
            )}
          </div>
        </div>
      </div>
      <button onClick={toggleSidebar} className={styles.sidebarToggle}>Toggle Sidebar</button>
    </div>
  );
};

export default AppointmentHistory;
