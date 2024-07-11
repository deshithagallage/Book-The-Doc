const Appointment = require('../models/appointment');
const Timeslot = require('../models/timeslot');
const Doctor = require('../models/doctor');
const Center = require('../models/center');
const mongoose = require('mongoose');

// Book an appointment
const bookAppointment = async (req, res) => {
  const { timeslotId } = req.body;
  const patient = req.user.id;
  const maxRetries = 3; // Number of retries before giving up

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      const timeslot = await Timeslot.findById(timeslotId).session(session);

      if (!timeslot) {
        await session.abortTransaction();
        session.endSession();
        return res.status(404).json({ message: 'Timeslot not found' });
      }

      // Check if the patient has already booked this timeslot
      const existingAppointment = await Appointment.findOne({ patient, timeslot: timeslotId }).session(session);
      if (existingAppointment) {
        await session.abortTransaction();
        session.endSession();
        return res.status(400).json({ message: 'You have already booked this timeslot' });
      }

      if (timeslot.bookedPatients.length >= timeslot.maxPatients) {
        await session.abortTransaction();
        session.endSession();
        return res.status(400).json({ message: 'Timeslot is fully booked' });
      }

      const queueNumber = timeslot.bookedPatients.length + 1;

      const appointment = new Appointment({
        patient,
        timeslot: timeslotId,
        queueNumber,
      });

      await appointment.save({ session });

      timeslot.bookedPatients.push(patient);
      await timeslot.save({ session });

      await session.commitTransaction();
      session.endSession();

      return res.status(201).json(appointment);
    } catch (error) {
      await session.abortTransaction();
      session.endSession();
      
      if (attempt === maxRetries - 1) {
        return res.status(500).json({ message: error.message });
      }
    }
  }
};

// Get a patient's appointments
const getAppointmentsByPatient = async (req, res) => {
  const patientId = req.user.id;

  try {
    const appointments = await Appointment.find({
      patient: patientId,
    }).populate("timeslot");
    const output = [];
    for (let i = 0; i < appointments.length; i++) {
      const doctor = await Doctor.findById(
        appointments[i].timeslot.doctor
      ).select("name");
      const medicalCenter = await Center.findById(
        appointments[i].timeslot.channellingCenter
      ).select("name");
      const details = {
        _id: appointments[i]._id,
        medicalCenter: medicalCenter.name,
        doctor: doctor.name,
        date: appointments[i].timeslot.date,
        startTime: appointments[i].timeslot.startTime,
        endTime: appointments[i].timeslot.endTime,
        queueNumber: appointments[i].queueNumber,
        status: appointments[i].status,
      };
      output.push(details);
    }
    res.json(output);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a channelling center's appointments
const getAppointmentsByChannellingCenter = async (req, res) => {
  const centerId = req.user.id;

  try {
    const appointments = await Appointment.find().populate({
      path: "timeslot",
      match: { channellingCenter: centerId },
      populate: { path: "doctor" },
    });

    const filteredAppointments = appointments.filter(
      (appointment) => appointment.timeslot !== null
    );

    res.json(filteredAppointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  bookAppointment,
  getAppointmentsByPatient,
  getAppointmentsByChannellingCenter,
};
