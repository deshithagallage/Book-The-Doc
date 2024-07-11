const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  qualifications: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  medicalCenter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MedicalCenter",
  },
  mesicalCenterName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Doctor", doctorSchema);
