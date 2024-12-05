import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateEquipment = () => {
  const loaderUpdateData = useLoaderData();
  const {
    _id,
    photo,
    itemName,
    categoryName,
    description,
    price,
    rating,
    stockStatus,
    processingTime,
    customization,
  } = loaderUpdateData;

  const handleUpdate = (e) => {
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
    const equipmentData = {
      photo,
      itemName,
      categoryName,
      description,
      price,
      rating,
      stockStatus,
      processingTime,
      customization,
    };

    fetch(
      `https://sports-equipment-store-server-zeta.vercel.app/equipment/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(equipmentData),
      }
    )
      .then((res) => res.json())
      .then((value) => {
        // console.log(value, "update value");
        if (value.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Coffee update successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };
  return (
    <>
      <h1 className="text-3xl font-bold text-center border-b-2 w-[400px] mx-auto text-lime-500 ">
        Update Equipment
      </h1>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 ">
        <div className="max-w-4xl w-full bg-lime-200 shadow-lg rounded-lg p-6 sm:p-10 ">
          {/* Page Title */}
          {/* <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6 text-center">
            Update Equipment
          </h2> */}

          {/* Form */}
          <form onSubmit={handleUpdate} className="space-y-10">
            {/* Row 1: Image & Item Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image */}
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  <span className="label-text font-bold mb-2">Image URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Enter image URL"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
                />
              </div>

              {/* Item Name */}
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  <span className="label-text font-bold mb-2">Item Name</span>
                </label>
                <input
                  type="text"
                  name="itemName"
                  defaultValue={itemName}
                  placeholder="Enter item name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Row 2: Category Name & Description */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Category Name */}
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  <span className="label-text font-bold mb-2">
                    Category Name
                  </span>
                </label>
                <input
                  name="categoryName"
                  type="text"
                  defaultValue={categoryName}
                  placeholder="Enter category name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  <span className="label-text font-bold mb-2">Description</span>
                </label>
                <input
                  name="description"
                  type="text"
                  defaultValue={description}
                  placeholder="Enter description"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
                ></input>
              </div>
            </div>

            {/* Row 3: Price, Rating, and Customization */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Price */}
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  <span className="label-text font-bold mb-2">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
                  placeholder="Enter price"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  <span className="label-text font-bold mb-2">Rating</span>
                </label>
                <input
                  type="number"
                  step="0.1"
                  defaultValue={rating}
                  name="rating"
                  placeholder="Enter rating (e.g., 4.5)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
                />
              </div>

              {/* Customization */}
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  <span className="label-text font-bold mb-2">
                    Customization
                  </span>
                </label>
                <input
                  type="text"
                  name="customization"
                  defaultValue={customization}
                  placeholder="E.g., Extra grip"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Row 4: Processing Time & Stock Status */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Processing Time */}
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  <span className="label-text font-bold mb-2">
                    Processing Time
                  </span>
                </label>
                <input
                  type="text"
                  name="processingTime"
                  defaultValue={processingTime}
                  placeholder="E.g., 3-5 business days"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
                />
              </div>

              {/* Stock Status */}
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  <span className="label-text font-bold mb-2">
                    Stock Status
                  </span>
                </label>
                <input
                  type="number"
                  defaultValue={stockStatus}
                  name="stockStatus"
                  placeholder="Enter available quantity"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Row 5: User Email and User Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* User Email */}
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  <span className="label-text font-bold mb-2">User Email</span>
                </label>
                <input
                  type="email"
                  name="userEmail"
                  value="user@example.com"
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
                className="bg-lime-500 hover:bg-lime-500 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition duration-200"
              >
                Update Equipment
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateEquipment;
