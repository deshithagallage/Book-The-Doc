const express = require('express');
const { getDoctors, createDoctor, getDoctorsByHospital } = require('../controllers/doctorController');
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');
const router = express.Router();

router.get('/', auth, authorize(['Doctor']), getDoctors);
router.post('/', auth, authorize(['Doctor']), createDoctor);
router.get('/hospital/:hospitalId', auth, authorize(['Doctor', 'Patient']), getDoctorsByHospital);

module.exports = router;
