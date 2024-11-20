import React from 'react';
import { useParams } from 'react-router-dom';

// Placeholder for detailed company data
const companyDetails = {
  id: 1,
  name: "Green Energy Inc.",
  location: "San Francisco, CA",
  logo: "https://example.com/image/green_logo.jpg",
  fullEmissionData: [20, 18, 15, 17, 14, 13, /* ...more data */],
  registeredOn: "2023-05-12",
};

const CompanyDetails = () => {
  const { id } = useParams();

  // Fetch data dynamically based on `id` later
  const company = companyDetails;

  return (
    <div>
      <div className="bg-green-700 min-h-screen p-8">
      <div className="flex bg-yellow-300 items-center space-x-6 mb-8">
        <img
          src={company.logo}
          alt={`${company.name} logo`}
          className="w-28 h-28 rounded-full"
        />
        <div>
          <h1 className="text-4xl font-bold text-gray-800">{company.name}</h1>
          <p className="text-gray-600">{company.location}</p>
          <p className="text-gray-500 text-sm">
            Registered on: {new Date(company.registeredOn).toLocaleDateString()}
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Full Emission Data
      </h2>
      <div className="bg-white shadow-md rounded-lg p-6 overflow-auto max-h-96">
        <ul className="space-y-2">
          {company.fullEmissionData.map((data, index) => (
            <li key={index} className="text-gray-600">
              {index + 1}: {data} ppm
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default CompanyDetails;
