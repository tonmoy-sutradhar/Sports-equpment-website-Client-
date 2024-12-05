import React from "react";
import { FaFile, FaTrash } from "react-icons/fa";
import { MdDone, MdOutlineDoneAll } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdUpdate } from "react-icons/md";

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
    fetch(`http://localhost:8000/equipment/${id}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "delete");
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
              className="bg-pink-500 px-4 py-2 rounded text-white"
            >
              <Link>
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
