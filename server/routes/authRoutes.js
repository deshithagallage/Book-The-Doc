const express = require("express");
const {
  registerPatient,
  loginUser,
  registerCenter,
} = require("../controllers/authController");
const router = express.Router();

router.post('/register/patient', registerPatient);
router.post('/register/doctor', registerDoctor);
router.post('/login', loginUser);

module.exports = router;
