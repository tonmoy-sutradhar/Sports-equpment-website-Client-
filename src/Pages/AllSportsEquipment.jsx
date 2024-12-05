import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import EquipmentCard from "../Components/EquipmentCard";
import EquipmentTable from "../Components/EquipmentTable";

const AllSportsEquipment = () => {
  const loaderData = useLoaderData();
  const [equipments, setEquipments] = useState(loaderData);

  console.log(loaderData);
  return (
    <>
      <h1 className="text-3xl font-bold text-center border-b-2 w-[400px] mx-auto text-lime-500 mb-5">
        All Sports Equipment Table
      </h1>

      {/* <div className="w-[800px] mx-auto mb-4 mt-5 px-10">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          placeholder="search"
          className="input input-bordered w-full"
          required
        />
      </div> */}
      <div className="w-full mx-auto bg-slate-50 px-10 text-center">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>serial</th>
                <th>Item Name</th>
                <th>Category Name</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Stock Quantity</th>
                <th>Processing Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {equipments.length === 0 ? (
                <p className="text-3xl font-bold text-red-500 text-start mt-4">
                  No Data Found
                </p>
              ) : (
                equipments.map((equipment, index) => (
                  <EquipmentTable
                    key={equipment._id}
                    equipment={equipment}
                    index={index}
                    equipments={equipments}
                    setEquipments={setEquipments}
                  ></EquipmentTable>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="grid grid-cols-4 gap-8 px-9 ">
        {loaderData.map((equipment) => (
          <EquipmentCard
            key={equipment._id}
            equipment={equipment}
          ></EquipmentCard>
        ))}
      </div> */}
    </>
  );
};

export default AllSportsEquipment;
