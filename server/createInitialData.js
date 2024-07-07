const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const User = require('./models/User');
const Appointment = require('./models/Appointment');

const DBLINK = `mongodb+srv://ABC:ABC@mern-crud.t4kweiu.mongodb.net/?retryWrites=true&w=majority&appName=mern-crud`;

mongoose.connect(DBLINK, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', async () => {
  console.log('MongoDB connected');

  // Create initial user data
  const user = new User({
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    profilePicture: 'https://via.placeholder.com/150',
    age: 30,
    city: 'New York',
    sugarLevel: 'Normal',
    bloodPressure: '120/80',
    totalAppointments: 5,
    bookedPreviousDoctors: ['Dr. Smith', 'Dr. Johnson']
  });

  await user.save();

  // Create initial appointment data
  const appointment1 = new Appointment({
    userId: user._id,
    doctorName: 'Dr. Smith',
    date: new Date(),
    status: 'upcoming',
  });

  const appointment2 = new Appointment({
    userId: user._id,
    doctorName: 'Dr. Johnson',
    date: new Date(Date.now() - 86400000), // 1 day ago
    status: 'completed',
  });

  await appointment1.save();
  await appointment2.save();

  console.log('Initial data created');
  mongoose.connection.close();
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error: ', err);
});
