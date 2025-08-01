const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor.model');

// GET all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch doctors' });
  }
});

module.exports = router;
