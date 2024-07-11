import React, { useState, useEffect } from "react";
import styles from "../categories.module.css";
import axios from "axios";

import pediatricianImage from "../../../../assets/DoctorImages/pediatrician.png";
import Navbar from "../../../../components/Navbar/Navbar";

import Cookie from "js-cookie";

function Pediatrician() {
  const [searchQuery, setSearchQuery] = useState("");
  const [pediatriciansData, setPediatriciansData] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentSlots, setAppointmentSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);



  const filteredPediatricians = pediatriciansData.filter((pediatrician) =>
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
      .get(`http://localhost:3000/api/timeslots/doctor/${selectedDoctor._id}`, {
        headers: { 'x-auth-token': Cookie.get('token') }
      })
      .then((res) => {
        setAppointmentSlots(res.data);
        if(res.data.length === 0){
          alert("No available slots");
        }
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handleConfirmAppointment = () => {
    axios
      .post(
        "http://localhost:3000/api/appointments",
        {
          timeslotId: selectedSlot._id,
        },
        {
          headers: { 'x-auth-token': Cookie.get('token') }
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
      .get("http://localhost:3000/api/doctors/specialization/pediatrician")
      .then((res) => {
        setPediatriciansData(res.data);
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
            className={styles.searchInput}
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button className={styles.searchButton}>🔍</button>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.doctorImage}>
            <img src={pediatricianImage} alt="Pediatrician" />
          </div>
          <div className={styles.categorySection}>
            <div className={styles.title}>
              <h2>Pediatricians</h2>
              <p>
                Our expert pediatricians specialize in diagnosing and treating
                diseases in children.
              </p>
            </div>
            <ul>
              {filteredPediatricians.length > 0 ? (
                filteredPediatricians.map((pediatrician, index) => (
                  <li
                    key={index}
                    onClick={() => handleDoctorClick(pediatrician)}
                  >
                    {pediatrician.name}
                  </li>
                ))
              ) : (
                <li>No pediatricians found</li>
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
            <button className={styles.viewSlotsButton} onClick={handleAppointmentTimeSlots}>
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
                        {slot.startTime} - {slot.endTime}   :   {slot.channellingCenterName}
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

export default Pediatrician;
