const Hospital = require('../models/hospital');

const getHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.json(hospitals);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const createHospital = async (req, res) => {
  const { name, address, phone } = req.body;

  try {
    const newHospital = new Hospital({ name, address, phone });
    await newHospital.save();
    res.status(201).json(newHospital);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getHospitals, createHospital };
