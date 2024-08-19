import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./UserContext";

const PrivateRoute = () => {
  const { userType } = useContext(UserContext);
  const user = JSON.parse(localStorage.getItem("users"));

  return  userType === "startup" || user?.[0]?.userType ? <Outlet /> : <Navigate to="/SignIn" />;
};

export default PrivateRoute;
