import JoditEditor from "jodit-react";
import React from "react";

const Pricingtitle = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-8">
      <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden p-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg mb-6">
          <h1 className="text-3xl font-bold">Pricing </h1>
          <p className="text-sm mt-2">Edit the Pricingtitle section content below</p>
        </div>

        <div className="bg-white rounded-lg w-full mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Edit Content</h2>


          <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-2">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter your title"
              className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-2">Desccription</label>
           <JoditEditor/>
          </div>


          <div className="text-left">
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricingtitle;
