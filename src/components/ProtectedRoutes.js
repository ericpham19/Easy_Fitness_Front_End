import * as React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const userToken = useSelector((state) => state.userToken)
  if (!userToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoutes;