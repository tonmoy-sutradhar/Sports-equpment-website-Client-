import { stringify } from "postcss";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);
  const handleAddEquipment = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const itemName = form.itemName.value;
    const categoryName = form.categoryName.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const allData = {
      photo,
      itemName,
      categoryName,
      description,
      price,
      rating,
      stockStatus,
      processingTime,
      customization,
      userEmail: user?.email, // Include the user's email
    };
    // console.log(allData);
    fetch("https://sports-equipment-store-server-zeta.vercel.app/equipment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Sports equipment add successfully");
        }
        // console.log("All added data -->", data);
      });
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-lime-200 shadow-lg rounded-lg p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6 text-center">
          Add New Equipment
        </h2>

        <form onSubmit={handleAddEquipment} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">
                <span className="label-text font-bold mb-2">Image URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter image URL"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">
                <span className="label-text font-bold mb-2">Item Name</span>
              </label>
              <input
                type="text"
                name="itemName"
                placeholder="Enter item name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">
                <span className="label-text font-bold mb-2">Category Name</span>
              </label>
              <input
                name="categoryName"
                type="text"
                placeholder="Enter category name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">
                <span className="label-text font-bold mb-2">Description</span>
              </label>
              <input
                name="description"
                type="text"
                placeholder="Enter description"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
              ></input>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">
                <span className="label-text font-bold mb-2">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">
                <span className="label-text font-bold mb-2">Rating</span>
              </label>
              <input
                type="number"
                step="0.1"
                name="rating"
                placeholder="Enter rating"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">
                <span className="label-text font-bold mb-2">Customization</span>
              </label>
              <input
                type="text"
                name="customization"
                placeholder="Extra grip"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">
                <span className="label-text font-bold mb-2">
                  Processing Time
                </span>
              </label>
              <input
                type="text"
                name="processingTime"
                placeholder="3-5 days"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">
                <span className="label-text font-bold mb-2">Stock Status</span>
              </label>
              <input
                type="number"
                name="stockStatus"
                placeholder="Enter available quantity"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* User Email */}
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">
                <span className="label-text font-bold mb-2">User Email</span>
              </label>
              <input
                type="email"
                name="userEmail"
                defaultValue={user?.email}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>

            {/* User Name */}
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">
                <span className="label-text font-bold mb-2">User Name</span>
              </label>
              <input
                type="text"
                name="userName"
                defaultValue={user?.displayName}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-lime-500 hover:bg-lime-500 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition duration-200"
            >
              Add Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEquipment;
