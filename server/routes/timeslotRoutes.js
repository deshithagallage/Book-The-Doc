const express = require('express');
const { createTimeslot, getTimeslotsByDoctor } = require('../controllers/timeslotController');
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');
const router = express.Router();

router.post('/', auth, authorize(['medicalCenter']), createTimeslot);
router.get('/doctor/:doctorId', auth, authorize(['patient', 'medicalCenter']), getTimeslotsByDoctor);

module.exports = router;
