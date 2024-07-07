/* eslint-disable no-unused-vars */

import './Sidebar.css';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const CenterSidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard/center">Dashboard</Link></li>
        <li><Link to="/dashboard/center/appointments">Appointments</Link></li>
        <li><Link to="/dashboard/center/appointment-calendar">Appointment Calendar</Link></li>
        <li><Link to="/dashboard/center/users-list">Users List</Link></li>
        <li><Link to="/dashboard/center/messages">Messages</Link></li>
        <li><Link to="/dashboard/center/bookings">Bookings</Link></li>
        <li><Link to="/dashboard/center/doctor-management">Doctor Management</Link></li>
        <li><Link to="/dashboard/center/patient-management">Patient Management</Link></li>
        <li><Link to="/dashboard/center/revenue-management">Revenue Management</Link></li>
      </ul>
    </div>
  );
};

export default CenterSidebar;
