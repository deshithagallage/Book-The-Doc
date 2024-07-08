const express = require('express');
const { registerDoctor, registerPatient, loginUser, requestPasswordReset, resetPassword } = require('../controllers/authController');
const router = express.Router();

router.post('/register/patient', registerPatient);
router.post('/register/doctor', registerDoctor);
router.post('/login', loginUser);
router.post('/reset-password/request', requestPasswordReset);
router.post('/reset-password/new', resetPassword);

module.exports = router;
