const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const medicalCenterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  medicalNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: false,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "medicalCenter",
  },
});

module.exports = mongoose.model("MedicalCenter", medicalCenterSchema);
