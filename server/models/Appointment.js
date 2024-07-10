const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  timeslot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Timeslot',
    required: true,
  },
  queueNumber: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['upcoming', 'completed', 'cancelled'],
    default: 'upcoming',
  },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
