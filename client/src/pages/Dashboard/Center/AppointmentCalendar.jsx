/* eslint-disable no-unused-vars */
/* ./pages/Dashboard/Center/AppointmentCalendar.jsx */

import React from 'react';
import CenterSidebar from '../Sidebar/CenterSidebar.jsx';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

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
    <div className="appointment-calendar">
      <CenterSidebar />
      <div className="content">
        <h1>Appointment Calendar</h1>
        <div style={{ height: '500px' }}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentCalendar;
