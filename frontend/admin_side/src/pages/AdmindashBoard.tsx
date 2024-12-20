import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Sample data for registered companies
const companies = [
  {
    id: 1,
    name: "Green Energy Inc.",
    location: "Nairobi",
    logo: "https://example.com/image/green_logo.jpg",
    emissionsData: [20, 18, 15, 17, 14, 13], // Last 6 hours of sensor data
    status: "Reducing",
  },
  {
    id: 2,
    name: "SteelWorks Ltd.",
    location: "Thika",
    logo: "https://example.com/image/steelworks_logo.jpg",
    emissionsData: [50, 55, 60, 62, 65, 70], // Last 6 hours of sensor data
    status: "Increasing",
  },
  {
    id: 2,
    name: "Gtech.",
    location: "Thika",
    logo: "https://example.com/image/steelworks_logo.jpg",
    emissionsData: [50, 55, 60, 62, 65, 70], // Last 6 hours of sensor data
    status: "Increasing",
  },
  {
    id: 2,
    name: "Gchemicals Ltd.",
    location: "Kenya                    ",
    logo: "https://example.com/image/steelworks_logo.jpg",
    emissionsData: [50, 55, 60, 62, 65, 70], // Last 6 hours of sensor data
    status: "Increasing",
  },
];

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [methaneData, setMethaneData] = useState([20, 18, 15, 17, 14, 13]); // Starting data
  const [otherGasData, setOtherGasData] = useState([10, 12, 14, 16, 18, 20]); // Simulate another gas

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate fluctuating methane values with a larger range of fluctuation
      setMethaneData((prevData) => [
        ...prevData.slice(1),
        Math.floor(Math.random() * 20) + prevData[prevData.length - 1] - 10, // More fluctuation range
      ]);
      // Simulate other gas data with larger variation
      setOtherGasData((prevData) => [
        ...prevData.slice(1),
        Math.floor(Math.random() * 10) + prevData[prevData.length - 1] - 5, // Larger fluctuation range
      ]);
    }, 500); // Faster update every 500ms

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const calculateEmissionChange = (data) => {
    const [first, ...rest] = data;
    return rest.reduce((acc, curr) => acc + (curr - first), 0) > 0 ? "Increasing" : "Reducing";
  };

  // Data for the chart
  const chartData = {
    labels: ['Min 1', 'Min 2', 'Hour 3', 'Min 4', 'Min 5', 'Min 6'],
    datasets: [
      {
        label: 'Methane (ppm)',
        data: methaneData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Other Gas (ppm)',
        data: otherGasData,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-8">Admin Dashboard</h1>
      <div className="space-y-6">
        {companies.map((company) => (
          <div
            key={company.id}
            className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between hover:shadow-xl cursor-pointer transition-shadow"
            // onClick={() => navigate(/company/${company.id})}
          >
            {/* Left Section */}
            <div className="flex items-center">
              <img
                src={company.logo}
                alt="logo"
                className="w-24 h-24 rounded-full mr-6"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{company.name}</h2>
                <p className="text-gray-600">{company.location}</p>
              </div>
            </div>

            {/* Right Section with Chart */}
            <div className="text-right">
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                Last 6 Mintues Emissions:
              </h3>
              <div className="w-96 h-60">
                <Line data={chartData} />
              </div>
              <span
                className={`mt-2 inline-block px-4 py-2 rounded-full text-white ${
                  calculateEmissionChange(methaneData) === "Reducing"
                    ? "bg-green-600"
                    : "bg-red-600"
                }`}
              >
                {calculateEmissionChange(methaneData)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;