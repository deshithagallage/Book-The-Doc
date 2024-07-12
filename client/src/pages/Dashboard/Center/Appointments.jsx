import React, { useState, useEffect } from "react";
import CenterSidebar from "../Sidebar/CenterSidebar.jsx";
import axios from "axios";
import Cookies from "js-cookie";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner.jsx";

const Appointments = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [timeSlots, setTimeSlots] = useState([
    {
      _id: 1,
      date: "2022-12-12",
      doctor: "Dr. John Doe",
      startTime: "10:00 AM",
      endTime: "11:00 AM",
      patientCount: 10,
      maxPatientCount: 20,
    },
    {
      _id: 2,
      date: "2022-12-12",
      doctor: "Dr. Jane Doe",
      startTime: "11:00 AM",
      endTime: "12:00 PM",
      patientCount: 15,
      maxPatientCount: 20,
    },
    {
      _id: 3,
      date: "2022-12-12",
      doctor: "Dr. John Doe",
      startTime: "12:00 PM",
      endTime: "01:00 PM",
      patientCount: 15,
      maxPatientCount: 20,
    },
    {
      _id: 4,
      date: "2022-12-12",
      doctor: "Dr. Jane Doe",
      startTime: "01:00 PM",
      endTime: "02:00 PM",
      patientCount: 20,
      maxPatientCount: 20,
    },
    {
      _id: 5,
      date: "2022-12-12",
      doctor: "Dr. John Doe",
      startTime: "02:00 PM",
      endTime: "03:00 PM",
      patientCount: 12,
      maxPatientCount: 20,
    },
  ]);

  const getAllDoctors = (timeslots) => {
    const doctors = {};
    timeslots.forEach((slot) => {
      if (!doctors.hasOwnProperty(slot.doctor)) {
        doctors[slot.doctor] = [slot];
      } else {
        doctors[slot.doctor].push(slot);
      }
    });
    return doctors;
  };

  const doctorsTimeSlots = getAllDoctors(timeSlots);

  return (
    <div>
      <Navbar />
      <div className="flex w-full h-full">
        <div className="w-[17%] h-full">
          <CenterSidebar />
        </div>
        <div className="w-[83%] h-full mt-16 py-14 px-10 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-7">Timeslots</h1>
          <div className="w-5/6 h-full flex flex-col gap-y-10">
            {isLoading ? (
              <div className="flex justify-center items-center h-full gap-x-4 font-semibold text-lg">
                <LoadingSpinner />
                <p>Timeslots Loading...</p>
              </div>
            ) : Object.keys(doctorsTimeSlots).length > 0 ? (
              Object.keys(doctorsTimeSlots).map((doctor) => (
                <div key={doctor} className="flex flex-col gap-y-2">
                  <h1 className="text-2xl font-bold text-start">
                    {`Doctor : ${doctor[0].toUpperCase() + doctor.slice(1)}`}
                  </h1>
                  <div className="flex justify-center items-center">
                    <div className="w-full h-12 bg-blue-300 flex justify-center items-center px-auto rounded-xl">
                      <h2 className="w-1/5 text-lg font-bold pl-3 text-start border-gray-300">
                        Date
                      </h2>
                      <h2 className="w-1/5 text-lg font-bold pl-3 text-start border-l-2 border-gray-300">
                        Start Time
                      </h2>
                      <h2 className="w-1/5 text-lg font-bold pl-3 text-start border-l-2 border-gray-300">
                        End Time
                      </h2>
                      <h2 className="w-1/5 text-lg font-bold pl-3 text-start border-l-2 border-gray-300">
                        Patient Count
                      </h2>
                      <h2 className="w-1/5 text-lg font-bold pl-3 text-start border-l-2 border-gray-300">
                        Maximum Count
                      </h2>
                    </div>
                  </div>
                  {doctorsTimeSlots[doctor].map((timeslot) => (
                    <div
                      key={timeslot._id}
                      className="flex justify-center items-center border-b-2 border-gray-300 shadow-md rounded-xl"
                    >
                      <div className="w-full h-12 bg-blue-100 flex justify-center items-center px-auto rounded-xl">
                        <div className="w-1/5 font-bold pl-3 text-start border-r-2 border-gray-300">
                          {timeslot.date}
                        </div>
                        <div className="w-1/5 font-bold pl-3 text-start border-r-2 border-gray-300">
                          {timeslot.startTime}
                        </div>
                        <div className="w-1/5 font-bold pl-3 text-start border-r-2 border-gray-300">
                          {timeslot.endTime}
                        </div>
                        <div className="w-1/5 font-bold pl-3 text-start border-r-2 border-gray-300">
                          {timeslot.patientCount}
                        </div>
                        <div className="w-1/5 font-bold pl-3 text-start border-gray-300">
                          {timeslot.maxPatientCount}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <p>No upcoming appointments found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
