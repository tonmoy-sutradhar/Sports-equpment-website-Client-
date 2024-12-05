import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Components/Loading";

const PrivateRoute = () => {
  const location = useLocation();
  // console.log(location);
  const { user, loading } = useContext(AuthContext);
  if (user && user?.email) {
    return children;
  }
  if (loading) {
    return <Loading></Loading>;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
