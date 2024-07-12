import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import CenterSidebar from "../Sidebar/CenterSidebar.jsx";
import styles from "./CenterDashboard.module.css";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import profilePic from "../../../assets/CenterProfilePic.png";
import SuccessButton from "../../../components/SuccessButton/SuccessButton.jsx";

const CenterDashboard = () => {
  const token = Cookies.get("token");
  const [center, setCenter] = useState({});
  const [doctorsCount, setDoctorsCount] = useState();
  const [todayAppointmentsCount, setTodayAppointmentsCount] = useState();
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
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/centers/appointments/today/count", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => {
        setTodayAppointmentsCount(res.data.count);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/centers/doctors/count", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => {
        setDoctorsCount(res.data.count);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/centers/doctors", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => {
        setDoctors(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/centers/details", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => {
        setCenter(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();
  const handleDocButtonClick = () => {
    navigate("/dashboard/center/doctors/new");
  };

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
                    <strong>Phone Number:</strong> {center.phone}
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
              <div className={styles.findDoctor}>
                <h2>Add Doctors</h2>
                <p>
                  Want to expand your medical team? Use the button below to add
                  a doctor to your medical center.
                </p>
                <div className={styles.buttonContainer}>
                  <SuccessButton
                    text="Add a Doctor"
                    onClick={handleDocButtonClick}
                  />
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
                          <strong>{doctor.name}</strong> (
                          {doctor.specialization}, {doctor.qualifications})
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
