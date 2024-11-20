import React from 'react';
import { useNavigate } from 'react-router-dom';

// Sample data for registered companies
const companies = [
  {
    id: 1,
    name: "Green Energy Inc.",
    location: "San Francisco, CA",
    logo: "https://example.com/image/green_logo.jpg",
    emissionsData: [20, 18, 15, 17, 14, 13], // Last 6 hours of sensor data
    status: "Reducing",
  },
  {
    id: 2,
    name: "SteelWorks Ltd.",
    location: "Pittsburgh, PA",
    logo: "https://example.com/image/steelworks_logo.jpg",
    emissionsData: [50, 55, 60, 62, 65, 70], // Last 6 hours of sensor data
    status: "Increasing",
  },
];

const AdminDashboard = () => {
  const navigate = useNavigate();

  const calculateEmissionChange = (data) => {
    const [first, ...rest] = data;
    return rest.reduce((acc, curr) => acc + (curr - first), 0) > 0 ? "Increasing" : "Reducing";
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-8">
        Admin Dashboard
      </h1>
      <div className="space-y-6">
        {companies.map((company) => (
          <div
            key={company.id}
            className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between hover:shadow-xl cursor-pointer transition-shadow"
            onClick={() => navigate(`/company/${company.id}`)}
          >
            {/* Left Section */}
            <div className="flex items-center">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-24 h-24 rounded-full mr-6"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {company.name}
                </h2>
                <p className="text-gray-600">{company.location}</p>
              </div>
            </div>

            {/* Right Section */}
            <div className="text-right">
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                Last 6 Hours Emissions:
              </h3>
              <div className="flex space-x-2 justify-end">
                {company.emissionsData.map((data, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-200 rounded-full text-gray-700 text-sm"
                  >
                    {data} ppm
                  </span>
                ))}
              </div>
              <span
                className={`mt-2 inline-block px-4 py-2 rounded-full text-white ${
                  calculateEmissionChange(company.emissionsData) === "Reducing"
                    ? "bg-green-600"
                    : "bg-red-600"
                }`}
              >
                {calculateEmissionChange(company.emissionsData)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
