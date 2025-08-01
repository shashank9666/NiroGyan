const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  availableSlots: [String], // e.g., ["10:00 AM", "11:30 AM"]
  bio: String,
});

module.exports = mongoose.model('Doctor', doctorSchema);
