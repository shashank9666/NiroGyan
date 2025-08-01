// backend/seed.js
const mongoose = require('mongoose');
const Doctor = require('./models/doctor.model');
require('dotenv').config(); // Load .env variables

const doctors = [
  {
    _id: '688c58643e8318eae7a2bd42',
    name: 'Dr. Priya Sharma',
    specialization: 'Cardiologist',
    available: true,
    schedule: {
      monday: '10:00 - 14:00',
      wednesday: '12:00 - 16:00',
      friday: '09:00 - 13:00',
    },
    bio: 'Specialized in cardiovascular diseases with 10 years of experience.',
    profileImage: '/images/doctors/priya.jpg',
  },
  {
    _id: '688c58643e8318eae7a2bd43',
    name: 'Dr. Rohan Patel',
    specialization: 'Neurologist',
    available: true,
    schedule: {
      tuesday: '11:00 - 15:00',
      thursday: '13:00 - 17:00',
      saturday: '10:00 - 14:00',
    },
    bio: 'Expert in nervous system disorders and treatment.',
    profileImage: '/images/doctors/rohan.jpg',
  },
  {
    _id: '688c58643e8318eae7a2bd44',
    name: 'Dr. Ananya Desai',
    specialization: 'Pediatrician',
    available: false,
    schedule: {
      monday: '09:00 - 12:00',
      wednesday: '10:00 - 13:00',
      friday: '14:00 - 17:00',
    },
    bio: 'Child healthcare specialist with 8 years experience.',
    profileImage: '/images/doctors/ananya.jpg',
  },
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Doctor.deleteMany({});
    await Doctor.insertMany(doctors);
    console.log('✅ MongoDB Atlas seeded successfully');
    process.exit();
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
}

seedDB();
