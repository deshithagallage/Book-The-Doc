const express = require('express');
const {getPatientInfo, getPatients} = require('../controllers/patientController');
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');
const router = express.Router();

router.get('/:id', auth, authorize(['patient']), getPatientInfo);
router.get('/', auth, authorize(['medicalCenter']), getPatients);

module.exports = router;
