import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // Required for area charts
);

const areaChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  datasets: [
    {
      label: "Sales",
      data: [12, 19, 10, 15, 22, 30, 25, 35, 28, 40],
      borderColor: "#6366F1",
      backgroundColor: "rgba(99, 102, 241, 0.2)",
      fill: true, // Enable fill for area chart
    },
    {
      label: "Expenses",
      data: [8, 14, 7, 12, 18, 25, 20, 30, 25, 35],
      borderColor: "#F59E0B",
      backgroundColor: "rgba(245, 158, 11, 0.2)",
      fill: true, // Enable fill for area chart
    },
  ],
};

const Areachart1 = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Sales vs Expenses (Area Chart)</h2>
      <Line data={areaChartData} />
    </div>
  );
};

export default Areachart1;