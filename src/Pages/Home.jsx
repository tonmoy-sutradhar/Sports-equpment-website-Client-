import React from "react";
import Banner from "../Components/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <div className="mt-9 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Current Promotions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">50% Off on Football Gear</h3>
            <p>Get the best deals on top-quality football gear this season.</p>
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
        <h2 className="text-3xl font-bold text-center mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxxZ3qAAIkSI17yHywFNKjCw6PrhgdJmDenTC9B8MiTVIQLWUDFy0Mgw&s"
              alt="Product 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Football</h3>
            </div>
          </div>
          {/* Product Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="data:image/jpeg;base64,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"
              alt="Product 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Basketball</h3>
            </div>
          </div>
          {/* Product Card */}
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
  );
};

export default Home;
