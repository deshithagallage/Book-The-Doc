/* eslint-disable no-unused-vars */
import React from 'react';
import CenterSidebar from '../Sidebar/CenterSidebar.jsx';
import styles from "./UsersList.module.css"; // Import CSS Module for styling
import Navbar from '../../../components/Navbar/Navbar';

// Dummy data (replace with actual data from your API or state)
const dummyUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'User' },
  { id: 4, name: 'Bob Brown', email: 'bob@example.com', role: 'User' },
];

const PatientsList = () => {
  // Filter out users with role 'User'
  const patients = dummyUsers.filter(user => user.role === 'User');

  return (
    <div>
      <Navbar/>
    <div className={styles.patientsList}>
      <CenterSidebar />
      <div className={styles.content}>
        <h1>Patients List</h1>
        <div className={styles.patientsTable}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {patients.map(patient => (
                <tr key={patient.id}>
                  <td>{patient.id}</td>
                  <td>{patient.name}</td>
                  <td>{patient.email}</td>
                  <td>{patient.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PatientsList;
