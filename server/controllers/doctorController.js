const Doctor = require('../models/doctor');
const Hospital = require('../models/hospital');

const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().populate('hospital', 'name address phone');
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const createDoctor = async (req, res) => {
  const { name, specialization, hospitalId } = req.body;

  try {
    const hospital = await Hospital.findById(hospitalId);
    if (!hospital) {
      return res.status(404).json({ message: 'Hospital not found' });
    }

    const newDoctor = new Doctor({ name, specialization, hospital: hospitalId });
    await newDoctor.save();
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getDoctors, createDoctor };
