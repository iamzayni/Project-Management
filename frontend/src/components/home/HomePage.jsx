import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import image from '../../media/auth.jpg';  // Correct image import

const HomePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetStartedClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-white to-blue-50 p-8">
      <div className="md:w-1/2 flex flex-col justify-center items-start">
        <h1 className="text-blue-500 text-4xl font-bold">PROJECT</h1>
        <h1 className="text-gray-900 text-4xl font-bold">PLANNING</h1>
        <p className="text-gray-600 mt-4">
          Organize and manage your team like a boss with Bitrix24, project
          planning packing more capabilities than you can imagine.
        </p>
        <button
          onClick={handleGetStartedClick} // Add onClick handler
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          Get Started
        </button>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0">
        <img
          src={image}
          alt="Project Planning"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default HomePage;
