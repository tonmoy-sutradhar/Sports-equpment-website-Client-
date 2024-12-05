import { useLoaderData } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const ViewDetails = () => {
  const { addToCart } = useContext(AuthContext);
  const viewData = useLoaderData();
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
  } = viewData;

  const handleAddToCart = () => {
    addToCart(viewData);
    // alert(`${itemName} has been added to the cart!`);
    toast.success(`${itemName} has been added to the cart.`);
  };
  return (
    <div
      className="hero w-[80%] mx-auto h-[500px]  my-6 rounded-s-2xl"
      style={{
        backgroundImage: `url(${photo})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="flex justify-evenly items-center gap-9">
        <div className="w-[400px] mx-auto">
          <img src={photo} alt="Image" />
        </div>
        <div className="max-w-xl text-2xl text-start">
          <h2 className="text-white">
            Equipment Name: <span className="text-blue-500">{itemName}</span>
          </h2>
          <h2 className="text-xl text-blue-400 ">{}</h2>
          <p className="text-white ">
            Price: <span className="text-blue-500">{price} $</span>
          </p>
          <p className="text-white ">
            Description: <span className="text-blue-500">{description}</span>
          </p>
          <p className=" text-white">
            Rating:{" "}
            <span className="text-blue-500">
              {rating} {/* md */}
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
                  // defaultChecked
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
            </span>
          </p>
          <p className=" text-white">
            Stock Quantity: <span className="text-blue-500">{stockStatus}</span>
          </p>
          <p className="text-white ">
            Delivery Time:{" "}
            <span className="text-blue-500">{processingTime} day</span>
          </p>
          <button
            onClick={handleAddToCart}
            className="btn bg-lime-500 text-xl mt-3"
          >
            Add to Cart <MdOutlineAddShoppingCart></MdOutlineAddShoppingCart>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
