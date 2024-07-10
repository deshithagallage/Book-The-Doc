/* eslint-disable no-unused-vars */
import React from 'react';
import CenterSidebar from '../Sidebar/CenterSidebar.jsx';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import styles from './AppointmentCalendar.module.css'; // Import CSS Module for styling

const localizer = momentLocalizer(moment);

const AppointmentCalendar = () => {
  const events = [
    {
      id: 1,
      title: 'Consultation with Dr. Smith',
      start: new Date(2024, 6, 15, 10, 0), // year, month (0-based), day, hour, minute
      end: new Date(2024, 6, 15, 11, 0)
    },
    {
      id: 2,
      title: 'Follow-up Appointment',
      start: new Date(2024, 6, 20, 14, 0),
      end: new Date(2024, 6, 20, 15, 0)
    }
    // Add more events as needed
  ];

  return (
    <div className={styles.appointmentCalendar}>
      <CenterSidebar />
      <div className={styles.content}>
        <h1>Appointment Calendar</h1>
        <div className={styles.calendarContainer}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentCalendar;
