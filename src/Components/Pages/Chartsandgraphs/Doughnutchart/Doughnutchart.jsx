import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const doughnutchartData = {
  labels: ["In Stock", "Out of Stock", "Low Stock"],
  datasets: [
    {
      data: [70, 15, 15],
      backgroundColor: ["#10B981", "#EF4444", "#F59E0B"],
    },
  ],
};

const Doughnutchart = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Inventory Distribution</h2>
      <Doughnut data={doughnutchartData} />
    </div>
  );
};

export default Doughnutchart;