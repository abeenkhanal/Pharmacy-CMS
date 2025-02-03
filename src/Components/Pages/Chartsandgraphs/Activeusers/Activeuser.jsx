import React from "react";

const users = [
  {
    id: "#345",
    name: "John Doe",
    role: "Web Developer",
    city: "Butwal",
    status: "PENDING",
    statusColor: "bg-orange-500",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "#347",
    name: "Ruben Tillman",
    role: "Etiam sit amet orci eget",
    city: "Lumbini",
    status: "COMPLETED",
    statusColor: "bg-green-500",
    image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "#321",
    name: "Elliot Huber",
    role: "Lorem ipsum dolor sic",
    city: "Lalitpur",
    status: "IN PROGRESS",
    statusColor: "bg-red-500",
    image: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "#55",
    name: "Vinnie Wagstaff",
    role: "UI Designer",
    city: "Jhapa",
    status: "ON HOLD",
    statusColor: "bg-blue-500",
    image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
];

const Activeusers = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-xl font-bold">ACTIVE USERS</h2>
        <div className="space-x-2">
          <button className="px-3 py-1 bg-blue-500 text-white rounded">Last Week</button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded">All Month</button>
        </div>
      </div>
      <table className="w-full border-collapse border rounded-md overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-3 text-left">#</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">City</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className="border-t hover:bg-gray-100 transition duration-150">
              <td className="p-3">{user.id}</td>
              <td className="p-3 flex items-center space-x-3">
                <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold">{user.name}</div>
                  <div className="text-gray-500 text-sm">{user.role}</div>
                </div>
              </td>
              <td className="p-3">{user.city}</td>
              <td className="p-3">
                <span
                  className={`px-3 py-1 text-white text-sm rounded-full ${user.statusColor}`}>
                  {user.status}
                </span>
              </td>
              <td className="p-3">
                <button className="px-4 py-1 bg-blue-600 text-white rounded">Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end space-x-2 mt-4">
        <button className="px-3 py-2 text-red-500 border border-red-500 rounded">
          <span className="text-xl">🗑</span>
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded">Save</button>
      </div>
    </div>
  );
};

export default Activeusers;
