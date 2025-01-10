import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyEquipmentCart = ({ item, handleDelete1 }) => {
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
        fetch(
          `https://sports-equipment-store-server-zeta.vercel.app/equipment/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              handleDelete1(id);
            }
          })
          .catch((err) => {
            console.error("Error deleting equipment:", err);
            Swal.fire("Error!", "Something went wrong!", "error");
          });
      }
    });
  };

  return (
    // <div className="card bg-blue-100 shadow-2xl">
    //   <figure>
    //     <img src={photo} alt={itemName} />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">
    //       {itemName}
    //       <div className="badge badge-secondary">Time: {processingTime}</div>
    //     </h2>
    //     <p>Price: $ {price}</p>
    //     <p>{description}</p>
    //     <div className="rating rating-md">
    //       <input
    //         type="radio"
    //         name="rating-7"
    //         className="mask mask-star-2 bg-orange-400"
    //       />
    //       <input
    //         type="radio"
    //         name="rating-7"
    //         className="mask mask-star-2 bg-orange-400"
    //         defaultChecked
    //       />
    //       <input
    //         type="radio"
    //         name="rating-7"
    //         className="mask mask-star-2 bg-orange-400"
    //       />
    //       <input
    //         type="radio"
    //         name="rating-7"
    //         className="mask mask-star-2 bg-orange-400"
    //       />
    //       <input
    //         type="radio"
    //         name="rating-7"
    //         className="mask mask-star-2 bg-orange-400"
    //       />
    //     </div>

    //     <Link to={`/updateEquipment/${_id}`}>
    //       <button className="btn bg-lime-400 w-full">Update Equipment</button>
    //     </Link>
    //     <button
    //       title="Delete"
    //       onClick={() => handleDelete(_id)}
    //       className="bg-red-500 px-4 py-2 rounded text-white"
    //     >
    //       Delete
    //     </button>
    //   </div>
    // </div>

    <div className="max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
      <img
        width={400}
        height={400}
        className="h-[275px] w-[350px] rounded-lg object-cover"
        src={photo}
        alt="card navigate ui"
      />
      <div className="grid gap-2">
        <h1 className="text-lg font-semibold text-white">{itemName}</h1>
        <p className="text-sm text-gray-500 dark:text-white/60">
          {description}
        </p>
        <div className="text-lg font-semibold text-white">${price}</div>
        <div className="text-lg font-semibold text-white">
          quantity: {stockStatus}
        </div>
      </div>

      <div className="flex gap-4">
        {/* ----- */}
        <Link to={`/updateEquipment/${_id}`}>
          <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">
            Update
          </button>
        </Link>

        <button
          title="Delete"
          onClick={() => handleDelete(_id)}
          className="bg-red-500 px-4 py-2 rounded text-white"
          // className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyEquipmentCart;
