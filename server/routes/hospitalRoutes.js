const express = require('express');
const { getHospitals, createHospital } = require('../controllers/hospitalController');
const router = express.Router();

router.get('/', getHospitals);
router.post('/', createHospital);

module.exports = router;
