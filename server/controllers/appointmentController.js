const Appointment = require("../models/appointment");
const Timeslot = require("../models/timeslot");
const Doctor = require("../models/doctor");
const Center = require("../models/center");

// Book an appointment
const bookAppointment = async (req, res) => {
  const { timeslotId } = req.body;
  patient = req.user.id;
  console.log(patient);
  console.log(timeslotId);

  try {
    const timeslot = await Timeslot.findById(timeslotId);

    if (!timeslot) {
      return res.status(404).json({ message: "Timeslot not found" });
    }

    if (timeslot.bookedPatients.length >= timeslot.maxPatients) {
      return res.status(400).json({ message: "Timeslot is fully booked" });
    }

    const queueNumber = timeslot.bookedPatients.length + 1;

    const appointment = new Appointment({
      patient,
      timeslot: timeslotId,
      queueNumber,
    });

    await appointment.save();

    timeslot.bookedPatients.push(patient);
    await timeslot.save();

    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
