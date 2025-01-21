import React, { useState } from "react";
import JoditEditor from "jodit-react";

const Hero = () => {
  const [editorContent, setEditorContent] = useState("");
  const [formData, setFormData] = useState({
    title: "Optimize Your Pharmacy Operations",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    console.log("Saved Data:", { ...formData, description: editorContent });
    alert("Changes Saved!");
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen p-8">
      <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
          <h1 className="text-3xl font-bold">Hero Section</h1>
          <p className="mt-2 text-sm">Edit the hero section content below</p>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Edit Content
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your title"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Description
              </label>
              <JoditEditor
                value={editorContent}
                onChange={(newContent) => setEditorContent(newContent)}
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-60 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-600 hover:file:bg-blue-200"
              />
            </div>
            <div className="text-left">
              <button
                type="button"
                onClick={handleSave}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Manage Posts
          </h2>
          <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Subtitle</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Image</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Your Global Education Partner for Visa Success
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Guiding you through every step of the process—student visas, test preparation, and
                  beyond
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Preview"
                    className="w-20 h-20 object-cover rounded-lg shadow-md"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition duration-200">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition duration-200 ml-2">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Another Example Title</td>
                <td className="border border-gray-300 px-4 py-2">
                  Another example subtitle for testing the layout
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Preview"
                    className="w-20 h-20 object-cover rounded-lg shadow-md"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition duration-200">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition duration-200 ml-2">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Hero;
