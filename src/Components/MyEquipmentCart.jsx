import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const MyEquipmentCart = ({ item }) => {
  const { removeFromCart } = useContext(AuthContext);
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
  } = item;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8000/equipment/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              removeFromCart(id);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              toast.success("Deleted successfully");
            }
          });
      }
    });

    // console.log(id);
  };

  return (
    <>
      <div className="card bg-blue-100 shadow-2xl">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {itemName}
            <div className="badge badge-secondary">Time: {processingTime}</div>
          </h2>
          <p>Price: $ {price}</p>
          <p>{description}</p>
          <div>
            {/* md */}
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>

          <Link to={`/updateEquipment/${_id}`}>
            <button className="btn bg-lime-400 w-full">Update Equipment</button>
          </Link>
          <button
            title="Delete"
            onClick={() => handleDelete(_id)}
            className="bg-red-500 px-4 py-2 rounded text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default MyEquipmentCart;
