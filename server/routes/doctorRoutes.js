const express = require('express');
const { getDoctors, createDoctor, getDoctorsByHospital } = require('../controllers/doctorController');
const router = express.Router();

router.get('/', getDoctors);
router.post('/', createDoctor);
router.get('/:hospitalId', getDoctorsByHospital);

module.exports = router;
