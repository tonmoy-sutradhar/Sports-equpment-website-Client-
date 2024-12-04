import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllSportsEquipment from "../Pages/AllSportsEquipment";
import AddEquipment from "../Pages/AddEquipment";
import MyEquipmentList from "../Pages/MyEquipmentList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgotPassword from "../Components/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:8000/equipment"),
      },
      {
        path: "/allSportsEquipment",
        element: <AllSportsEquipment></AllSportsEquipment>,
        loader: () => fetch("http://localhost:8000/equipment"),
      },
      {
        path: "/addEquipment",
        element: <AddEquipment></AddEquipment>,
      },
      {
        path: "/myEquipmentList",
        element: <MyEquipmentList></MyEquipmentList>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword></ForgotPassword>,
      },

      {
        path: "*",
        element: (
          <h1 className="text-center text-5xl text-red-500 mt-[180px]">
            PAGE NOT FOUND 404🎃
          </h1>
        ),
      },
    ],
  },
]);

export default router;
