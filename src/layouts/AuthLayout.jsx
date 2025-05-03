import React from "react";
import Login from "../components/Login";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <h2>AuthLayout</h2>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
