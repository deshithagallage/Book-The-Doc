/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserSidebar from '../Sidebar/UserSidebar.jsx';
import styles from './UserDashboard.module.css'; // Import styles from module.css
import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Navbar from '../../../components/Navbar/Navbar';
import profilePic from '../../../../src/assets/image.png';
const localizer = momentLocalizer(moment);

const UserDashboard = () => {
  const [user, setUser] = useState({
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    
    profilePicture: profilePic,
    age: 30,
    city: 'New York',
    sugarLevel: 'Normal',
    bloodPressure: '120/80',
    totalAppointments: 5,
    bookedPreviousDoctors: ['Dr. Smith', 'Dr. Johnson']
  });

  const [appointments, setAppointments] = useState([]);
  const [nextAppointment, setNextAppointment] = useState(null);

  useEffect(() => {
    // Fetch appointments data from the backend
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('/api/appointments'); // Make sure the endpoint is correct
        if (Array.isArray(response.data)) {
          setAppointments(response.data);
          // Find next upcoming appointment
          const next = response.data.find(appointment => appointment.status === 'upcoming');
          setNextAppointment(next);
        } else {
          console.error('Fetched appointments data is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  // Good morning message
  const currentTime = new Date();
  let greeting = '';
  if (currentTime.getHours() < 12) {
    greeting = 'Good Morning';
  } else if (currentTime.getHours() < 18) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }

  // Calendar events setup (example data)
  const events = appointments.map(appointment => ({
    title: appointment.doctorName,
    start: new Date(appointment.date),
    end: new Date(appointment.date)
  }));

  return (
    <div>
      <Navbar />
      <div className={styles.dashboard}>
        <UserSidebar />

        <div className={styles.content}>
          <h1>User Dashboard</h1>

          <div className={`${styles.card1} ${styles.greeting}`}>
          <p>
        <span className="greeting">{greeting}</span>, <span className="username">{user.username}</span>
      </p>
            <p>Appointment Number: {user.totalAppointments}</p>
          </div>

          <div className={`${styles.card2} ${styles.calendar}`}>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
            />
          </div>

          <div className={`${styles.card3} ${styles['user-info']}`}>
            <img src={user.profilePicture} alt="Profile" className={styles['profile-picture']} />
            <div className={styles['card-content']}>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Age:</strong> {user.age}</p>
              <p><strong>City:</strong> {user.city}</p>
              <p><strong>Sugar Level:</strong> {user.sugarLevel}</p>
              <p><strong>Blood Pressure:</strong> {user.bloodPressure}</p>
              <p><strong>Booked Previous Doctors:</strong> {user.bookedPreviousDoctors.join(', ')}</p>
            </div>
          </div>

          <Link to="/find-doctor">
            <button className={styles['find-doc-button']}>Find a Doctor</button>
          </Link>

          {nextAppointment && (
            <div className={`${styles.card4} ${styles['next-appointment']}`}>
              <h2>Next Appointment</h2>
              <p><strong>Doctor:</strong> {nextAppointment.doctorName}</p>
              <p><strong>Date:</strong> {new Date(nextAppointment.date).toLocaleString()}</p>
            </div>
          )}

          <div className={`${styles.card5} ${styles['previous-appointments']}`}>
            <h2>Previous Appointments</h2>
            {appointments.filter(appointment => appointment.status === 'completed').length > 0 ? (
              <ul>
                {appointments.filter(appointment => appointment.status === 'completed').map(appointment => (
                  <li key={appointment._id}>
                    <p><strong>Doctor:</strong> {appointment.doctorName}</p>
                    <p><strong>Date:</strong> {new Date(appointment.date).toLocaleString()}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles['no-appointments']}>No past appointments.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
