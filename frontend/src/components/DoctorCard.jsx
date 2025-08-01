import { useNavigate } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/doctors/${doctor._id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-white rounded-2xl shadow p-4 hover:shadow-lg transition"
    >
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <h3 className="text-xl font-semibold">{doctor.name}</h3>
      <p className="text-gray-600">{doctor.specialization}</p>
      <span
        className={`mt-2 inline-block text-sm px-3 py-1 rounded-full ${
          doctor.status === "Available Today"
            ? "bg-green-100 text-green-700"
            : doctor.status === "Fully Booked"
            ? "bg-red-100 text-red-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {doctor.status}
      </span>
    </div>
  );
};

export default DoctorCard;
