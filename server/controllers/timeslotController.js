const Timeslot = require('../models/timeslot');
const MedicalCenter = require('../models/center');


// Create a timeslot
const createTimeslot = async (req, res) => {
 
  const doctor= req.params;
  // console.log(doctor);
  const doctorID = doctor.doctorID;
  const { date, startTime, endTime, maxPatients } = req.body;
  const channellingCenter = await MedicalCenter.findById(req.user.id);
  const channellingCenterName = channellingCenter.name;
  const channellingCenterId = channellingCenter._id;

  // console.log(channellingCenter);
  console.log(doctorID);
  try {
    const timeslot = new Timeslot({
      doctor :doctorID,
      date,
      startTime,
      endTime,
      maxPatients,
      bookedPatients: [],
      channellingCenter: channellingCenterId,
      channellingCenterName,
    });

    await timeslot.save();
    res.status(201).json(timeslot);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all timeslots for a doctor
const getTimeslotsByDoctor = async (req, res) => {
  const { doctorId } = req.params;

  try {
    console.log(doctorId);
    const timeslots = await Timeslot.find({ doctor: doctorId });
    res.json(timeslots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getTimeslotsByCenterToday = async (req, res) => {
  const centerId = req.user.id;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  try {
    const timeslots = await Timeslot.find({
      channellingCenter: centerId,
      date: { $gte: today, $lt: tomorrow }
    }).populate('doctor', 'name');

    res.json(timeslots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCountTimeslotsByCenterToday = async (req, res) => {
  const centerId = req.user.id;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  try {
    const count = await Timeslot.countDocuments({
      channellingCenter: centerId,
      date: { $gte: today, $lt: tomorrow }
    });

    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { createTimeslot, getTimeslotsByDoctor, getTimeslotsByCenterToday, getCountTimeslotsByCenterToday};
