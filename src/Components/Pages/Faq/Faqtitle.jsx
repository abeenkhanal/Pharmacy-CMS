import React, { useState } from "react";
import { IoPencil, IoTrash } from "react-icons/io5";
import JoditEditor from "jodit-react";

const Faqtitle = () => {
  const faqTitles = [
    {
      id: 1,
      title: "Frequently Asked Questions",
      description: "Our Pharmacy Management System simplifies inventory, tracks expiries, and generates insightful reports. Below are answers to common questions to help you understand how it can benefit your pharmacy.",
      headerImage: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      backgroundImage: "https://images.pexels.com/photos/19471016/pexels-photo-19471016/free-photo-of-young-pharmacist-writing-notes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      iconImage: "https://images.pexels.com/photos/4031323/pexels-photo-4031323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const [previewData, setPreviewData] = useState(null); // State to store preview data

  const handleEditClick = (id) => {
    document.getElementById("editModal").style.display = "flex";
  };

  const handleDeleteClick = (id) => {
    document.getElementById("deleteModal").style.display = "flex";
  };

  const handlePreviewClick = (faq) => {
    setPreviewData(faq); // Set the preview data
    document.getElementById("previewModal").style.display = "flex"; // Show the preview modal
  };

  const closeModals = () => {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      modal.style.display = "none";
    });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 h-max p-8">
      <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden p-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg mb-6">
          <h1 className="text-3xl font-bold">FAQ TITLES SECTION</h1>
          <p className="mt-2 text-sm">Manage FAQ Titles, Descriptions, and Images below</p>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Frequently Asked Questions</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-600 font-medium mb-1">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter FAQ title"
                className="px-4 py-2 border w-full max-w-md border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">Description</label>
              <JoditEditor />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">Header Image</label>
              <input
                type="file"
                accept="image/*"
                className="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-600 hover:file:bg-blue-200"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Background Image</label>
              <input
                type="file"
                accept="image/*"
                className="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-600 hover:file:bg-blue-200"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Icon Image</label>
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

        <div className="bg-white w-11/12 mx-auto border rounded py-6 shadow-md mt-8">
          <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">Manage FAQ Titles</h2>
          <div className="md:w-11/12 mx-auto">
            <table className="w-full bg-white rounded shadow-lg border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-gray-700 font-semibold">
                  <th className="p-4 text-left border-b border-gray-200">Title</th>
                  <th className="p-4 text-left border-b border-gray-200">Description</th>
                  <th className="p-4 text-left border-b border-gray-200">Header Image</th>
                  <th className="p-4 text-left border-b border-gray-200">Background Image</th>
                  <th className="p-4 text-left border-b border-gray-200">Icon Image</th>
                  <th className="p-4 text-center border-b border-gray-200">Actions</th>
                </tr>
              </thead>
              <tbody>
                {faqTitles.map((faq) => (
                  <tr key={faq.id} className="hover:bg-gray-50 transition">
                    <td className="p-4 border-b border-gray-200">{faq.title}</td>
                    <td className="p-4 border-b border-gray-200">{faq.description}</td>
                    <td className="p-4 border-b border-gray-200">
                      <img
                        src={faq.headerImage}
                        alt="Header"
                        className="h-20 w-20 rounded object-cover"
                      />
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      <img
                        src={faq.backgroundImage}
                        alt="Background"
                        className="h-20 w-20 rounded object-cover"
                      />
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      <img
                        src={faq.iconImage}
                        alt="Icon"
                        className="h-20 w-20 rounded object-cover"
                      />
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleEditClick(faq.id)}
                          className="px-4 py-2 bg-yellow-400 text-white rounded-md flex items-center gap-2 hover:bg-yellow-500 transition"
                        >
                          <IoPencil />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteClick(faq.id)}
                          className="px-4 py-2 bg-red-500 text-white rounded-md flex items-center gap-2 hover:bg-red-600 transition"
                        >
                          <IoTrash />
                          Delete
                        </button>
                        <button
                          onClick={() => handlePreviewClick(faq)}
                          className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2 hover:bg-green-600 transition"
                        >
                          Preview
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      <div
        id="deleteModal"
        className="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 hidden"
      >
        <div className="bg-white px-6 py-8 rounded shadow-md max-w-sm w-full text-center">
          <p className="text-lg font-medium mb-4">Are you sure you want to delete this FAQ?</p>
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
          <h2 className="text-2xl font-semibold mb-4">Edit FAQ</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-600 font-medium mb-1">Title</label>
              <input
                type="text"
                placeholder="Enter FAQ title"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Description</label>
              <textarea
                rows="4"
                placeholder="Enter FAQ description"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Header Image</label>
              <input
                type="file"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Background Image</label>
              <input
                type="file"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Icon Image</label>
              <input
                type="file"
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

      {/* Preview Modal */}
      <div
        id="previewModal"
        className="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 hidden"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl animate-fade-in">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Preview FAQ</h2>
          {previewData && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Title:</h3>
                <p className="text-gray-600">{previewData.title}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Description:</h3>
                <p className="text-gray-600">{previewData.description}</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-700">Header Image:</h3>
                  <img
                    src={previewData.headerImage}
                    alt="Header"
                    className="h-24 w-24 rounded-lg object-cover mx-auto"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-700">Background Image:</h3>
                  <img
                    src={previewData.backgroundImage}
                    alt="Background"
                    className="h-24 w-24 rounded-lg object-cover mx-auto"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-700">Icon Image:</h3>
                  <img
                    src={previewData.iconImage}
                    alt="Icon"
                    className="h-24 w-24 rounded-lg object-cover mx-auto"
                  />
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-end mt-4">
            <button
              onClick={closeModals}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqtitle;