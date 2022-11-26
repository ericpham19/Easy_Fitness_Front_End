import * as React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../reducers/userSlice";

const LogoutPage = () => {
    const dispatch = useDispatch()
    dispatch(logout())
    return <Navigate to="/"/>;
};

export default LogoutPage;