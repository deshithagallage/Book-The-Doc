const Doctor = require("../models/doctor");
const ChannellingCenter  = require("../models/center");

const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().populate(
      "hospital",
      "name address phone"
    );
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getDoctorsByHospital = async (req, res) => {
  const { hospitalId } = req.params;

  try {
    const doctors = await Doctor.find({ hospital: hospitalId }).populate(
      "hospital",
      "name address phone"
    );
    if (doctors.length === 0) {
      return res
        .status(404)
        .json({ message: "No doctors found for this hospital" });
    }
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getDoctorsBySpecialization = async (req, res) => {
  const { specialization } = req.params;

  try {
    const doctors = await Doctor.find({ specialization });
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addDoctor = async (req, res) => {
  const { name, specialization, qualifications, gender } = req.body;
  centerId = req.user.id;
  try {
    const newDoctor = new Doctor({
      name,
      specialization,
      qualifications,
      gender
    });
    await newDoctor.save();

    const center = await ChannellingCenter.findById(centerId);
    if (!center) {
      return res.status(404).json({ message: 'Channelling center not found' });
    }

    center.doctors.push(newDoctor);
    await center.save();

    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {
  getDoctors,
  getDoctorsByHospital,
  getDoctorsBySpecialization,
  addDoctor,
};
