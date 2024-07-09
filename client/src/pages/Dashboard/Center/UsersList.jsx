/* eslint-disable no-unused-vars */
// ./pages/Dashboard/Center/UsersList.jsx

import React from 'react';
import CenterSidebar from '../Sidebar/CenterSidebar.jsx';

// Dummy data (replace with actual data from your API or state)
const dummyUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'User' },
  { id: 4, name: 'Bob Brown', email: 'bob@example.com', role: 'User' },
];

const PatientsList = () => {
  // Filter out users with role 'Admin'
  const patients = dummyUsers.filter(user => user.role === 'User');

  return (
    <div className="patients-list">
      <CenterSidebar />
      <div className="content">
        <h1>Patients List</h1>
        <div className="patients-table">
          <table>
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
  );
};

export default PatientsList;
