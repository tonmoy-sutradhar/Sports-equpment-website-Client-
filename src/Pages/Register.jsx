import React from "react";

const Register = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100">
        {/* Left Section: Illustration/Brand */}
        <div className="hidden md:flex flex-1 bg-gradient-to-r h-[500px] from-lime-400 to-green-500  items-center justify-center">
          <div className="text-center px-8">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Join the EquiSports Community!
            </h2>
            <p className="text-white text-lg leading-relaxed max-w-md mx-auto">
              Sign up today to access premium sports gear and connect with other
              athletes. Your journey to greatness starts here.
            </p>
          </div>
        </div>

        {/* Right Section: Registration Form */}
        <div className="flex-1 max-w-md w-full px-6 sm:px-8 md:px-12 bg-white shadow-lg rounded-lg py-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-700">
            Create Your Account
          </h2>

          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
                placeholder="Create a password"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
                placeholder="Re-enter your password"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-lime-400 hover:bg-lime-500 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-lime-400 transition duration-200"
              >
                Register
              </button>
            </div>
          </form>

          {/* Additional Options */}
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-sm">
              Already have an account?{" "}
              <a
                href="#"
                className="text-lime-400 hover:underline font-semibold"
              >
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
