const mongoose = require('mongoose');

const upcomingAppointmentsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  doctorName: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: { type: String, enum: ['upcoming'], required: true },
});

const UpcomingAppointments = mongoose.model('UpcomingAppointments', upcomingAppointmentsSchema);
module.exports = UpcomingAppointments;
