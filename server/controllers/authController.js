const Patient = require("../models/patient");
const Doctor = require("../models/doctor");
const Center = require("../models/center");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerPatient = async (req, res) => {
  const { name, address, phone, email, dob, password } = req.body;

  try {
    let user = await Patient.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new Patient({
      name,
      address,
      phone,
      email,
      password,
      dob,
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
      { expiresIn: "2h" },
      (err, token) => {
        if (err) throw err;
        res.json({ message: "Registation Success" });
      }
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const registerCenter = async (req, res) => {
  const {
    name,
    email,
    medicalNumber,
    password,
    district,
    city,
    zipCode,
    phone,
  } = req.body;

  try {
    let user = await Center.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new Center({
      name,
      email,
      medicalNumber,
      password,
      district,
      city,
      zipCode,
      phone,
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
      { expiresIn: "2h" },
      (err, token) => {
        if (err) throw err;
        res.json({ message: "Registation Success" });
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
      user = await Center.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials1" });
      }
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials2" });
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
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token: token, userId: user.id, userRole: user.role });
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerPatient, loginUser, registerCenter };
