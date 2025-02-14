import React, { useEffect } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement, RadialLinearScale } from "chart.js";
import Linechart from "../Chartsandgraphs/Linechart/Linechart";
import Barchart from "../Chartsandgraphs/Barchart/Barchart";
import Piechart from "../Chartsandgraphs/Piechart/Piechart";
import Radarchart from "../Chartsandgraphs/Radarchart/Radarchart";
import Doughnutchart from "../Chartsandgraphs/Doughnutchart/Doughnutchart";
import Scatterchart from "../Chartsandgraphs/Scatterchart/Scatterchart";
import Areachart1 from "../Chartsandgraphs/Areachart1/Areachart1";
import Metriccard from "../Chartsandgraphs/Metriccard/Metriccard";
import Activeusers from "../Chartsandgraphs/Activeusers/Activeuser";
import axios from "axios";
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

  useEffect(() => {
   
    axios.get(import.meta.env.VITE_API_URL + '/revolutionize').then(res => {
        console.log(1)
        console.log(res.data)
        
      }).catch(err => {console.log(err)})

  }, [])

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
      <Metriccard />
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Linechart />
        <Scatterchart />
      </div>
      {/* Additional Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Piechart />
        <Radarchart />
        <Doughnutchart />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Barchart />
        <Areachart1 />
      </div>
      <Activeusers/>
    </div>
  );
};

export default Dashboard;