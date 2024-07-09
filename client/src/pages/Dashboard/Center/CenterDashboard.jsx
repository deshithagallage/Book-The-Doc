/* eslint-disable no-unused-vars */
import React from 'react';
import CenterSidebar from '../Sidebar/CenterSidebar.jsx';
import styles from './CenterDashboard.module.css'; // Import CSS module

const CenterDashboard = () => {
  // Dummy data (replace with actual data fetching)
  const registeredUsersCount = 100;
  const pendingRequestsCount = 5;
  const appointmentsTodayCount = 10;
  const upcomingAppointmentsCount = 20;
  const doctorsCount = 5;
  const todoTasksCount = 3;
  const doneTasksCount = 7;
  const ownerDetails = {
    name: 'Medical Center Name',
    address: '123 Medical Center Street, City',
    contact: '+1 234 567 8901',
    email: 'info@medicalcenter.com'
  };

  return (
    <div className={styles.dashboard}>
      <CenterSidebar />
      <div className={styles.content}>
        <h1>Center Dashboard</h1>

        <div className={styles.card}>
          <h2>Registered Users</h2>
          <p>Total: {registeredUsersCount}</p>
          {/* Additional details about registered users */}
        </div>

        <div className={styles.card}>
          <h2>Pending Requests</h2>
          <p>Total: {pendingRequestsCount}</p>
          {/* Additional details about pending requests */}
        </div>

        <div className={styles.card}>
          <h2>Appointments Today</h2>
          <p>Total: {appointmentsTodayCount}</p>
          {/* Additional details about appointments today */}
        </div>

        <div className={styles.card}>
          <h2>Upcoming Appointments</h2>
          <p>Total: {upcomingAppointmentsCount}</p>
          {/* Additional details about upcoming appointments */}
        </div>

        <div className={styles.card}>
          <h2>Doctors</h2>
          <p>Total: {doctorsCount}</p>
          {/* Additional details about doctors */}
        </div>

        <div className={styles.card}>
          <h2>TODO Tasks</h2>
          <p>Total: {todoTasksCount}</p>
          {/* Additional details about TODO tasks */}
        </div>

        <div className={styles.card}>
          <h2>DONE Tasks</h2>
          <p>Total: {doneTasksCount}</p>
          {/* Additional details about DONE tasks */}
        </div>

        <div className={styles.card}>
          <h2>Owner Details</h2>
          <p>Name: {ownerDetails.name}</p>
          <p>Address: {ownerDetails.address}</p>
          <p>Contact: {ownerDetails.contact}</p>
          <p>Email: {ownerDetails.email}</p>
          {/* Additional details about owner details */}
        </div>

        {/* Add more cards as needed */}

      </div>
    </div>
  );
};

export default CenterDashboard;
