import React, { useState, useEffect } from "react";
import styles from "../categories.module.css";
import axios from "axios";

import cardiologistImage from "../../../../assets/DoctorImages/cardiologist.jpg";
import Navbar from "../../../../components/Navbar/Navbar";

import Cookie from "js-cookie";

function Cardiologist() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cardiologistsData, setCardiologistsData] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentSlots, setAppointmentSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const filteredCardiologists = cardiologistsData.filter((pediatrician) =>
    pediatrician.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
    setAppointmentSlots([]); // Clear previous appointment slots
    setSelectedSlot(null); // Clear previous selected slot
  };

  const handleClosePopup = () => {
    setSelectedDoctor(null);
    setSelectedSlot(null); // Clear selected slot when popup is closed
  };

  const handleAppointmentTimeSlots = () => {
    axios
      .get(
        `${import.meta.env.VITE_API_BASE_URL}/api/timeslots/doctor/${selectedDoctor._id}`,
        {
          headers: { "x-auth-token": Cookie.get("token") },
        }
      )
      .then((res) => {
        setAppointmentSlots(res.data);
        if (res.data.length === 0) {
          alert("No available slots");
        }
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Error : You Need to Login");
        if (err.response && err.response.status === 401) {
          Cookie.remove("token");
          Cookie.remove("userRole");
          Cookie.remove("userId");
          console.log(err.response.status);
          window.location.reload();
        } else {
          console.log(err);
        }
      });
  };

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handleConfirmAppointment = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_BASE_URL}/api/appointments`,
        {
          timeslotId: selectedSlot._id,
        },
        {
          headers: { "x-auth-token": Cookie.get("token") },
        }
      )
      .then((res) => {
        console.log(res.data);
        alert("Appointment confirmed successfully");
        setSelectedDoctor(null);
        setSelectedSlot(null);
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to confirm appointment");
      });
  };

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_BASE_URL}/api/doctors/specialization/cardiologist`
      )
      .then((res) => {
        setCardiologistsData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.mainContent}>
        <div className={styles.searchSection}>
          <input
            type="text"
            placeholder="Find Your Doctor"
            value={searchQuery}
            onChange={handleSearchInputChange}
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>🔍</button>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.doctorImage}>
            <img src={cardiologistImage} alt="Cardiologist" />
          </div>
          <div className={styles.categorySection}>
            <div className={styles.title}>
              <h2>Cardiologists</h2>
              <p>
                Our expert cardiologists specialize in diagnosing and treating
                diseases of the cardiovascular system.
              </p>
            </div>
            <ul>
              {filteredCardiologists.length > 0 ? (
                filteredCardiologists.map((cardiologist, index) => (
                  <li
                    key={index}
                    onClick={() => handleDoctorClick(cardiologist)}
                  >
                    {cardiologist.name}
                  </li>
                ))
              ) : (
                <li>No cardiologists found</li>
              )}
            </ul>
          </div>
        </div>
      </main>
      {selectedDoctor && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h4>
              <b>{selectedDoctor.name}</b>
            </h4>
            <div className={styles.space}></div>
            <p>
              <strong>Qualifications:</strong> {selectedDoctor.qualifications}
            </p>
            <p>
              <strong>SLMC Registration Number:</strong>{" "}
              {selectedDoctor.SLMCNumber}
            </p>
            <p>
              <strong>Gender:</strong> {selectedDoctor.gender}
            </p>
            <button className={styles.closeButton} onClick={handleClosePopup}>
              Close
            </button>
            <br />
            <button
              className={styles.viewSlotsButton}
              onClick={handleAppointmentTimeSlots}
            >
              View Appointment Slots
            </button>
            {appointmentSlots.length > 0 && (
              <div className={styles.appointmentSlots}>
                <h5>Available Appointment Slots:</h5>
                <ul>
                  {appointmentSlots.map((slot, index) => (
                    <li key={index}>
                      <button
                        className={`${styles.slotButton} ${
                          selectedSlot === slot ? styles.selectedSlotButton : ""
                        }`}
                        onClick={() => handleSlotClick(slot)}
                      >
                        {slot.startTime} - {slot.endTime} :{" "}
                        {slot.channellingCenterName}
                      </button>
                    </li>
                  ))}
                </ul>
                {selectedSlot && (
                  <button
                    className={styles.confirmButton}
                    onClick={handleConfirmAppointment}
                  >
                    Confirm Appointment
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cardiologist;
