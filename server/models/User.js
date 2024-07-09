const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  profilePicture: { type: String, default: '' },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  city: { type: String, required: true },
  sugarLevel: { type: Number, required: true },
  bloodPressure: { type: String, required: true },
  totalAppointments: { type: Number, default: 0 },
  bookedPreviousDoctors: [{ type: String }],
});

const User = mongoose.model('User', userSchema);
module.exports = User;