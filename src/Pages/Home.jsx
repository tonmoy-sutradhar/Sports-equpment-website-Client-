import React from "react";
import Banner from "../Components/Banner";
import { useLoaderData } from "react-router-dom";
import EquipmentCard from "../Components/EquipmentCard";

const Home = () => {
  const loadData = useLoaderData();

  return (
    <>
      <div>
        <Banner></Banner>

        <div className="mt-9 px-4">
          <h2 className="text-3xl font-bold text-blue-500  text-center mb-6">
            Current Promotions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                50% Off on Football Gear
              </h3>
              <p>
                Get the best deals on top-quality football gear this season.
              </p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Buy 1 Get 1 Free</h3>
              <p>Applicable to select tennis equipment.</p>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
              <p>On orders over $50, for all categories.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 px-4">
          <h2 className="text-3xl font-bold text-blue-500 text-center mb-6">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://cdn.shopify.com/s/files/1/0020/9407/1890/files/2_480x480.jpg"
                alt="Product 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">Badminton</h3>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/1191513033/photo/cricket-ball-hitting-the-stumps.jpg?s=612x612&w=0&k=20&c=-Ovg1rk1yNQDrhfciJu-jdnYuwE3FK0dK6sh8ztZ-BA="
                alt="Product 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">Cricket Stamp</h3>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://s7ap1.scene7.com/is/image/aia/tennis-la-gi%20(2)?qlt=85&wid=1024&ts=1692756340641&dpr=off"
                alt="Product 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">Tennis Racket</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sprots equipment //////////////////////////////////////////////////////////*/}
      <h1 className="text-3xl mt-6  font-bold text-center text-blue-500">
        {" "}
        All sports products
      </h1>
      <div className="w-full grid grid-cols-4 gap-7 px-6 my-10">
        {/* .slice(0, 6) */}
        {loadData.slice(0, 6).map((equipment) => (
          <EquipmentCard
            key={equipment._id}
            equipment={equipment}
          ></EquipmentCard>
        ))}
      </div>
    </>
  );
};

export default Home;
