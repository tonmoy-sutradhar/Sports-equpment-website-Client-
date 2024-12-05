import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyEquipmentList = () => {
  const { cart } = useContext(AuthContext); // Access cart data from AuthContext

  return (
    <div className="container mx-auto my-6">
      <h1 className="text-3xl font-bold text-center mb-4">My Equipment List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div
              key={item._id}
              className="p-4 border rounded-lg shadow-md bg-white"
            >
              <img
                src={item.photo}
                alt={item.itemName}
                className="h-48 w-full object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-2">{item.itemName}</h2>
              <p className="text-gray-600">Price: ${item.price}</p>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-gray-600">Rating: {item.rating}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            Your cart is empty. Add items to see them here!
          </p>
        )}
      </div>
    </div>
  );
};

export default MyEquipmentList;

// import React from "react";

// const MyEquipmentList = () => {
//   return (
//     <div>
//       <h1>My Equipment List</h1>
//     </div>
//   );
// };

// export default MyEquipmentList;
