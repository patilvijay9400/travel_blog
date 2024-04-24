import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const DashboardHeader = () => {
  const user = useSelector((state) => state);
  console.log(user)
  return (
    <nav className="navbar navbar-expand-lg px-md-5">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-white fw-bolder" to="/">
          Blog Platform
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-lg-flex justify-content-between w-100 align-items-center">
            <ul className="navbar-nav ms-5">
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link text-white"
                  activeClassName="active"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white"
                  activeClassName="active"
                  to="/dashboard/blogs"
                >
                  Blogs List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white"
                  activeClassName="active"
                  to="/dashboard/comments"
                >
                  Comments
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
