import React, { useState } from "react";
import JoditEditor from "jodit-react";
import { IoPencil, IoTrash, IoEye } from "react-icons/io5";
import { FaPills, FaFilePrescription, FaUsers, FaChartBar, FaCogs, FaTruck } from "react-icons/fa";
import { Field, Form, Formik } from 'formik';
import values from '../../../../../node_modules/lodash-es/values';


const Features = () => {


  const featuresData = [
    {
      id: 1,
      icon: <FaPills className="text-blue-600 text-3xl" />,
      title: "Inventory Management",
      description: "Track and manage stock levels effortlessly",
    },
    {
      id: 2,
      icon: <FaFilePrescription className="text-blue-600 text-3xl" />,
      title: "Prescription Tracking",
      description: "Easily manage and track prescriptions.",
    },
    {
      id: 3,
      icon: <FaUsers className="text-blue-600 text-3xl" />,
      title: "Team Collaboration",
      description: "Improve communication among pharmacy staff",
    },
    {
      id: 4,
      icon: <FaChartBar className="text-blue-600 text-3xl" />,
      title: "Sales Reports",
      description: "Analyze and generate detailed sales reports.",
    },
    {
      id: 5,
      icon: <FaCogs className="text-blue-600 text-3xl" />,
      title: "Customizable Dashboard",
      description: "Personalize your workflow for better productivity.",
    },
    {
      id: 6,
      icon: <FaTruck className="text-blue-600 text-3xl" />,
      title: "Supplier Management",
      description: "Efficiently manage and track suppliers.",
    },
  ];

  const [previewData, setPreviewData] = useState(null);

  const handleEditClick = () => {
    document.getElementById("editModal").style.display = "flex";
  };

  const handleDeleteClick = () => {
    document.getElementById("deleteModal").style.display = "flex";
  };

  const handlePreviewClick = (data) => {
    setPreviewData(data);
    document.getElementById("previewModal").style.display = "flex";
  };

  const closeModals = () => {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      modal.style.display = "none";
    });
    setPreviewData(null);
  };

  const [Package, setPackage] = useState([])

  const getdata = () => {
    try {
        axios.get(`http://localhost:4000/courses/${params.id}`).then(Res => {
            setPackage([Res.data.result])
        }).catch(err => {
            console.log(err)
        })
    } catch {
        console.log
    }

}

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 h-max p-8">
      <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden p-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg mb-6">
          <h1 className="text-3xl font-bold">KEY FEATURES </h1>
          <p className="mt-2 text-sm">Manage your key features section below</p>
        </div>

        {/* Add New Feature Section */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Feature</h2>
          <Formik initialValues={{ title: '', description: '', image: '' }}
            onSubmit={(values,) => {
              try  { const formData = new FormData()
                  axios.post('', formData ).then((res) => { 
                    console.log(res)
                    toast.success('Feature added successfully')
                  } ).catch(err => {
                    console.log(err)
                })
            } catch (error) {
                console.log(error)
            }
             
            }}
          >
            {({ setFieldValue, handleSubmit }) => {
              return <Form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-600 font-medium mb-1">Title</label>
                  <Field
                    type="text"
                    name="title"
                    placeholder="Enter feature title"
                    className="px-4 py-2 border w-full max-w-md border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />

                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-1">Description</label>
                  <JoditEditor

                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-1">Upload Icon</label>
                  <input onChange={(e) => setFieldValue('image', e.target.files[0])}
                    type="file"
                    accept="image/*"
                    className="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-600 hover:file:bg-blue-200"

                  />
                </div>
                <div className="text-left">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200">
                    Save Changes
                  </button>
                </div>
              </Form>
            }}

          </Formik>

        </div>

        {/* Manage Features Table */}
        <div className="bg-white w-11/12 mx-auto border rounded py-6 shadow-md mt-8">
          <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">Manage Features</h2>
          <div className="md:w-11/12 mx-auto">
            <table className="w-full bg-white rounded shadow-lg border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-gray-700 font-semibold">
                  <th className="p-4 text-left border-b border-gray-200">Icon</th>
                  <th className="p-4 text-left border-b border-gray-200">Title</th>
                  <th className="p-4 text-left border-b border-gray-200">Description</th>
                  <th className="p-4 text-center border-b border-gray-200">Actions</th>
                  <th className="p-4 text-center border-b border-gray-200">Preview</th>
                </tr>
              </thead>
              <tbody>
                {Package.map((data) => (
                  <tr key={data.id} className="hover:bg-gray-50 transition">
                    <td className="p-4 border-b border-gray-200 text-center">{data.icon}</td>
                    <td className="p-4 border-b border-gray-200">{data.title}</td>
                    <td className="p-4 border-b border-gray-200">{data.description}</td>
                    <td className="p-4 border-b border-gray-200 text-center">
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
                        onClick={() => handlePreviewClick(data)}
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

      {/* Preview Modal */}
      {previewData && (
        <div
          id="previewModal"
          className="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 flex">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-semibold mb-4">Preview </h2>
            <div className="text-left">
              <div className="mb-4 text-center">{previewData.icon}</div>
              <h3 className="text-lg font-bold">{previewData.title}</h3>
              <p className="text-gray-700 mt-2">{previewData.description}</p>
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

      {/* Delete Modal */}
      <div
        id="deleteModal"
        className="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 hidden">
        <div className="bg-white px-6 py-8 rounded shadow-md max-w-sm w-full text-center">
          <p className="text-lg font-medium mb-4">Are you sure you want to delete this feature?</p>
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

      {/* Edit Modal */}
      <div
        id="editModal"
        className="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 hidden">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Edit Feature</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-600 font-medium mb-1">Title</label>
              <input
                type="text"
                placeholder="Enter feature title"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Description</label>
              <textarea
                placeholder="Enter feature description"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              </textarea>
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Upload Icon</label>
              <input
                type="file"
                accept="image/*"
                className="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-600 hover:file:bg-blue-200" />
            </div>
          </form>
          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={closeModals}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition">
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
    </div>
  );
};

export default Features;
