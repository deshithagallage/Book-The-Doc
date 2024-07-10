/* eslint-disable no-unused-vars */

import './Sidebar.css';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const CenterSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="center-sidebar-wrapper">
      <div id="centerSidebar" className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="closebtn" onClick={toggleSidebar}>&equiv;</button>
        <ul>
          <li><Link to="/dashboard/center" className={location.pathname === '/dashboard/center' ? 'active' : ''}>Dashboard</Link></li>
          <li><Link to="/dashboard/center/doctor-management" className={location.pathname === '/dashboard/center/doctor-management' ? 'active' : ''}>Doctor Management</Link></li>
          <li><Link to="/dashboard/center/users-list" className={location.pathname === '/dashboard/center/users-list' ? 'active' : ''}>Patients List</Link></li>
          <li><Link to="/dashboard/center/appointments" className={location.pathname === '/dashboard/center/appointments' ? 'active' : ''}>Appointments</Link></li>
          <li><Link to="/dashboard/center/appointment-calendar" className={location.pathname === '/dashboard/center/appointment-calendar' ? 'active' : ''}>Appointment Calendar</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default CenterSidebar;
