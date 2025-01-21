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
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
          <h1 className="text-3xl font-bold">CMS Dashboard</h1>
          <p className="mt-2 text-sm">Edit the hero section content below</p>
        </div>

        {/* Form Section */}
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
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-600 hover:file:bg-blue-200"
              />
              {formData.image && (
                <img
                  src={formData.image}
                  alt="Preview"
                  className="mt-4 rounded-lg shadow-md"
                  style={{
                    width: "200px", // Set a fixed width
                    height: "auto", // Maintain aspect ratio
                    objectFit: "cover", // Crop image if necessary
                  }}
                />
              )}
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
      </div>
    </div>
  );
};

export default Hero;
