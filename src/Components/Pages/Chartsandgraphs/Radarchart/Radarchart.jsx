import React from "react";
import { Radar } from "react-chartjs-2";

const radarchartData = {
  labels: ["Medicines", "Supplies", "Equipments", "Orders", "Returns"],
  datasets: [
    {
      label: "Current Month",
      data: [65, 59, 90, 81, 56],
      backgroundColor: "rgba(99, 102, 241, 0.2)",
      borderColor: "#6366F1",
    },
    {
      label: "Previous Month",
      data: [28, 48, 40, 19, 96],
      backgroundColor: "rgba(245, 158, 11, 0.2)",
      borderColor: "#F59E0B",
    },
  ],
};

const Radarchart = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Category Comparisons</h2>
      <Radar data={radarchartData} />
    </div>
  );
};

export default Radarchart;