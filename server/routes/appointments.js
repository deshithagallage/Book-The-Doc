const express = require('express');
const Appointment = require('../models/Appointment');
const router = express.Router();

// Get user's appointments
router.get('/:userId', async (req, res) => {
  try {
    const appointments = await Appointment.find({ userId: req.params.userId });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
});

// Create a new appointment
router.post('/', async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create appointment' });
  }
});

module.exports = router;
