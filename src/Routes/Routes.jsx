import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllSportsEquipment from "../Pages/AllSportsEquipment";
import AddEquipment from "../Pages/AddEquipment";
import MyEquipmentList from "../Pages/MyEquipmentList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgotPassword from "../Components/ForgotPassword";
import ViewDetails from "../Components/ViewDetails";
import UpdateEquipment from "../Components/UpdateEquipment";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddEquipment></AddEquipment>
          </PrivateRoute>
        ),
      },
      {
        path: "/myEquipmentList",
        element: (
          <PrivateRoute>
            <MyEquipmentList></MyEquipmentList>
          </PrivateRoute>
        ),
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:8000/equipment/${params.id}`),
      },
      {
        path: "/updateEquipment/:id",
        element: (
          <PrivateRoute>
            <UpdateEquipment></UpdateEquipment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:8000/equipment/${params.id}`),
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
