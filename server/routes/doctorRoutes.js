const express = require('express');
const { getDoctors, createDoctor } = require('../controllers/doctorController');
const router = express.Router();

router.get('/', getDoctors);
router.post('/', createDoctor);

module.exports = router;
