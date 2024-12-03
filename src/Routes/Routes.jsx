import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home";
import Footer from "../Components/Footer";
import Sports from "../Pages/Sports";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/page",
        element: <Sports></Sports>,
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
