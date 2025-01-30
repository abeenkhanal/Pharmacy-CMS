import React from "react";
import { Scatter } from "react-chartjs-2";
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from "chart.js";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const scatterchartData = {
  datasets: [
    {
      label: "Sales vs Returns",
      data: [
        { x: 10, y: 2 },
        { x: 15, y: 3 },
        { x: 20, y: 5 },
        { x: 25, y: 4 },
        { x: 30, y: 6 },
      ],
      backgroundColor: "#6366F1",
    },
  ],
};

const Scatterchart = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Sales vs Returns Analysis</h2>
      <Scatter data={scatterchartData} />
    </div>
  );
};

export default Scatterchart;