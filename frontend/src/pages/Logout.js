import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../store/authSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await axios.post("http://localhost:5000/api/logout");
      dispatch(logOut());
      navigate("/");
      localStorage.removeItem("token");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };
  return (
    <button type="button" className="btn btn-primary" onClick={logout}>
      Logout
    </button>
  );
};

export default Logout;
