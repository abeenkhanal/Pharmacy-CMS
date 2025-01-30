import React, { useState } from "react";
import { IoPencil, IoTrash, IoEye } from "react-icons/io5";
import JoditEditor from "jodit-react";

const Testimonials = () => {
  const [testimonials] = useState([
    {
      name: "Dr. Ayesha Khan",
      role: "Pharmacist, HealthCare Pharmacy",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      feedback:
        "This pharmacy management system has streamlined our inventory and prescription handling. It's a must-have for every pharmacy.",
    },
    {
      name: "John Peterson",
      role: "Owner, Peterson's Pharmacy",
      image: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      feedback:
        "Managing my business has never been easier. The automated reporting and reminders save me hours of work every day.",
    },
    {
      name: "Sarah Lopez",
      role: "Pharmacy Technician, LifeCare Pharmacy",
      image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      feedback:
        "The user-friendly interface and accurate tracking of medication stock have significantly reduced errors in our pharmacy.",
    },
    {
      name: "David Brown",
      role: "Pharmacist, MedPlus",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      feedback:
        "The billing system is seamless and integrates well with insurance claims. Highly recommend this software!",
    },
    {
      name: "Emily Carter",
      role: "Pharmacy Manager, WellCare Pharmacy",
      image: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      feedback:
        "Real-time inventory updates and reports have helped us avoid stockouts and overstocking. Amazing software!",
    },
    {
      name: "James Wilson",
      role: "Owner, Wilson’s Pharmacy",
      image: "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      feedback:
        "This software makes compliance with regulations so much easier. It’s reliable and secure.",
    },
  ]);

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [previewData, setPreviewData] = useState(null);

  const handleEditClick = () => {
    setEditModalVisible(true);
  };

  const handleDeleteClick = () => {
    setDeleteModalVisible(true);
  };

  const handlePreviewClick = (testimonial) => {
    setPreviewData(testimonial);
  };

  const closeModals = () => {
    setEditModalVisible(false);
    setDeleteModalVisible(false);
    setPreviewData(null);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 h-max p-8">
      <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden p-8">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg mb-6">
          <h1 className="text-3xl font-bold">TESTIMONIALS SECTION</h1>
          <p className="mt-2 text-sm">Manage testimonials content below</p>
        </div>

        {/* Form Section */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Edit Testimonial</h2>
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
              <label className="block text-gray-600 font-medium mb-1">Position</label>
              <input
                type="text"
                name="position"
                placeholder="Enter position"
                className="px-4 py-2 border w-full max-w-md border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Testimonial</label>
              <JoditEditor />
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

        {/* Manage Testimonials Table */}
        <div className="bg-white w-11/12 mx-auto border rounded py-6 shadow-md mt-8">
          <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">Manage Testimonials</h2>
          <div className="md:w-11/12 mx-auto">
            <table className="w-full bg-white rounded shadow-lg border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-gray-700 font-semibold">
                  <th className="p-4 text-left border-b border-gray-200">Image</th>
                  <th className="p-4 text-left border-b border-gray-200">Testimonial</th>
                  <th className="p-4 text-left border-b border-gray-200">Name</th>
                  <th className="p-4 text-left border-b border-gray-200">Role</th>
                  <th className="p-4 text-center border-b border-gray-200">Actions</th>
                  <th className="p-4 text-center border-b border-gray-200">Preview</th>
                </tr>
              </thead>
              <tbody>
                {testimonials.map((testimonial, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition border-b border-gray-200"
                  >
                    <td className="p-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    </td>
                    <td className="p-4">{testimonial.feedback}</td>
                    <td className="p-4">{testimonial.name}</td>
                    <td className="p-4">{testimonial.role}</td>
                    <td className="p-4 text-center">
                      <div className="flex  gap-2 justify-center items-center">
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
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => handlePreviewClick(testimonial)}
                        className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2 hover:bg-green-600 transition"
                      >
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

      {/* Modals */}
      {editModalVisible && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Edit Testimonial</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-600 font-medium mb-1">Client Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter client name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">Position</label>
                <input
                  type="text"
                  name="position"
                  placeholder="Enter position"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <div>
                <label className="block text-gray-600 font-medium mb-1">Profile Image</label>
                <input
                  type="file"
                  accept="image/*"
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
      )}

      {deleteModalVisible && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
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
      )}

      {previewData && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-left">
              Preview Testimonial
            </h2>
            <div className="text-left">
              <img
                src={previewData.image}
                alt={previewData.name}
                className="h-20 w-20 rounded-full  mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-left">{previewData.name}</h3>
              <p className="text-gray-700 text-left">{previewData.role}</p>
              <p className="text-gray-700 mt-4">{previewData.feedback}</p>
            </div>
            <div className="flex justify-start gap-4 mt-4">
              <button
                onClick={closeModals}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
