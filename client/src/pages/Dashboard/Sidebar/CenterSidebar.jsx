import React from "react";
import { Link } from "react-router-dom";

import styles from "./Sidebar.module.css";

const CenterSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <Link to="/dashboard/center">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard/center/doctor-management">
            Doctor Management
          </Link>
        </li>
        {/* <li>
          <Link to="/dashboard/center/users-list">Patients List</Link>
        </li> */}
        <li>
          <Link to="/dashboard/center/timeslots">Time Slots</Link>
        </li>
        {/* <li>
          <Link to="/dashboard/center/appointment-calendar">
            Appointment Calendar
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default CenterSidebar;
