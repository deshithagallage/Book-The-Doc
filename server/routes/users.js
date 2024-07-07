const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Get user info
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

// Update user info
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
});

module.exports = router;
