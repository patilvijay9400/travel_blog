// AppRoutes.js
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
// import Blogs from "../pages/Blogs";
import BlogPostPage from "../pages/BlogPostPage";
import About from "../pages/About";
import DashboardPage from "../pages/DashboardPage";
import NotFoundPage from "../pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../ui/DashboardLayout";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import AddBlog from "../pages/dashboard-view/blogs/components/AddBlog";
import EditBlogs from "../pages/dashboard-view/blogs/components/EditBlogs";
import Comments from "../pages/Comments";
import Blogs from "../pages/Blogs";
import BlogPost from "../pages/dashboard-view/blogs";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog-details" element={<BlogPostPage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blog-post" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard/*" element={<ProtectedDashboard />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const ProtectedDashboard = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? (
    <DashboardLayout>
      <Routes>
        <Route path="blogs" element={<BlogPost />} />
        <Route path="blogs/add-blog" element={<AddBlog />} />
        <Route path="blogs/:id" element={<EditBlogs />} />
        <Route path="comments" element={<Comments />} />
        {/* Add more nested routes here */}
        <Route path="/" element={<Navigate to="blogs" />} />
      </Routes>
    </DashboardLayout>
  ) : (
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
  );
};

export default AppRoutes;
