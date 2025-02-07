import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoTrash } from 'react-icons/io5';
import { IoPencil } from 'react-icons/io5';

const Discover = () => {
  const [points] = useState([
    "Track inventory with real-time updates",
    "Manage prescriptions and automate refills",
    "Generate detailed sales and business reports",
    "Provide seamless customer service",
  ]);

  const [previewPoint, setPreviewPoint] = useState(""); // State to store the point to preview

  const handleEditClick = () => {
    document.getElementById("editModal").style.display = "flex";
  };

  const handleDeleteClick = () => {
    document.getElementById("deleteModal").style.display = "flex";
  };

  const handlePreviewClick = (point) => {
    setPreviewPoint(point); // Set the point to preview
    document.getElementById("previewModal").style.display = "flex"; // Show the preview modal
  };

  const closeModals = () => {
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.style.display = "none";
    });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 h-max p-8">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden p-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg mb-6">
          <h1 className="text-3xl font-bold">DISCOVER POINTS SECTION </h1>
          <p className="mt-2 text-sm">Manage the discover points below</p>
        </div>

        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Edit Points</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-600 font-medium mb-1">Add/Edit Point</label>
              <input
                type="text"
                placeholder="Enter point text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <button
              type="button"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200">
              Add Point
            </button>
          </form>
        </div>

        <div className="bg-white w-11/12 mx-auto border rounded py-6 shadow-md mt-8">
          <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">Manage Points</h2>
          <div className="md:w-11/12 mx-auto">
            <table className="w-full bg-white rounded shadow-lg border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-gray-700 font-semibold">
                  <th className="p-4 text-left border-b border-gray-200">Point</th>
                  <th className="p-4 text-center border-b border-gray-200">Actions</th>
                  <th className="p-4 text-center border-b border-gray-200">Preview</th>
                </tr>
              </thead>
              <tbody>
                {points.map((point, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition border-b border-gray-200">
                    <td className="p-4">{point}</td>
                    <td className="p-4 flex gap-2 justify-center">
                      <button
                        onClick={handleEditClick}
                        className="px-4 py-2 bg-yellow-400 text-white rounded-md flex items-center gap-2 hover:bg-yellow-500 transition">
                         < IoPencil/>
                        Edit
                      </button>
                      <button
                        onClick={handleDeleteClick}
                        className="px-4 py-2 bg-red-500 text-white rounded-md flex items-center gap-2 hover:bg-red-600 transition">
                          <IoTrash/>
                        Delete
                      </button>
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => handlePreviewClick(point)}
                        className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2 hover:bg-green-600 transition">
                          <FaEye/>
                        Preview
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <div
        id="editModal"
        className="modal fixed inset-0 bg-black bg-opacity-50  items-center justify-center z-50 hidden">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Edit Point</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-600 font-medium mb-1">Point Text</label>
              <textarea
                rows="4"
                placeholder="Enter point text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
          </form>
          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={closeModals}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition">
              Cancel
            </button>
            <button
              onClick={closeModals}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      <div
        id="deleteModal"
        className="modal fixed inset-0 bg-black bg-opacity-50  items-center justify-center z-50 hidden"
      >
        <div className="bg-white px-6 py-8 rounded shadow-md max-w-sm w-full text-center">
          <p className="text-lg font-medium mb-4">Are you sure you want to delete this point?</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={closeModals}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              Delete
            </button>
            <button
              onClick={closeModals}
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition">
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      <div
        id="previewModal"
        className="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 hidden" >
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Preview Point</h2>
         
            <p className="text-gray-700 justify-start">{previewPoint}</p>
       
          <div className="flex justify-start mt-4">
            <button
              onClick={closeModals}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;