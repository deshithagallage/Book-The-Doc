const mongoose = require('mongoose');

const appointmentHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  doctorName: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: { type: String, enum: ['completed', 'cancelled'], required: true },
  notes: { type: String, default: '' },
  prescription: { type: String, default: '' },
});

const AppointmentHistory = mongoose.model('AppointmentHistory', appointmentHistorySchema);
module.exports = AppointmentHistory;
