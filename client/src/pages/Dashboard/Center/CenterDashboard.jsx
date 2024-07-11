import React, { useState, useEffect } from "react";
import CenterSidebar from "../Sidebar/CenterSidebar.jsx";
import styles from "./CenterDashboard.module.css";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import profilePic from "../../../assets/CenterProfilePic.png";

const CenterDashboard = () => {
  // Dummy data (replace with actual data fetching)
  const [center, setCenter] = useState({
    name: "Med Bay",
    email: "med@gmail.com",
    medicalNumber: "123456",
    contact: "+1 234 567 8901",
    district: "Colombo",
    city: "Moratuwa",
  });
  const [doctorsCount, setDoctorsCount] = useState(24);
  const [todayAppointmentsCount, setTodayAppointmentsCount] = useState(40);
  const [todayTimeslotsCount, setTodayTimeslotsCount] = useState(10);
  const [timeSlots, setTimeSlots] = useState([
    {
      _id: 1,
      doctor: "Dr. John Doe",
      time: "10:00 AM - 11:00 AM",
      maxPatientCount: 20,
    },
    {
      _id: 2,
      doctor: "Dr. Jane Doe",
      time: "11:00 AM - 12:00 PM",
      maxPatientCount: 20,
    },
    {
      _id: 3,
      doctor: "Dr. John Doe",
      time: "12:00 PM - 01:00 PM",
      maxPatientCount: 20,
    },
  ]);
  const [doctors, setDoctors] = useState([
    { _id: 1, doctor: "Dr. Sanjula Haritha", specialization: "General" },
    { _id: 1, doctor: "Dr. Haritha Sanjula", specialization: "Dentist" },
    { _id: 1, doctor: "Dr. Chirath Sanjana", specialization: "Cardiologist" },
    { _id: 1, doctor: "Dr. Sanjana Chirath", specialization: "Pediatrician" },
    { _id: 1, doctor: "Dr. Yoshan Haritha", specialization: "General" },
    { _id: 1, doctor: "Dr. Halow Halow", specialization: "General" },
  ]);

  return (
    <div>
      <Navbar />
      <div className={styles.dashboard}>
        <div className={styles.sidebar}>
          <CenterSidebar />
        </div>
        <div className={styles.main}>
          <div className={styles.header}>
            <h1>Welcome, {center.name}..!</h1>
          </div>
          <div className={styles.content}>
            <div className={styles.profile}>
              <div className={styles.userInfo}>
                <img
                  src={profilePic}
                  alt="Center Profile"
                  className={styles.circleImg}
                />
                <div className={styles.details}>
                  <p>
                    <strong>Name:</strong> {center.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {center.email}
                  </p>
                  <p>
                    <strong>Medical Number:</strong> {center.medicalNumber}
                  </p>
                  <p>
                    <strong>Phone Number:</strong> {center.contact}
                  </p>
                  <p>
                    <strong>District:</strong> {center.district}
                  </p>
                  <p>
                    <strong>City:</strong> {center.city}
                  </p>
                </div>
              </div>
              <div className={styles.counts}>
                <div className={styles.card}>
                  <h3>Today Appoinments Count</h3>
                  <p>{todayAppointmentsCount}</p>
                </div>
                <div className={styles.card}>
                  <h3>Doctors Count</h3>
                  <p>{doctorsCount}</p>
                </div>
                <div className={styles.card}>
                  <h3>Today Timeslots Count</h3>
                  <p>{todayTimeslotsCount}</p>
                </div>
              </div>
            </div>
            <div className={styles.appointments}>
              <div className={styles.appointmentsSection}>
                <h2>Upcoming Timeslots</h2>
                {timeSlots.length > 0 ? (
                  <ul>
                    {timeSlots.slice(0, 3).map((slot) => (
                      <li key={slot._id} className={styles.upcoming}>
                        <p>
                          <strong>Doctor:</strong> {slot.doctor}
                        </p>
                        <p>
                          <strong>Time:</strong> {slot.time}
                        </p>
                        <p>
                          <strong>Max Patient Count:</strong>{" "}
                          {slot.maxPatientCount}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.noAppointments}>
                    No upcoming timeslots for today.
                  </p>
                )}
              </div>
              <div className={styles.appointmentsSection}>
                <h2>Registered Doctors</h2>
                {doctors.length > 0 ? (
                  <ul>
                    {doctors.slice(0, 5).map((doctor) => (
                      <li key={doctor._id} className={styles.past}>
                        <p>
                          <strong>{doctor.doctor}</strong> (
                          {doctor.specialization})
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.noAppointments}>
                    No registered doctors to show.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterDashboard;
