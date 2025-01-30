import React from "react";
import { Pie } from "react-chartjs-2";

const piechartData = {
  labels: ["Pharmacy A", "Pharmacy B", "Pharmacy C"],
  datasets: [
    {
      data: [50, 30, 20],
      backgroundColor: ["#6366F1", "#F59E0B", "#10B981"],
    },
  ],
};

const Piechart = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Pharmacy Distribution</h2>
      <Pie data={piechartData} />
    </div>
  );
};

export default Piechart;