import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement, RadialLinearScale } from "chart.js";
import Linechart from "../Chartsandgraphs/Linechart/Linechart";
import Barchart from "../Chartsandgraphs/Barchart/Barchart";
import Piechart from "../Chartsandgraphs/Piechart/Piechart";
import Radarchart from "../Chartsandgraphs/Radarchart/Radarchart";
import Doughnutchart from "../Chartsandgraphs/Doughnutchart/Doughnutchart";
import Scatterchart from "../Chartsandgraphs/Scatterchart/Scatterchart";
import Areachart1 from "../Chartsandgraphs/Areachart1/Areachart1";


ChartJS.register(
  CategoryScale, 
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale
);

const Dashboard = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen p-8">
      {/* Header Section */}
      <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden p-6 mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
          <h1 className="text-3xl font-bold">Pharmacy Management Dashboard</h1>
          <p className="mt-2">Monitor and manage your pharmacy's performance in one place.</p>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
        {[
          { title: "Total Sales", value: "$150K", bg: "bg-blue-500" },
          { title: "New Users", value: "3,245", bg: "bg-green-500" },
          { title: "Pending Orders", value: "128", bg: "bg-yellow-500" },
          { title: "Inventory Value", value: "$75K", bg: "bg-red-500" },
        ].map((item, idx) => (
          <div key={idx} className={`${item.bg} text-white p-4 rounded-xl shadow-lg`}>
            <h2 className="text-sm">{item.title}</h2>
            <p className="text-3xl font-bold">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Linechart/>
        <Scatterchart/>
        
      </div>

      {/* Additional Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Piechart />
        <Radarchart />
        <Doughnutchart/>
       
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      
      <Barchart />
       
        <Areachart1/>
      </div>
    </div>
  );
};

export default Dashboard;