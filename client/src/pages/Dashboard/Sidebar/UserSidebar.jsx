import React from "react";
import { Link } from "react-router-dom";

import styles from "./Sidebar.module.css";

const UserSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <Link to="/dashboard/user">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard/user/upcoming-appointments">
            Upcoming Appointments
          </Link>
        </li>
        <li>
          <Link to="/dashboard/user/appointment-history">
            Appointment History
          </Link>
        </li>
        <li>
          <Link to="/dashboard/user/manage-profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserSidebar;
