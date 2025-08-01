import React, { useState } from "react";

const AppointmentForm = ({ doctorId, onSuccess }) => {
  const [formData, setFormData] = useState({
    patientName: "",
    email: "",
    datetime: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, doctorId }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Appointment booked successfully!");
        onSuccess && onSuccess();
      } else {
        setMessage(`❌ ${data.message || "Booking failed."}`);
      }
    } catch (err) {
      setMessage("❌ Server error.",err);
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow space-y-4"
    >
      <h2 className="text-xl font-semibold">Book Appointment</h2>
      <input
        type="text"
        name="patientName"
        placeholder="Your Name"
        required
        className="w-full border p-2 rounded"
        value={formData.patientName}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full border p-2 rounded"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="datetime-local"
        name="datetime"
        required
        className="w-full border p-2 rounded"
        value={formData.datetime}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Booking..." : "Book Appointment"}
      </button>
      {message && <p className="text-sm text-center">{message}</p>}
    </form>
  );
};

export default AppointmentForm;
