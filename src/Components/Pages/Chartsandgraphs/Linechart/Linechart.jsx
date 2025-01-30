import React from "react";
import { Line } from "react-chartjs-2";

const linechartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  datasets: [
    {
      label: "Revenue",
      data: [12, 19, 10, 15, 22, 30, 25, 35, 28, 40],
      borderColor: "#6366F1",
      backgroundColor: "rgba(99, 102, 241, 0.5)",
    },
    {
      label: "Expenses",
      data: [8, 14, 7, 12, 18, 25, 20, 30, 25, 35],
      borderColor: "#F59E0B",
      backgroundColor: "rgba(245, 158, 11, 0.5)",
    },
  ],
};

const Linechart = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Monthly Revenue vs Expenses</h2>
      <Line data={linechartData} />
    </div>
  );
};

export default Linechart;