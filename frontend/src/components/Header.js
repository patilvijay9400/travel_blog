import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Header = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  const toggleModal = () => {
    setShowModal(!showModal);
  };

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
          <div className="d-lg-flex justify-content-between w-100">
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
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white"
                  activeClassName="active"
                  to="/about-us"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white"
                  activeClassName="active"
                  to="/blogs"
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-primary"
              onClick={toggleModal}
            >
              Login/Signup
            </button>
            {showModal && (
              <div
                className="modal fade show"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{ display: "block" }}
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h3 className="modal-title" id="exampleModalLabel">
                        {isRegistered ? "Login" : "Sign Up"}
                      </h3>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={toggleModal}
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      {isRegistered ? (
                        <Login closeModal={toggleModal} />
                      ) : (
                        <SignUp setIsRegistered={setIsRegistered} />
                      )}
                      <p className="text-sm mt-1">
                        {isRegistered
                          ? "Already have an account?"
                          : "Don't have an account?"}
                        <a
                          href="#"
                          className="ms-2"
                          onClick={() => setIsRegistered(!isRegistered)}
                        >
                          {isRegistered ? "Login" : "Sign Up"}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
