import React, { useState } from "react";
import JoditEditor from "jodit-react";
import { IoPencil, IoTrash } from "react-icons/io5";

const Vision = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Our Vision",
      description:
        "To revolutionize the pharmacy industry by delivering seamless, secure, and scalable solutions that enhance inventory management, prescription tracking, and patient care.",
      image: "https://images.pexels.com/photos/18809/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Our Mission",
      description:
        "Our mission is to streamline pharmacy operations with advanced CRM tools, enabling real-time inventory updates, automated prescription fulfillment, and robust analytics.",
      image: "https://images.pexels.com/photos/6147381/pexels-photo-6147381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

  const [currentEdit, setCurrentEdit] = useState(null);

  const openEditModal = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    setCurrentEdit(itemToEdit);
    document.getElementById("editModal").style.display = "flex";
  };

  const openDeleteModal = (id) => {
    setCurrentEdit({ id });
    document.getElementById("deleteModal").style.display = "flex";
  };

  const closeModals = () => {
    setCurrentEdit(null);
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      modal.style.display = "none";
    });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 h-max p-8">
      <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden p-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg mb-6">
          <h1 className="text-3xl font-bold">Vision and Mission CMS</h1>
          <p className="mt-2 text-sm">Manage the Vision and Mission section content below</p>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Section</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-600 font-medium mb-1">Title</label>
              <input
                type="text"
                placeholder="Enter section title"
                className="px-4 py-2 border w-full max-w-md border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Description</label>
              <JoditEditor />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Upload Image</label>
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
          <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">Manage Sections</h2>
          <div className="md:w-11/12 mx-auto">
            <table className="w-full bg-white rounded shadow-lg border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-gray-700 font-semibold">
                  <th className="p-4 text-left border-b border-gray-200">Image</th>
                  <th className="p-4 text-left border-b border-gray-200">Title</th>
                  <th className="p-4 text-left border-b border-gray-200">Description</th>
                  <th className="p-4 text-center border-b border-gray-200">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition">
                    <td className="p-4 border-b border-gray-200">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-20 w-20 rounded object-cover"
                      />
                    </td>
                    <td className="p-4 border-b border-gray-200">{item.title}</td>
                    <td className="p-4 border-b border-gray-200">{item.description}</td>
                    <td className="p-4 border-b border-gray-200 text-center">
                      <div className="flex gap-2 justify-center items-center">
                        <button
                          onClick={() => openEditModal(item.id)}
                          className="px-4 py-2 bg-yellow-400 text-white rounded-md flex items-center gap-2 hover:bg-yellow-500 transition"
                        >
                          <IoPencil />
                          Edit
                        </button>
                        <button
                          onClick={() => openDeleteModal(item.id)}
                          className="px-4 py-2 bg-red-500 text-white rounded-md flex items-center gap-2 hover:bg-red-600 transition"
                        >
                          <IoTrash />
                          Delete
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

      <div
        id="editModal"
        className="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 hidden"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Edit Section</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-600 font-medium mb-1">Title</label>
              <input
                type="text"
                defaultValue={currentEdit?.title || ""}
                placeholder="Enter section title"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Description</label>
              <textarea
                rows="4"
                defaultValue={currentEdit?.description || ""}
                placeholder="Enter section description"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                className="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-600 hover:file:bg-blue-200"
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

      <div
        id="deleteModal"
        className="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 hidden"
      >
        <div className="bg-white px-6 py-8 rounded shadow-md max-w-sm w-full text-center">
          <p className="text-lg font-medium mb-4">
            Are you sure you want to delete this section?
          </p>
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
    </div>
  );
};

export default Vision;
