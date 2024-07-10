const express = require('express');
const { bookAppointment, getAppointmentsByPatient, getAppointmentsByChannellingCenter } = require('../controllers/appointmentController');
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');
const router = express.Router();

router.post('/', auth, bookAppointment);
router.get('/patient/', auth, authorize(['patient']), getAppointmentsByPatient);
router.get('/center/', auth, authorize(['medicalCenter']), getAppointmentsByChannellingCenter);

module.exports = router;
