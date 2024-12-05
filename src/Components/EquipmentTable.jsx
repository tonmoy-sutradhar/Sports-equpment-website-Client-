import React from "react";
import { FaFile, FaTrash } from "react-icons/fa";
import { MdDone, MdOutlineDoneAll } from "react-icons/md";
import { data, Link } from "react-router-dom";
import { MdUpdate } from "react-icons/md";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const EquipmentTable = ({ equipment, index, equipments, setEquipments }) => {
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
  } = equipment;

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
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              toast.success("Deleted successfully");
            }
            const remainData = equipments.filter((e) => e._id !== id);
            setEquipments(remainData);
            // console.log(data, "delete");
          });
      }
    });

    console.log(id);
  };

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{itemName}</td>
        <td>{categoryName}</td>
        <td>{price}</td>
        <td>{rating}</td>
        <td>{stockStatus}</td>
        <td>{processingTime}</td>
        <td>
          <div className="flex gap-4">
            {" "}
            <button
              title="Delete"
              onClick={() => handleDelete(_id)}
              className="bg-red-500 px-4 py-2 rounded text-white"
            >
              <FaTrash></FaTrash>
            </button>
            <button
              title="Update"
              className="bg-blue-500 px-4 py-2 rounded text-white"
            >
              <Link to={`/updateEquipment/${_id}`}>
                <MdUpdate></MdUpdate>
              </Link>
            </button>
            {/* <button className="bg-pink-500 px-4 py-2 rounded text-white">
              {isCompleted ? <MdOutlineDoneAll /> : <MdDone />}
            </button> */}
          </div>
        </td>
      </tr>
    </>
  );
};

export default EquipmentTable;
