import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/doctors/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Doctor not found");
        return res.json();
      })
      .then((data) => {
        setDoctor(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        navigate("/not-found"); // redirect if 404
      });
  }, [id, navigate]);

  if (loading) return <div className="text-center mt-10">Loading doctor info...</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <div className="bg-white shadow-md rounded p-6">
        <div className="flex items-center space-x-4">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold">{doctor.name}</h2>
            <p className="text-gray-600">{doctor.specialization}</p>
            <p className="mt-2">
              <span className="font-semibold">Availability:</span>{" "}
              {doctor.availability}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Book an Appointment</h3>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Appointment request submitted!");
            }}
          >
            <input
              type="text"
              placeholder="Patient Name"
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="datetime-local"
              required
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
