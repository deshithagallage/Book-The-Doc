/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import CenterSidebar from '../Sidebar/CenterSidebar.jsx';
import styles from './Appointments.module.css';

const Appointments = () => {
  const ongoingAppointment = {
    patientName: "John Doe",
    time: "10:00 AM - 11:00 AM",
    description: "Regular check-up"
  };

  const upcomingAppointments = [
    { patientName: "Jane Smith", time: "11:00 AM - 12:00 PM" },
    { patientName: "Bob Johnson", time: "1:00 PM - 2:00 PM" },
    { patientName: "Alice Williams", time: "3:00 PM - 4:00 PM" }
  ];

  const calendarEvents = [
    { date: "2024-07-10", event: "Doctor's Conference" },
    { date: "2024-07-15", event: "Medical Camp" }
  ];

  return (
    <div className={styles.appointments}>
      <CenterSidebar />
      <div className={styles.content}>
        <h1>Appointments</h1>
        <div className={styles.cardsContainer}>
          <div className={`${styles.card} ${styles.ongoingAppointment}`}>
            <h2>Ongoing Appointment</h2>
            <p><strong>Patient:</strong> {ongoingAppointment.patientName}</p>
            <p><strong>Time:</strong> {ongoingAppointment.time}</p>
            <p><strong>Description:</strong> {ongoingAppointment.description}</p>
          </div>
          <div className={`${styles.card} ${styles.upcomingAppointments}`}>
            <h2>Today's Upcoming Appointments</h2>
            <ul>
              {upcomingAppointments.map((appointment, index) => (
                <li key={index}>
                  <p><strong>Patient:</strong> {appointment.patientName}</p>
                  <p><strong>Time:</strong> {appointment.time}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${styles.card} ${styles.calendarTop}`}>
            <h2>Calendar</h2>
            <ul>
              {calendarEvents.map((event, index) => (
                <li key={index}>
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Event:</strong> {event.event}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${styles.card} ${styles.calendarBottom}`}>
            <h2>Notes</h2>
            <p>Some additional information or notes can go here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
