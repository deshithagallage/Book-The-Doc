const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const corsConfig = {
  origin: true,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.options("", cors(corsConfig));
app.use(cors(corsConfig));
app.use(express.json());

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/hospitals', require('./routes/hospitalRoutes'));
app.use('/api/doctors', require('./routes/doctorRoutes'));
app.use('/api/patients', require('./routes/patientRoutes'));
app.use('/api/timeslots', require('./routes/timeslotRoutes'));
app.use('/api/appointments', require('./routes/appointmentRoutes'));
app.use('/api/centers', require('./routes/centerRoutes'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);
});

