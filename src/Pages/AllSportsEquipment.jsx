import React from "react";
import { useLoaderData } from "react-router-dom";
import EquipmentCard from "../Components/EquipmentCard";

const AllSportsEquipment = () => {
  const loaderData = useLoaderData();

  console.log(loaderData);
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-lime-500 mb-5">
        All Sports Equipment
      </h1>

      <div className="grid grid-cols-4 gap-8 px-9 ">
        {loaderData.map((equipment) => (
          <EquipmentCard
            key={equipment._id}
            equipment={equipment}
          ></EquipmentCard>
        ))}
      </div>
    </>
  );
};

export default AllSportsEquipment;
