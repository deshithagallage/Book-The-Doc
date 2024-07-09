const express = require('express');
const { registerDoctor, registerPatient, loginUser, registerCenter } = require('../controllers/authController');
const router = express.Router();

router.post('/register/patient', registerPatient);
router.post('/register/doctor', registerDoctor);
router.post('/register/center', registerCenter);
router.post('/login', loginUser);

module.exports = router;
