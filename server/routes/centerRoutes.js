const express = require('express');
const {
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
} = require('../controllers/centerController');
const router = express.Router();
const auth = require("../middleware/auth");
const authorize = require("../middleware/authorize");

router.get('/appointments/today/count', auth, authorize(["medicalCenter"]), getCountAppointmentsTodayForCenter);
router.get('/appointments/today', auth, authorize(["medicalCenter"]), getAppointmentsTodayForCenter);
router.get('/appointments/upcoming/count', auth, authorize(["medicalCenter"]), getCountUpcomingAppointments);
router.get('/appointments/upcoming', auth, authorize(["medicalCenter"]), getUpcomingAppointments);
router.get('/doctors/count', auth, authorize(["medicalCenter"]), getCountDoctorsForCenter);
router.get('/doctors', auth, authorize(["medicalCenter"]), getDoctorsForCenter);
router.get('/details', auth, authorize(["medicalCenter"]), getMedicalCenterDetails);
router.get('/appointments/:date', auth, authorize(["medicalCenter"]), getAppointmentsOnGivenDayForCenter);
router.get('/appointments/:doctorId/:date', auth, authorize(["medicalCenter"]), getAppointmentsForDoctorOnGivenDay);
router.get('/appointments/:doctorId/:timeslotId', auth, authorize(["medicalCenter"]), getAppointmentsForDoctorInTimeslot);

module.exports = router;
