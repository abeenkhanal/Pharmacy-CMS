import React, { useState } from "react";

const PointsCMS = () => {
  const [points, setPoints] = useState([
    "Track inventory with real-time updates",
    "Manage prescriptions and automate refills",
    "Generate detailed sales and business reports",
    "Provide seamless customer service",
  ]);

  const handlePointChange = (index, value) => {
    const updatedPoints = [...points];
    updatedPoints[index] = value;
    setPoints(updatedPoints);
  };

  const addPoint = () => {
    setPoints([...points, ""]);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 h-max p-8">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden p-8">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg mb-6">
          <h1 className="text-3xl font-bold">POINTS SECTION CMS</h1>
          <p className="mt-2 text-sm">Manage the points below</p>
        </div>

        {/* Points Section */}
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Edit Points</h2>
          <form className="space-y-6">
            {points.map((point, index) => (
              <div key={index} className="flex items-center gap-4 mb-4">
                <input
                  type="text"
                  value={point}
                  onChange={(e) => handlePointChange(index, e.target.value)}
                  placeholder="Enter point text"
                  className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addPoint}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
            >
              Add New Point
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PointsCMS;
