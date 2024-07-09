/* eslint-disable no-unused-vars */
/* UserSidebar.jsx */

import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const UserSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div id="mySidebar" className={`sidebar ${isOpen ? 'open' : ''}`}>
        <a href="javascript:void(0)" className="closebtn" onClick={toggleSidebar}>&times;</a>
        <ul>
          <li><Link to="/dashboard/user">Dashboard</Link></li>
          <li><Link to="/dashboard/user/upcoming-appointments">Upcoming Appointments</Link></li>
          <li><Link to="/dashboard/user/appointment-history">Appointment History</Link></li>
          <li><Link to="/dashboard/user/manage-profile">Profile</Link></li>
        </ul>
      </div>

      <div id="main">
        <button className="openbtn" onClick={toggleSidebar}>☰</button>
     
      </div>
    </div>
  );
};

export default UserSidebar;
