import React, { useState } from "react";
import JoditEditor from "jodit-react";
import { IoPencil, IoTrash } from "react-icons/io5";

const Featurestitle = () => {
    const [banners] = useState([
        {
            title: "Optimize Your Pharmacy Operations",
            subtitle: "Welcome to PharmaEase, where we simplify pharmacy management with cutting-edge solutions.",
        },
    ]);

    const [deleteIndex, setDeleteIndex] = useState(null);
    const [editIndex, setEditIndex] = useState(null);

    const handleEditClick = (index) => {
        setEditIndex(index);
    };

    const handleDeleteClick = (index) => {
        setDeleteIndex(index);
    };

    const handleConfirmDelete = () => {
        banners.splice(deleteIndex, 1);
        setDeleteIndex(null);
    };

    return (
        <div className="bg-gradient-to-br from-blue-50 to-gray-100 h-max p-8">
            <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden p-8">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg mb-6">
                    <h1 className="text-3xl font-bold">HERO SECTION </h1>
                    <p className="mt-2 text-sm">Edit the hero section content below</p>
                </div>

                {/* Form Section */}
                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Edit Content</h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-gray-600 font-medium mb-1">Title</label>
                            <input
                                type="text"
                                name="title"
                                value=""
                                className="px-4 py-2 border w-full max-w-md border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your title"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 font-medium mb-1">Description</label>
                            <JoditEditor />
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

                {/* Banner Table */}
                <div className="bg-white w-11/12 mx-auto border rounded py-6 shadow-md">
                    <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">Manage Data</h2>
                    <div className="md:w-11/12 mx-auto">
                        <table className="w-full bg-white rounded shadow-lg">
                            <thead>
                                <tr className="bg-gray-200 text-gray-700 font-semibold">
                                    <th className="p-4 text-left">Title</th>
                                    <th className="p-4 text-left">Description</th>
                                    <th className="p-4 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {banners.map((banner, index) => (
                                    <tr key={index} className="border-b hover:bg-gray-100 transition">
                                        <td className="p-4">{banner.title}</td>
                                        <td className="p-4">{banner.subtitle}</td>
                                        <td className="p-4 flex gap-2 justify-center">
                                            <button
                                                onClick={() => handleEditClick(index)}
                                                className="px-4 py-2 bg-yellow-400 text-white rounded-md flex items-center gap-2 hover:bg-yellow-500 transition"
                                            >
                                                <IoPencil />
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDeleteClick(index)}
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
            {deleteIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white px-6 py-8 rounded shadow-md max-w-sm w-full">
                        <p className="text-lg text-center font-medium mb-4">
                            Are you sure you want to delete?
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <button
                                onClick={handleConfirmDelete}
                                className="px-8 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Yes
                            </button>
                            <button
                                onClick={() => setDeleteIndex(null)}
                                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Modal */}
            {editIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Edit Banner</h2>

                        <div className="grid gap-6">
                            <div>
                                <label className="block text-gray-600 font-medium mb-2">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Banner Title"
                                    className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 font-medium mb-2">Subtitle</label>
                                <input
                                    type="text"
                                    name="subtitle"
                                    placeholder="Banner Subtitle"
                                    className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-4 mt-6">
                            <button
                                onClick={() => setEditIndex(null)}
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setEditIndex(null)}
                                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Featurestitle;
