import React from "react";
import { Link } from "react-router-dom";

import styles from "./Sidebar.module.css";

const UserSidebar = () => {
  return (
    <div>
      <div className={styles.sidebar}>
        <div className="h-16 w-full flex items-center px-6 mb-4 bg-blue-200">
          <Link to="/">
            <div className="flex h-12 my-auto">
              <img
                src="/src/assets/logo.png"
                alt="logo"
                className="object-fill"
              />
            </div>
          </Link>
        </div>
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
    </div>
  );
};

export default UserSidebar;
