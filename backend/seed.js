const mongoose = require('mongoose');
const Doctor = require('./models/Doctor');
require('dotenv').config();

const doctors = [
  {
    _id: '688c84825832e2dd0c7cc51b',
    name: 'Dr. Priya Sharma',
    specialization: 'Cardiologist',
    available: true,
    schedule: {
      monday: '10:00 - 14:00',
      wednesday: '12:00 - 16:00',
      friday: '09:00 - 13:00'
    },
    bio: 'Specialized in cardiovascular diseases with 10 years of experience.',
    profileImage: '/images/doctors/priya.jpg',
    experience: 10
  },
  // Add more doctors if needed
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Doctor.deleteMany({});
    await Doctor.insertMany(doctors);
    console.log('Database seeded successfully');
    process.exit();
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seedDB();