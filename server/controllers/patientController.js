const Patient = require("../models/patient");

const getPatientInfo = async (req, res) => {
  try {
    const patientId = req.user.id;
    if (req.user.id !== patientId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const patient = await Patient.findById(patientId);
    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getPatientInfo, getPatients };
