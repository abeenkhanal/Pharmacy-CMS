import React from "react";
import JoditEditor from "jodit-react";
import { IoPencil, IoTrash } from "react-icons/io5";

const Revolutionize = () => {
    const topics = [
        {
            id: 1,
            icon: "/icon-inventory.png",
            title: "Inventory Management",
            description:
                "Keep track of stock levels and streamline order processes with ease.",
            image: "/inventory.jpg",
        },
    ];

    // Show/Hide Modals
    const handleEditClick = () => {
        document.getElementById("editModal").style.display = "flex";
    };

    const handleDeleteClick = () => {
        document.getElementById("deleteModal").style.display = "flex";
    };

    const closeModals = () => {
        document.getElementById("editModal").style.display = "none";
        document.getElementById("deleteModal").style.display = "none";
    };

    return (
        <div className="bg-gradient-to-br from-blue-50 to-gray-100 h-max p-8">
            <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden p-8">
                {/* Header Section */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg mb-6">
                    <h1 className="text-3xl font-bold">REVOLUTIONIZE SECTION</h1>
                    <p className="mt-2 text-sm">Edit the Revolutionize content below</p>
                </div>

                {/* Form Section */}
                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Edit Content</h2>
                    <form className="space-y-6">
                        {/* Title Input */}
                        <div>
                            <label className="block text-gray-600 font-medium mb-1">Title</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter your topic title"
                                className="px-4 py-2 border w-full max-w-md border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Description Input */}
                        <div>
                            <label className="block text-gray-600 font-medium mb-1">Description</label>
                            <JoditEditor />
                        </div>

                        <div className="flex items-center">

                            {/* Image Upload */}
                            <div>
                                <label className="block text-gray-600 font-medium mb-1">Image</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-600 hover:file:bg-blue-200"
                                />
                            </div>

                            {/* Icon Upload */}
                            <div>
                                <label className="block text-gray-600 font-medium mb-1">Choose Icon</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-600 hover:file:bg-blue-200"
                                />
                            </div>
                        </div>

                        {/* Save Button */}
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
                <div className="bg-white w-11/12 mx-auto border rounded py-6 shadow-md">
                    <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">Manage Topics</h2>
                    <div className="md:w-11/12 mx-auto">
                    <table className="w-full bg-white rounded shadow-lg">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700 font-semibold">
                                <th className="p-4 text-left">Icon</th>
                                <th className="p-4 text-left">Title</th>
                                <th className="p-4 text-left">Description</th>
                                <th className="p-4 text-left">Image</th>
                                <th className="p-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {topics.map((topic) => (
                                <tr key={topic.id} className="border-b hover:bg-gray-100 transition">
                                    <td className="p-4 flex items-center gap-2">
                                        <img
                                            src={topic.icon}
                                            alt="Topic Icon"
                                            className="h-10 w-10 rounded-full object-cover"
                                        />
                                    </td>
                                    <td className="p-4">{topic.title}</td>
                                    <td className="p-4">{topic.description}</td>
                                    <td className="p-4">
                                        <img
                                            src={topic.image}
                                            alt={topic.title}
                                            className="h-20 w-20 rounded object-cover"
                                        />
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

            {/* Edit Modal */}
            <div
                id="editModal"
                className="fixed inset-0 bg-black bg-opacity-50  items-center justify-center z-50 hidden"
            >
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-semibold mb-4">Edit Topic</h2>
                    <div className="grid gap-4">
                        <div>
                            <label className="block text-gray-600 font-medium mb-2">Title</label>
                            <input
                                type="text"
                                placeholder="Enter topic title"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 font-medium mb-2">Description</label>
                            <JoditEditor />
                        </div>
                        <div>
                            <label className="block text-gray-600 font-medium mb-2">Image</label>
                            <input
                                type="file"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
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

            {/* Delete Confirmation Modal */}
            <div
                id="deleteModal"
                className="fixed inset-0 bg-black bg-opacity-50  items-center justify-center z-50 hidden"
            >
                <div className="bg-white px-6 py-8 rounded shadow-md max-w-sm w-full text-center">
                    <p className="text-lg font-medium mb-4">
                        Are you sure you want to delete this topic?
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

export default Revolutionize;
