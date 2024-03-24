// SignUp.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

const SignUp = ({setIsRegistered}) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // User successfully signed up
        console.log(await response.json());
        setIsRegistered(true);
        dispatch(login(formData));
      } else {
        // Handle signup error
        const data = await response.json();
        // Display error message to the user
        console.error("Signup failed:", data.message);
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="text" class="form-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChange}
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            class="form-control"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            class="form-control"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
