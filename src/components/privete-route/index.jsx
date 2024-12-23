import React from "react";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { Navigate, Outlet } from "react-router-dom";
const PriveRoute = () => {
  const isAuth = useIsAuthenticated();
  if (!isAuth) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
};

export default PriveRoute;
