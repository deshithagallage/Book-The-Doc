const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  doctorName: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['upcoming', 'completed'], required: true },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
