/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Sidebar.css';
import { Link, useLocation } from 'react-router-dom';

const UserSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div id="mySidebar" className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="closebtn" onClick={toggleSidebar}>&equiv;</button>
        <ul>
          <li><Link to="/dashboard/user" className={location.pathname === '/dashboard/user' ? 'active' : ''}>Dashboard</Link></li>
          <li><Link to="/dashboard/user/upcoming-appointments" className={location.pathname === '/dashboard/user/upcoming-appointments' ? 'active' : ''}>Upcoming Appointments</Link></li>
          <li><Link to="/dashboard/user/appointment-history" className={location.pathname === '/dashboard/user/appointment-history' ? 'active' : ''}>Appointment History</Link></li>
          <li><Link to="/dashboard/user/manage-profile" className={location.pathname === '/dashboard/user/manage-profile' ? 'active' : ''}>Profile</Link></li>
        </ul>
      </div>

      
    </div>
  );
};

export default UserSidebar;
