const express = require('express');
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
});
