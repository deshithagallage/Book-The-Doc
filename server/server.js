const express = require('express');
<<<<<<< HEAD
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/hospitals', require('./routes/hospitalRoutes'));
app.use('/api/doctors', require('./routes/doctorRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
=======
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const appointmentRoutes = require('./routes/appointments');
const userRoutes = require('./routes/users');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection setup
mongoose.connect(`mongodb+srv://ABC:ABC@mern-crud.t4kweiu.mongodb.net/?retryWrites=true&w=majority&appName=mern-crud`, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.use('/api/appointments', appointmentRoutes);
app.use('/api/users', userRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
>>>>>>> ft/hm-dashboard
});
