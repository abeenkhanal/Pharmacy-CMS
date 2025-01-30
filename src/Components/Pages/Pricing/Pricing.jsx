import React, { useState } from "react";
import { IoPencil, IoTrash, IoEye } from "react-icons/io5";

const Pricing = () => {
  const [plans] = useState([
    {
      id: 1,
      name: "Basic Plan",
      monthlyPrice: "$99",
      yearlyPrice: "$1188",
      features: ["Inventory Management", "Prescription Tracking", "Billing"],
    },
    {
      id: 2,
      name: "Business Plan",
      monthlyPrice: "$199",
      yearlyPrice: "$2388",
      features: [
        "Inventory Management",
        "Prescription Tracking",
        "Billing",
        "Automated Stock Notifications",
      ],
    },
    {
      id: 3,
      name: "Enterprise Plan",
      monthlyPrice: "$299",
      yearlyPrice: "$3588",
      features: [
        "Inventory Management",
        "Prescription Tracking",
        "Billing",
        "Automated Stock Notifications",
        "Custom Integrations",
        "Priority Support",
      ],
    },
  ]);

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isPreviewModalOpen, setPreviewModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openEditModal = () => setEditModalOpen(true);
  const openDeleteModal = () => setDeleteModalOpen(true);
  const openPreviewModal = (plan) => {
    setSelectedPlan(plan);
    setPreviewModalOpen(true);
  };
  const closeModals = () => {
    setEditModalOpen(false);
    setDeleteModalOpen(false);
    setPreviewModalOpen(false);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 h-max p-8">
      <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden p-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg mb-6">
          <h1 className="text-3xl font-bold">PRICING PLANS</h1>
          <p className="mt-2 text-sm">Manage your pricing plans below.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-semibold mb-4">Add New Plan</h2>
          <form className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <input
              type="text"
              placeholder="Plan Name"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            <input
              type="text"
              placeholder="Monthly Price"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            <input
              type="text"
              placeholder="Yearly Price"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            <textarea
              placeholder="Features (comma-separated)"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 col-span-full"></textarea>
            <button
              type="button"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
              Add Plan
            </button>
          </form>
        </div>

        <div className="bg-white w-11/12 mx-auto border rounded py-6 shadow-md">
          <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">Manage Plans</h2>
          <div className="md:w-11/12 mx-auto">
            <table className="w-full bg-white rounded shadow-lg border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-gray-700 font-semibold">
                  <th className="p-4 text-left border-b border-gray-200">Name</th>
                  <th className="p-4 text-left border-b border-gray-200">Monthly Price</th>
                  <th className="p-4 text-left border-b border-gray-200">Yearly Price</th>
                  <th className="p-4 text-left border-b border-gray-200">Features</th>
                   <th className="p-4 text-center border-b border-gray-200">Actions</th>
                  <th className="p-4 text-center border-b border-gray-200">Preview</th>
                 
                </tr>
              </thead>
              <tbody>
                {plans.map((plan) => (
                  <tr key={plan.id} className="hover:bg-gray-50 transition">
                    <td className="p-4 border-b border-gray-200">{plan.name}</td>
                    <td className="p-4 border-b border-gray-200">{plan.monthlyPrice}</td>
                    <td className="p-4 border-b border-gray-200">{plan.yearlyPrice}</td>
                    <td className="p-4 border-b border-gray-200">
                      {plan.features.join(", ")}
                    </td>
                   
                    <td className="p-4 border-b border-gray-200 text-center">
                      <div className="flex gap-2 justify-center items-center">
                        <button
                          onClick={openEditModal}
                          className="px-4 py-2 bg-yellow-400 text-white rounded-md flex items-center gap-2 hover:bg-yellow-500 transition">
                          <IoPencil />
                          Edit
                        </button>
                        <button
                          onClick={openDeleteModal}
                          className="px-4 py-2 bg-red-500 text-white rounded-md flex items-center gap-2 hover:bg-red-600 transition">
                          <IoTrash />
                          Delete
                        </button>
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-200 text-center">
                      <button
                        onClick={() => openPreviewModal(plan)}
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

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 flex">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Edit Plan</h2>
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Plan Name"
                className="w-full px-4 py-2 border rounded-lg"/>
              <input
                type="text"
                placeholder="Monthly Price"
                className="w-full px-4 py-2 border rounded-lg"/>
              <input
                type="text"
                placeholder="Yearly Price"
                className="w-full px-4 py-2 border rounded-lg"/>
              <textarea
                placeholder="Features (comma-separated)"
                className="w-full px-4 py-2 border rounded-lg"></textarea>
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
      )}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 flex">
          <div className="bg-white px-6 py-8 rounded shadow-md max-w-sm w-full text-center">
            <p className="text-lg font-medium mb-4">
              Are you sure you want to delete this plan?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={closeModals}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                Delete
              </button>
              <button
                onClick={closeModals}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isPreviewModalOpen && selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 flex">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Preview Plan</h2>
            <div className="space-y-4">
              <p><strong>Name:</strong> {selectedPlan.name}</p>
              <p><strong>Monthly Price:</strong> {selectedPlan.monthlyPrice}</p>
              <p><strong>Yearly Price:</strong> {selectedPlan.yearlyPrice}</p>
              <p><strong>Features:</strong> {selectedPlan.features.join(", ")}</p>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={closeModals}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;