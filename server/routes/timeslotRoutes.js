const express = require('express');
const { createTimeslot, getTimeslotsByDoctor, getDoctorsByCenter } = require('../controllers/timeslotController');
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');
const router = express.Router();

router.post('/', auth, authorize(['medicalCenter']), createTimeslot);
router.get('/doctor/:doctorId', auth, authorize(['patient', 'medicalCenter']), getTimeslotsByDoctor);
router.get('/center', auth, authorize(['medicalCenter', 'patient']), getDoctorsByCenter);

module.exports = router;
