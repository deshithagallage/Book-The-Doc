const express = require('express');
const { createTimeslot, getTimeslotsByDoctor, getTimeslotsByCenterToday, getCountTimeslotsByCenterToday } = require('../controllers/timeslotController');
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');
const router = express.Router();

router.post('/:doctorID', auth, authorize(['medicalCenter']), createTimeslot);
router.get('/doctor/:doctorId', auth, authorize(['patient', 'medicalCenter']), getTimeslotsByDoctor);
router.get('/center/today/count', auth, authorize(['medicalCenter']), getCountTimeslotsByCenterToday);
router.get('/center/today', auth, authorize(['medicalCenter']), getTimeslotsByCenterToday);

module.exports = router;
