import React, { useState } from "react";
import JoditEditor from "jodit-react";
import { IoPencil, IoTrash, IoEye } from "react-icons/io5";

const Testimonialstitle = () => {
  const banners = [
    {
      id: 1,
      title: "What Our Clients Say",
    },
  ];

  const [previewData, setPreviewData] = useState(null);

  const handleEditClick = () => {
    document.getElementById("editModal").style.display = "flex";
  };

  const handleDeleteClick = () => {
    document.getElementById("deleteModal").style.display = "flex";
  };

  const handlePreviewClick = (banner) => {
    setPreviewData(banner);
    document.getElementById("previewModal").style.display = "flex";
  };

  const closeModals = () => {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      modal.style.display = "none";
    });
    setPreviewData(null);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 h-max p-8">
      <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden p-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg mb-6">
          <h1 className="text-3xl font-bold"> TESTIMONIALS TITLE SECTION</h1>
          <p className="mt-2 text-sm">Edit the Testimonials title section content below</p>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Edit Content</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-600 font-medium mb-1">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter your title"
                className="px-4 py-2 border w-full max-w-md border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            </div>
          
            <div className="text-left">
              <button
                type="button"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200">
                Save Changes
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white w-11/12 mx-auto border rounded py-6 shadow-md">
          <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">Manage Testimonials</h2>
          <div className="md:w-11/12 mx-auto">
            <table className="w-full bg-white rounded shadow-lg border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-gray-700 font-semibold">
                  <th className="p-4 text-left border-b border-gray-200">Title</th>
                  <th className="p-4 text-center border-b border-gray-200">Actions</th>
                  <th className="p-4 text-center border-b border-gray-200">Preview</th>
                </tr>
              </thead>
              <tbody>
                {banners.map((banner) => (
                  <tr key={banner.id} className="hover:bg-gray-50 transition">
                    <td className="p-4 border-b border-gray-200">{banner.title}</td>
                    <td className="p-4 text-center border-b border-gray-200">
                      <div className="flex gap-2 justify-center items-center">
                        <button
                          onClick={handleEditClick}
                          className="px-4 py-2 bg-yellow-400 text-white rounded-md flex items-center gap-2 hover:bg-yellow-500 transition">
                          <IoPencil />
                          Edit
                        </button>
                        <button
                          onClick={handleDeleteClick}
                          className="px-4 py-2 bg-red-500 text-white rounded-md flex items-center gap-2 hover:bg-red-600 transition">
                          <IoTrash />
                          Delete
                        </button>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-gray-200">
                      <button
                        onClick={() => handlePreviewClick(banner)}
                        className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2 hover:bg-green-600 transition">
                        <IoEye />
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

      {previewData && (
        <div
          id="previewModal"
          className="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 flex">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-semibold mb-4">Preview</h2>
            <div className="text-left">
              <h3 className="text-lg font-bold">{previewData.title}</h3>
            </div>
            <div className="flex justify-start gap-4 mt-4">
              <button
                onClick={closeModals}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        id="deleteModal"
        className="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 hidden">
        <div className="bg-white px-6 py-8 rounded shadow-md max-w-sm w-full text-center">
          <p className="text-lg font-medium mb-4">Are you sure you want to delete this banner?</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={closeModals}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              Yes
            </button>
            <button
              onClick={closeModals}
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition">
              Cancel
            </button>
          </div>
        </div>
      </div>

      <div
        id="editModal"
        className="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 hidden">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Edit Banner</h2>
          <div className="grid gap-4">
            <div>
              <label className="block text-gray-600 font-medium mb-2">Title</label>
              <input
                type="text"
                placeholder="Enter banner title"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
           
          </div>
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
    </div>
  );
};

export default Testimonialstitle;
