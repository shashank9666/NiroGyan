const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment.model');

// POST new appointment
router.post('/', async (req, res) => {
  const { doctorId, patientName, appointmentDate, reason } = req.body;

  if (!doctorId || !patientName || !appointmentDate || !reason) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const newAppointment = new Appointment({
      doctorId,
      patientName,
      appointmentDate,
      reason,
    });

    await newAppointment.save();
    res.status(201).json({ message: '✅ Appointment booked successfully' });
  } catch (error) {
    console.error('❌ Error saving appointment:', error);
    res.status(500).json({ error: 'Failed to book appointment' });
  }
});

// GET all appointments (optional)
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find().populate('doctorId');
    res.json(appointments);
  } catch (error) {
    console.error('❌ Error fetching appointments:', error);
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
});

module.exports = router;
