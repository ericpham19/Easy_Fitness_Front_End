import * as React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoutes = ({ children }) => {
  const userToken = useSelector((state) => state.user.userToken)
  
  if (!userToken) {
    toast.warn("Please login first!")
    return <Navigate to="/login" replace />;
  }
 
  return children;
  
};

export default ProtectedRoutes;