/* eslint-disable no-unused-vars */


import React from 'react';
import CenterSidebar from '../Sidebar/CenterSidebar.jsx';
import './CenterDashboard.css';



const CenterDashboard = () => {
  return (
    <div className="dashboard">
      <CenterSidebar />
      <div className="content">
        <h1>Center Dashboard</h1>
      </div>
    </div>
  );
};

export default CenterDashboard;