import React from "react";
import { Link } from "react-router-dom";

const EquipmentCard = ({ equipment }) => {
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
      <div>
        {/* <div className="card bg-white shadow-2xl">
          <figure>
            <img src={photo} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {itemName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Price: $ {price}</p>
            <p>{description}</p>
            <div>
            
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
            <Link to={`/viewDetails/${_id}`}>
              <button className="btn bg-lime-400 w-full">View Details</button>
            </Link>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Quantity: {stockStatus}</div>
              <div className="badge badge-outline">
                Delivery: {processingTime}
              </div>
            </div>
          </div>
        </div> */}

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
            <Link to={`/viewDetails/${_id}`}>
              <button className="rounded-md border text-white border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipmentCard;
