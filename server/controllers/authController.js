const Patient = require('../models/patient');
const Doctor = require('../models/doctor');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const requestPasswordReset = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await Patient.findOne({ email });
        if (!user) {
            const user = await Doctor.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
        }
        const resetToken = crypto.randomBytes(20).toString('hex');

        user.resetPasswordToken = resetToken;
        user.resetPasswordExpire = Date.now() + 3600000;

        await user.save();

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465, // Use 587 if you want
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: user.email,
            subject: 'Password Reset Request',
            text: `Hi ${user.name},\n\nYou are receiving this email because you (or someone else) has requested the reset of the password for your account.\n\nPlease click on the following link to reset your password: \n\n${process.env.CLIENT_URL}/resetpassword/${resetToken}\n\nIf you did not request this, please ignore this email and your password will remain unchanged.\n`,
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err.message);
                return res.status(500).json({ message: 'Server error' });
            }
            res.json({ message: 'Email sent' });
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    try {
        const user = await Patient.findOne({
            resetPasswordToken: token,
            resetPasswordExpire: { $gt: Date.now() },
        });
        if (!user) {
            const user = await Doctor.findOne({
                resetPasswordToken: token,
                resetPasswordExpire: { $gt: Date.now() },
            });
            if (!user) {
                return res.status(400).json({ message: 'Invalid or expired token' });
            }
        }
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        res.json({ message: 'Password updated successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Server error1' });
    }
};

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
      let user = await Doctor.findOne({ email });
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      user = new Doctor({
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
            return res.status(400).json({ message: 'Invalid credentials1' });
        }
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials2' });
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
  
  
module.exports = { registerDoctor, registerPatient, loginUser, requestPasswordReset, resetPassword };
