import React from 'react';

const AdminNavbar = () => {
  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center">
      {/* Left: Logo */}
      <div className="text-xl font-bold">
        <a href="/admin">CarbonTrack Admin</a>
      </div>
      
      {/* Center: Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <a href="/admin" className="hover:text-green-400">Dashboard</a>
        <a href="/admin/companies" className="hover:text-green-400">Companies</a>
        <a href="/admin/reports" className="hover:text-green-400">Reports</a>
      </div>

      {/* Right: Profile Dropdown */}
      <div className="relative">
        <button className="flex items-center space-x-2 focus:outline-none">
          <span>Admin</span>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD29P9Es6wEfJxT_lxPRw8ceTMQ-HwfWNanA&s"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </button>
        {/* Dropdown Menu */}
        <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 shadow-md rounded-lg py-2 hidden group-hover:block">
          <a href="/admin/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
          <a href="/logout" className="block px-4 py-2 hover:bg-gray-100">Logout</a>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
