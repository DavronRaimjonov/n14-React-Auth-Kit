import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import PriveRoute from "../components/privete-route";

const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));

export const route = createBrowserRouter([
  {
    path: "/",
    element: <PriveRoute />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
