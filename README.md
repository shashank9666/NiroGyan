# NirogGyan - Healthcare Appointment Booking Web Application


## 🏥 Project Overview

**NirogGyan** is a responsive healthcare appointment booking web application. It allows users to browse available doctors, view their profiles, and book appointments seamlessly. Built using **React** and styled with **Tailwind CSS**, the app is optimized for user-friendliness and responsiveness across devices.



## 🎯 Assignment Objective

The goal of this assignment was to create a simple, clean, and intuitive user interface for booking healthcare appointments. It showcases doctor listings, individual doctor profiles, and a working appointment form.



## 🧩 Features

### ✅ Core Functionality

1. **Landing Page:**
   - Lists all available doctors with their profile image, name, specialization, and availability.
   - Includes a search bar to filter doctors by name or specialization.

2. **Doctor Profile Page:**
   - Displays detailed doctor information including specialization and availability schedule.
   - Contains a clear "Book Appointment" button.

3. **Appointment Booking Form:**
   - Collects patient name, email, and desired appointment date & time.
   - Displays a confirmation message upon successful booking.


## 🚀 Technologies Used

| Area        | Tools / Libraries             |
|-------------|-------------------------------|
| Frontend    | React.js, Tailwind CSS        |
| Backend     | Node.js, Express.js, MongoDB  |
| Language    | JavaScript (TypeScript optional) |
| Utilities   | Axios, React Router DOM, dotenv, cors |



## 🧪 Optional Enhancements Implemented

- ✅ Tailwind CSS for fast and responsive styling.
- ✅ Backend using Express.js and MongoDB to serve real-time doctor data and handle bookings.
- ✅ Form validation for user inputs (email, date/time).
- ✅ Fully responsive across mobile, tablet, and desktop devices.



## 🧠 Challenges Faced & Solutions

### 1. **CORS Errors While Connecting Backend:**
   - **Solution:** Implemented `cors` middleware on the server and set appropriate headers to allow frontend access.

### 2. **MongoDB Connection Issues:**
   - **Solution:** Properly used `dotenv` to load environment variables and switched to `MONGODB_URI` as the environment key for clarity.

### 3. **State Management for Doctor Profiles:**
   - **Solution:** Used React Router with URL params to fetch individual doctor data dynamically.
