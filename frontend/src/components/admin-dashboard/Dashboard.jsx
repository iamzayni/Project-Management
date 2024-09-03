import React from 'react';
import { FaChartLine, FaTasks, FaUsers, FaUser } from 'react-icons/fa';

const Dashboard = () => {
  const username = localStorage.getItem('username') || 'User';

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Project Manager</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <a href="#" className="flex items-center text-gray-300 hover:text-white">
                <FaChartLine className="mr-3" /> Dashboard
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center text-gray-300 hover:text-white">
                <FaTasks className="mr-3" /> Projects
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center text-gray-300 hover:text-white">
                <FaUsers className="mr-3" /> Teams
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="flex-1 bg-gray-100 p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Project Management Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Welcome {username}</span>
            <FaUser className="w-10 h-10 text-gray-800" />
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Project Card */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Project A</h2>
            <p className="text-gray-600">Description of Project A...</p>
            <div className="mt-4">
              <span className="inline-block bg-green-100 text-green-800 text-xs font-medium py-1 px-2 rounded-full">Active</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Project B</h2>
            <p className="text-gray-600">Description of Project B...</p>
            <div className="mt-4">
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium py-1 px-2 rounded-full">Pending</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Project C</h2>
            <p className="text-gray-600">Description of Project C...</p>
            <div className="mt-4">
              <span className="inline-block bg-red-100 text-red-800 text-xs font-medium py-1 px-2 rounded-full">Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
