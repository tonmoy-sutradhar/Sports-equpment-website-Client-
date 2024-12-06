import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // logOut(auth)
  //   .then(() => {
  //     console.log("user logout");
  //   })
  //   .catch((err) => {
  //     console.log("error in logout");
  //   });
  return (
    <Fade>
      <div className="navbar bg-blue-500 text-white px-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-blue-400 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/allSportsEquipment">All Sports Equipment</NavLink>
              <NavLink to="/addEquipment">Add Equipment</NavLink>
              <NavLink to="/myEquipmentList">My Equipment List</NavLink>
              {/* <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink> */}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <Link
                to="/"
                className="font-bold text-xl text-[#5c29b4] lg:text-2xl -mt-1"
              >
                Sports Equipment Online Store 🏀
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  font-bold gap-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/allSportsEquipment">All Sports Equipment</NavLink>
            <NavLink to="/addEquipment">Add Equipment</NavLink>
            <NavLink to="/myEquipmentList">My Equipment List</NavLink>
            {/* <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink> */}
          </ul>
        </div>
        <div className="navbar-end">
          {user && user?.email ? (
            <div className="flex justify-center items-center gap-3">
              <img
                title={user?.displayName}
                className="w-11 rounded-full"
                src={user?.photoURL}
                alt="Profile-photo"
              />
              <button onClick={logOut} className="btn bg-lime-400">
                Logout
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-3">
              <NavLink to="/login" className="btn bg-lime-400">
                Login
              </NavLink>
              <NavLink to="/register" className="btn bg-lime-400">
                Signup
              </NavLink>
            </div>
          )}

          {/* <button className="btn bg-lime-400">Get Started</button> */}
        </div>
      </div>
    </Fade>
  );
};

export default Header;
