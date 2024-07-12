const mongoose = require('mongoose');

const timeslotSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  maxPatients: {
    type: Number,
    required: true,
  },
  bookedPatients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
  }],
  channellingCenter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'center',
    required: true,
  },
  channellingCenterName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Timeslot', timeslotSchema);
