import React from "react";

const EquipmentCard = ({ equipment }) => {
  const {
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
        <div className="card bg-white shadow-2xl">
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
            <button className="btn bg-lime-400">View Details</button>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Quantity: {stockStatus}</div>
              <div className="badge badge-outline">
                Delivery: {processingTime}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipmentCard;
