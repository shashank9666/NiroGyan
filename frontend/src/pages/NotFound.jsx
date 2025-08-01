import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-2">Oops! Page not found.</p>
      <Link to="/" className="mt-4 text-blue-500 underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
