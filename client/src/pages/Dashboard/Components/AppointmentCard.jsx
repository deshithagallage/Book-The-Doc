/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// ./components/AppointmentCard.jsx

import React from 'react';

const AppointmentCard = ({ appointment }) => {
  return (
    <div className="appointment-card">
      <h3>{appointment.doctor}</h3>
      <p>Date: {appointment.date}</p>
      <p>Time: {appointment.time}</p>
      <p>Type: {appointment.type}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default AppointmentCard;
