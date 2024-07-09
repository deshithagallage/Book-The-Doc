const express = require('express');
const { getDoctors, getDoctorsByHospital, getDoctorsBySpecialization } = require('../controllers/doctorController');
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');
const router = express.Router();

router.get('/', auth, authorize(['doctor', 'patient', 'medicalCenter']), getDoctors);
router.get('/hospital/:hospitalId', auth, authorize(['doctor', 'patient', 'medicalCenter']), getDoctorsByHospital);
router.get('/specialization/:specialization', auth, authorize(['doctor', 'patient', 'medicalCenter']), getDoctorsBySpecialization);


module.exports = router;
