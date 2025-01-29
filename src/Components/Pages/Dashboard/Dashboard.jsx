import React from "react";
import { Line, Bar, Pie, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const lineChartData = {
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

  const barChartData = {
    labels: ["2003", "Feb '03", "Mar '03", "Apr '03", "May '03", "Jun '03"],
    datasets: [
      {
        label: "Desktops",
        data: [10, 15, 22, 18, 25, 20],
        backgroundColor: "#6366F1",
      },
      {
        label: "Laptops",
        data: [5, 12, 17, 12, 18, 15],
        backgroundColor: "#F59E0B",
      },
      {
        label: "Tablets",
        data: [3, 8, 10, 9, 12, 10],
        backgroundColor: "#10B981",
      },
    ],
  };

  const pieChartData = {
    labels: ["Pharmacy A", "Pharmacy B", "Pharmacy C"],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ["#6366F1", "#F59E0B", "#10B981"],
      },
    ],
  };

  const radarChartData = {
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
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Monthly Revenue vs Expenses</h2>
          <Line data={lineChartData} />
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Product Sales by Category</h2>
          <Bar data={barChartData} />
        </div>
      </div>

      {/* Additional Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Pharmacy Distribution</h2>
          <Pie data={pieChartData} />
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Category Comparisons</h2>
          <Radar data={radarChartData} />
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Activity Logs</h2>
          <ul>
            {[
              "New order placed by Anna",
              "John updated inventory",
              "Maria processed a return",
            ].map((log, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center border-b border-gray-100 py-2"
              >
                <p className="text-gray-700">{log}</p>
                <span className="text-sm text-gray-500">{new Date().toLocaleDateString()}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
