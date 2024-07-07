/* eslint-disable no-unused-vars */

import './Sidebar.css';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const UserSidebar = () => {
  return (
    <div>
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard/user">Dashboard</Link></li>
        <li><Link to="/dashboard/user/upcoming-appointments">Upcoming Appointments</Link></li>
        <li><Link to="/dashboard/user/appointment-history">Appointment History</Link></li>
        <li><Link to="/dashboard/user/manage-profile">Manage Profile</Link></li>
        
      </ul>
    </div>

    </div>
  );
};

export default UserSidebar;
