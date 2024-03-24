import React, { useEffect, useState } from "react";
import Table from "../../../ui/components/Table";
import { MdModeEdit, MdDelete } from "react-icons/md"; // Importing MdDelete from react-icons/md
import Tooltip from "@mui/material/Tooltip"; // Updated import path for Tooltip
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteBlog, fetchBlogs } from "./store/blogsSlice";

const Blogs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blogPosts = useSelector((state) => state.blogs.blogs);
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const onEdit = (blogId) => {
    navigate(`${blogId}`);
  };


  const onDelete = (blogId) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      dispatch(deleteBlog(blogId))
      .then(() => {
        // If the deletion is successful, refetch the blogs
        dispatch(fetchBlogs());
      })
      .catch((error) => {
        console.error("Error deleting blog:", error);
        // Handle error if needed
      });
    }
  };

  const columns = [
    { key: "post_id", title: "ID" }, // Assuming "post_id" is the correct key for ID
    { key: "title", title: "Title" },
    { key: "content", title: "Content" },
    { key: "type", title: "Category Type" }, // Assuming "type" is the correct key for category type
    { key: "destination", title: "Destination" },
    { key: "created_at", title: "Created At" },
    {
      key: "action",
      title: "Action",
      render: (blog) => (
        <div className="flex gap-2">
          <Tooltip title="Edit" placement="top-start">
            <button
              className="p-1 bg-transparent border-0 text-info"
              onClick={() => onEdit(blog.post_id)}
            >
              <MdModeEdit className="text-sm" />
            </button>
          </Tooltip>
          <Tooltip title="Delete" placement="top-start">
            <button
              className="p-1 bg-transparent border-0 text-danger"
              onClick={() => onDelete(blog.post_id)}
            >
              <MdDelete className="text-sm" />
            </button>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="px-4 py-6 px-lg-5 d-flex justify-content-between align-items-center">
          <h2 className="">
            Blogs
          </h2>
          <Link to="add-blog">
            <button className="px-3 py-1 btn btn-primary rounded text-white">
              Add
            </button>
          </Link>
        </div>
      </header>
      <main className="px-4 lg:px-8 py-4">
        <Table data={blogPosts} columns={columns} />
      </main>
    </div>
  );
};

export default Blogs;
