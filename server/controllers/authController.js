const Patient = require('../models/patient');
const Doctor = require('../models/doctor');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const registerPatient = async (req, res) => {
    const { name, address, phone, email, dob, password } = req.body;
  
    try {
      let user = await Patient.findOne({ email });
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      user = new Patient({
        name,
        address,
        phone,
        email,
        password,
        dob
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
  
      await user.save();
  
      const payload = {
        user: {
          id: user.id,
          role: user.role,
        },
      };
  
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '2h' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
  

const registerDoctor = async (req, res) => {
    const { name, specialization, hospital, address, phone, email, dob, password } = req.body;
  
    try {
      let user = await Patient.findOne({ email });
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      user = new Patient({
        name,
        specialization,
        hospital,
        address,
        phone,
        email,
        dob,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
  
      await user.save();
  
      const payload = {
        user: {
          id: user.id,
          role: user.role,
        },
      };
  
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '2h' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };

const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      let user = await Patient.findOne({ email });
      if (!user) {
        let user = await Doctor.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const payload = {
        user: {
          id: user.id,
          role: user.role,
        },
      };
  
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '1h' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  
module.exports = { registerDoctor, registerPatient, loginUser };
