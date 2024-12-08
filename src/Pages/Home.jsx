import React, { useState } from "react";
import Banner from "../Components/Banner";
import { useLoaderData } from "react-router-dom";
import EquipmentCard from "../Components/EquipmentCard";
import "animate.css";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const loadData = useLoaderData();

  const [selectedCategory, setSelectedCategory] = useState("All"); // Track selected category

  // Filter data based on the selected category
  const filteredData =
    selectedCategory === "All"
      ? loadData
      : loadData.filter(
          (equipment) =>
            equipment.categoryName.toLowerCase() ===
            selectedCategory.toLowerCase()
        );

  return (
    <>
      <div>
        <Banner></Banner>

        <div className="mt-9 px-4 ">
          <h2 className="text-3xl font-bold text-blue-500 text-center mb-6 ">
            Current Promotions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Fade direction="left" triggerOnce="true">
              <div className="bg-green-100 p-6 rounded-lg shadow-md hover:animate-pulse">
                <h3 className="text-xl font-bold mb-2">
                  50% Off on Football Gear
                </h3>
                <p>
                  Get the best deals on top-quality football gear this season.
                </p>
              </div>
            </Fade>
            <Fade direction="up" triggerOnce="true">
              <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:animate-pulse">
                <h3 className="text-xl font-bold mb-2">Buy 1 Get 1 Free</h3>
                <p>Applicable to select tennis equipment.</p>
              </div>
            </Fade>
            <Fade direction="right" triggerOnce="true">
              <div className="bg-yellow-100 p-6 rounded-lg shadow-md hover:animate-pulse">
                <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
                <p>On orders over $50, for all categories.</p>
              </div>
            </Fade>
          </div>
        </div>

        <Fade>
          <div className="mt-12 px-4 ">
            <Fade direction="left" triggerOnce="true">
              <h2 className="text-3xl font-bold text-blue-500 text-center mb-6 ">
                Featured Products
              </h2>
            </Fade>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Fade direction="left" triggerOnce="true">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0020/9407/1890/files/2_480x480.jpg"
                    alt="Product 1"
                    className="w-full h-48 object-cover hover:animate-pulse"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">Badminton</h3>
                  </div>
                </div>
              </Fade>

              <Fade direction="up" triggerOnce="true">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://media.istockphoto.com/id/1191513033/photo/cricket-ball-hitting-the-stumps.jpg?s=612x612&w=0&k=20&c=-Ovg1rk1yNQDrhfciJu-jdnYuwE3FK0dK6sh8ztZ-BA="
                    alt="Product 2"
                    className="w-full h-48 object-cover hover:animate-pulse"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">Cricket Stamp</h3>
                  </div>
                </div>
              </Fade>

              <Fade direction="right" triggerOnce="true">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://s7ap1.scene7.com/is/image/aia/tennis-la-gi%20(2)?qlt=85&wid=1024&ts=1692756340641&dpr=off"
                    alt="Product 3"
                    className="w-full h-48 object-cover hover:animate-pulse"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">Tennis Racket</h3>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </Fade>
      </div>

      {/* Category Filter */}
      <div className="mt-9 px-4 text-center">
        <div className="flex justify-center gap-6">
          <button
            onClick={() => setSelectedCategory("All")}
            className="bg-gradient-to-r from-purple-600  to-blue-500 text-white py-3 px-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:from-purple-600 hover:via-pink-600 hover:to-red-600 focus:ring-4 focus:ring-pink-300"
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory("Cricket")}
            className="bg-gradient-to-r from-purple-600  to-blue-500 text-white py-3 px-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:from-purple-600 hover:via-pink-600 hover:to-red-600 focus:ring-4 focus:ring-pink-300"
          >
            Cricket
          </button>
          <button
            onClick={() => setSelectedCategory("Football")}
            className="bg-gradient-to-r from-purple-600  to-blue-500 text-white py-3 px-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:from-purple-600 hover:via-pink-600 hover:to-red-600 focus:ring-4 focus:ring-pink-300"
          >
            Football
          </button>
          {/* <button
            onClick={() => setSelectedCategory("Badminton")}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Badminton
          </button> */}
          <button
            onClick={() => setSelectedCategory("Badminton")}
            className="bg-gradient-to-r from-purple-600  to-blue-500 text-white py-3 px-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:from-purple-600 hover:via-pink-600 hover:to-red-600 focus:ring-4 focus:ring-pink-300"
          >
            Badminton
          </button>
        </div>
      </div>

      <div className="mt-9 px-4">
        {/* <h2 className="text-3xl font-bold text-blue-500 text-center mb-6">
          {selectedCategory === "All"
            ? "All Sports Products"
            : `${selectedCategory} Equipment`}
        </h2> */}

        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 px-6 my-10">
          {filteredData.slice(0, 10).map((equipment, index) => (
            <Fade
              key={equipment._id}
              cascade="false"
              triggerOnce="true"
              delay={index * 200}
              direction="right"
            >
              <EquipmentCard equipment={equipment} />
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
