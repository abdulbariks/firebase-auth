import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import SignUp from "../components/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      //   { path: "about", Component: About },
    ],
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      //   { path: "login", Component: Login },
      { path: "signup", Component: SignUp },
    ],
  },
  {
    path: "*",
    element: <p>Error</p>,
  },
]);
