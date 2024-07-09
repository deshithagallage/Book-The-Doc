const express = require('express');
const { getDoctors, getDoctorsByHospital, getDoctorsBySpecialization } = require('../controllers/doctorController');
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');
const router = express.Router();

router.get('/', auth, authorize(['doctor', 'patient']), getDoctors);
router.get('/hospital/:hospitalId', auth, authorize(['doctor', 'patient']), getDoctorsByHospital);
router.get('/specialization/:specialization', auth, authorize(['doctor', 'patient']), getDoctorsBySpecialization);


module.exports = router;