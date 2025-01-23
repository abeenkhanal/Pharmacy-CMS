import React, { useState } from "react";
import { IoPencil, IoTrash } from "react-icons/io5";

const Testimonials = () => {
  const [testimonials] = useState([
    {
      id: 1,
      image: "/profile1.jpg",
      text: "The billing system is seamless and integrates well with insurance claims. Highly recommend this software!",
      name: "David Brown",
      designation: "Pharmacist, MedPlus",
    },
    {
      id: 2,
      image: "/profile2.jpg",
      text: "Real-time inventory updates and reports have helped us avoid stockouts and overstocking. Amazing software!",
      name: "Emily Carter",
      designation: "Pharmacy Manager, WellCare Pharmacy",
    },
    {
      id: 3,
      image: "/profile3.jpg",
      text: "This software makes compliance with regulations so much easier. It’s reliable and secure.",
      name: "James Wilson",
      designation: "Owner, Wilson’s Pharmacy",
    },
  ]);

  const handleEditClick = () => {
    document.getElementById("editModal").style.display = "flex";
  };

  const handleDeleteClick = () => {
    document.getElementById("deleteModal").style.display = "flex";
  };

  const closeModals = () => {
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.style.display = "none";
    });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 h-max p-8">
      <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden p-8">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg mb-6">
          <h1 className="text-3xl font-bold">CLIENT TESTIMONIALS CMS</h1>
          <p className="mt-2 text-sm">Manage client testimonials below</p>
        </div>

        {/* Form Section */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Add/Edit Testimonial</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-600 font-medium mb-1">Client Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter client name"
                className="px-4 py-2 border w-full max-w-md border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Designation</label>
              <input
                type="text"
                name="designation"
                placeholder="Enter designation"
                className="px-4 py-2 border w-full max-w-md border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Testimonial</label>
              <textarea
                name="text"
                rows="4"
                placeholder="Enter testimonial"
                className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Profile Image</label>
              <input
                type="file"
                accept="image/*"
                className="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-600 hover:file:bg-blue-200"
              />
            </div>
            <div className="text-left">
              <button
                type="button"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>

        {/* Table Section */}
        <div className="bg-white w-11/12 mx-auto border rounded py-6 shadow-md mt-8">
          <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">Manage Testimonials</h2>
          <div className="md:w-11/12 mx-auto">
            <table className="w-full bg-white rounded shadow-lg border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-gray-700 font-semibold">
                  <th className="p-4 text-left border-b border-gray-200">Profile</th>
                  <th className="p-4 text-left border-b border-gray-200">Testimonial</th>
                  <th className="p-4 text-left border-b border-gray-200">Client Name</th>
                  <th className="p-4 text-left border-b border-gray-200">Actions</th>
                </tr>
              </thead>
              <tbody>
                {testimonials.map((testimonial) => (
                  <tr
                    key={testimonial.id}
                    className="hover:bg-gray-50 transition border-b border-gray-200"
                  >
                    <td className="p-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    </td>
                    <td className="p-4">{testimonial.text}</td>
                    <td className="p-4">
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-gray-500 text-sm">{testimonial.designation}</p>
                      </div>
                    </td>
                    <td className="p-4 flex gap-2 justify-center">
                      <button
                        onClick={handleEditClick}
                        className="px-4 py-2 bg-yellow-400 text-white rounded-md flex items-center gap-2 hover:bg-yellow-500 transition"
                      >
                        <IoPencil />
                        Edit
                      </button>
                      <button
                        onClick={handleDeleteClick}
                        className="px-4 py-2 bg-red-500 text-white rounded-md flex items-center gap-2 hover:bg-red-600 transition"
                      >
                        <IoTrash />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <div
        id="deleteModal"
        className="modal fixed inset-0 bg-black bg-opacity-50  items-center justify-center z-50 hidden"
      >
        <div className="bg-white px-6 py-8 rounded shadow-md max-w-sm w-full text-center">
          <p className="text-lg font-medium mb-4">Are you sure you want to delete this testimonial?</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={closeModals}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Yes
            </button>
            <button
              onClick={closeModals}
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <div
        id="editModal"
        className="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 hidden"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Edit Testimonial</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-600 font-medium mb-1">Client Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter client name"
                className="px-4 py-2 border w-full border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Designation</label>
              <input
                type="text"
                name="designation"
                placeholder="Enter designation"
                className="px-4 py-2 border w-full border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Testimonial</label>
              <textarea
                name="text"
                rows="4"
                placeholder="Enter testimonial"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </form>
          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={closeModals}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              onClick={closeModals}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
