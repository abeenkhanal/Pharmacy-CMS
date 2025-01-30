import React from "react";
import { Bar } from "react-chartjs-2";

const barchartData = {
  labels: ["2003", "Feb '03", "Mar '03", "Apr '03", "May '03", "Jun '03"],
  datasets: [
    {
      label: "Paracitamol",
      data: [10, 15, 22, 18, 25, 20],
      backgroundColor: "#6366F1",
    },
    {
      label: "Vitamins",
      data: [5, 12, 17, 12, 18, 15],
      backgroundColor: "#F59E0B",
    },
    {
      label: "Antibiotics",
      data: [3, 8, 10, 9, 12, 10],
      backgroundColor: "#10B981",
    },
  ],
};

const Barchart = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Product Sales by Category</h2>
      <Bar data={barchartData} />
    </div>
  );
};

export default Barchart;