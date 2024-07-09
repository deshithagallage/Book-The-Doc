const express = require("express");
const {
  registerPatient,
  loginUser,
  registerCenter,
} = require("../controllers/authController");
const router = express.Router();

router.post("/register/patient", registerPatient);
router.post("/register/center", registerCenter);
router.post("/login", loginUser);

module.exports = router;
