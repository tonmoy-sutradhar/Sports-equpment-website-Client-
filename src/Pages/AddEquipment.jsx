import React from "react";

const AddEquipment = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6 sm:p-10">
        {/* Page Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6 text-center">
          Add New Equipment
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Row 1: Image & Item Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Image */}
            <div>
              <label
                htmlFor="image"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Image URL
              </label>
              <input
                type="text"
                id="image"
                placeholder="Enter image URL"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
              />
            </div>

            {/* Item Name */}
            <div>
              <label
                htmlFor="itemName"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Item Name
              </label>
              <input
                type="text"
                id="itemName"
                placeholder="Enter item name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Row 2: Category Name & Description */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Category Name */}
            <div>
              <label
                htmlFor="categoryName"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Category Name
              </label>
              <input
                type="text"
                id="categoryName"
                placeholder="Enter category name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                placeholder="Enter description"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none h-24"
              ></textarea>
            </div>
          </div>

          {/* Row 3: Price, Rating, and Customization */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Price */}
            <div>
              <label
                htmlFor="price"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                placeholder="Enter price"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
              />
            </div>

            {/* Rating */}
            <div>
              <label
                htmlFor="rating"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Rating
              </label>
              <input
                type="number"
                step="0.1"
                id="rating"
                placeholder="Enter rating (e.g., 4.5)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
              />
            </div>

            {/* Customization */}
            <div>
              <label
                htmlFor="customization"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Customization
              </label>
              <input
                type="text"
                id="customization"
                placeholder="E.g., Extra grip"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Row 4: Processing Time & Stock Status */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Processing Time */}
            <div>
              <label
                htmlFor="processingTime"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Processing Time
              </label>
              <input
                type="text"
                id="processingTime"
                placeholder="E.g., 3-5 business days"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
              />
            </div>

            {/* Stock Status */}
            <div>
              <label
                htmlFor="stockStatus"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Stock Status
              </label>
              <input
                type="number"
                id="stockStatus"
                placeholder="Enter available quantity"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Row 5: User Email and User Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* User Email */}
            <div>
              <label
                htmlFor="userEmail"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                User Email
              </label>
              <input
                type="email"
                id="userEmail"
                value="user@example.com"
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>

            {/* User Name */}
            <div>
              <label
                htmlFor="userName"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                User Name
              </label>
              <input
                type="text"
                id="userName"
                value="John Doe"
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-lime-400 hover:bg-lime-500 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition duration-200"
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
