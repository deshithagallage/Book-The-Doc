const express = require('express');
const { getHospitals, createHospital } = require('../controllers/hospitalController');
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');
const router = express.Router();

router.get('/', auth, authorize(['doctor', 'patient', 'medicalCenter']), getHospitals);
router.post('/', auth, authorize(['doctor', 'medicalCenter']), createHospital);

module.exports = router;
