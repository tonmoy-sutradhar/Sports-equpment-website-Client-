import React from "react";
import { data, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { FcViewDetails } from "react-icons/fc";

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

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{itemName}</td>
        <td>{categoryName}</td>
        <td>$ {price}</td>
        <td>{rating} ⭐⭐⭐</td>
        <td>{stockStatus}</td>
        <td>{processingTime}</td>
        <td>
          <div className="flex gap-4">
            <button
              title="View Details"
              className="bg-blue-500 px-4 py-2 rounded text-white"
            >
              <Link to={`/viewDetails/${_id}`}>
                <button>
                  <div className="flex justify-center items-center gap-1">
                    <span className="text-xs">view details</span>
                    <span>
                      <FcViewDetails></FcViewDetails>
                    </span>
                  </div>
                </button>
              </Link>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default EquipmentTable;
