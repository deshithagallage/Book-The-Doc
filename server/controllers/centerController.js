const Appointment = require('../models/appointment');
const Timeslot = require('../models/timeslot');
const Doctor = require('../models/doctor');
const ChannellingCenter = require('../models/center');

// Error
const createAppoinmentList = async (appointments, doctor=null) =>{
    const output = [];
    for (let i = 0; i < appointments.length; i++) {

        if (!doctor) {
            doctor = await Doctor.findById(appointments[i].timeslot.doctor).select("name");
        }
        else {
            doctor = await Doctor.findById(doctor).select("name");
        }
        patient = await Patient.findById(appointments[i].patient).select("name");

        const details = {
            _id: appointments[i]._id, 
            doctor: doctor.name,
            date: appointments[i].timeslot.date,
            startTime: appointments[i].timeslot.startTime,
            endTime: appointments[i].timeslot.endTime,
            queueNumber: appointments[i].queueNumber,
            status: appointments[i].status,
        };
        output.push(details);
    }
    return output
}

const getCountAppointmentsTodayForCenter = async (req, res) => {
    const centerId = req.user.id;
    const today = new Date().setHours(0, 0, 0, 0);
  
    try {
      const count = await Appointment.countDocuments({
        channellingCenter: centerId,
        date: {
          $gte: new Date(today),
          $lt: new Date(today + 24 * 60 * 60 * 1000)
        }
      });
      res.json({ count });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

  
const getAppointmentsTodayForCenter = async (req, res) => {
    const centerId = req.user.id;
    const today = new Date().setHours(0, 0, 0, 0);

    try {
        const appointments = await Appointment.find({
        channellingCenter: centerId,
        date: {
            $gte: new Date(today),
            $lt: new Date(today + 24 * 60 * 60 * 1000)
        }
        }).populate('timeslot');
        res.json(appointments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
};


const getCountUpcomingAppointments = async (req, res) => {
    const today = new Date();
    const centerId = req.user.id;
  
    try {
        const count = await Appointment.countDocuments({
        channellingCenter: centerId,    
        status: 'upcoming',
        date: { $gte: today },
        timeslot: {
          $in: await Timeslot.find({ channellingCenter: centerId }).distinct('_id')
        }
      });
      
      res.json({ count });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


const getUpcomingAppointments = async (req, res) => {
    const today = new Date();
    const centerId = req.user.id;
  
    try {
      const count = await Appointment.find({
        channellingCenter: centerId,
        status: 'upcoming',
        date: { $gte: today },
        timeslot: {
          $in: await Timeslot.find({ channellingCenter: centerId }).distinct('_id')
        }
      });
      
      res.json({ count });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

// Error
const getCountDoctorsForCenter = async (req, res) => {
    const centerId = req.user.id;

    try {
        const count = await Doctor.countDocuments({ channellingCenter: centerId });
        res.json({ count });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Error
const getDoctorsForCenter = async (req, res) => {
    const centerId = req.params.centerId;

    try {
        const doctors = await Doctor.find({ channellingCenter: centerId });
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getMedicalCenterDetails = async (req, res) => {
    const centerId = req.user.id;

    try {
        const center = await ChannellingCenter.findById(centerId);
        if (!center) {
        return res.status(404).json({ message: 'Medical center not found' });
        }
        res.json(center);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAppointmentsOnGivenDayForCenter = async (req, res) => {
    const centerId = req.user.id;
    const date = req.params;
    const givenDay = new Date(date).setHours(0, 0, 0, 0);

    try {
        const appointments = await Appointment.find({
        channellingCenter: centerId,
        date: {
            $gte: new Date(givenDay),
            $lt: new Date(givenDay + 24 * 60 * 60 * 1000)
        }
        }).populate('timeslot');
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAppointmentsForDoctorOnGivenDay = async (req, res) => {
    const { doctorId, date } = req.params;
    const givenDay = new Date(date).setHours(0, 0, 0, 0);
    const centerId = req.user.id;

    try {
    const appointments = await Appointment.find({
        channellingCenter: centerId,
        doctor: doctorId,
        date: {
        $gte: new Date(givenDay),
        $lt: new Date(givenDay + 24 * 60 * 60 * 1000)
        }
    }).populate('timeslot');
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getAppointmentsForDoctorInTimeslot = async (req, res) => {
    const { doctorId, timeslotId } = req.params;
  
    try {
      const timeslot = await Timeslot.findById(timeslotId);
  
      if (!timeslot) {
        return res.status(404).json({ message: 'Timeslot not found' });
      }
  
      if (timeslot.doctor.toString() !== doctorId) {
        return res.status(400).json({ message: 'Timeslot does not belong to this doctor' });
      }
  
      const appointments = await Appointment.find({ timeslot: timeslotId });
      res.json(appointments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
  
module.exports = {
    getCountAppointmentsTodayForCenter,
    getAppointmentsTodayForCenter,
    getCountUpcomingAppointments,
    getUpcomingAppointments,
    getCountDoctorsForCenter,
    getDoctorsForCenter,
    getMedicalCenterDetails,
    getAppointmentsOnGivenDayForCenter,
    getAppointmentsForDoctorOnGivenDay,
    getAppointmentsForDoctorInTimeslot
};