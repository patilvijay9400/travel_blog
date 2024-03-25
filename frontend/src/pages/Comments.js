import React, { useEffect, useState } from "react";
import Table from "../ui/components/Table";
import axios from 'axios';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const columns = [
    { key: "comment_id", title: "ID" }, 
    { key: "content", title: "Content" },
    { key: "name", title: "Name" }, 
    { key: "email", title: "Email" },
    { key: "created_at", title: "Created At" },
    ];
    
    const fetchComments = async () => {
        try {
            const response = await axios.get("http://localhost:5000/comments");
            setComments(response.data);
          return response.data;
        } catch (error) {
          console.error('Error fetching comments:', error);
          throw error; // Optionally, re-throw the error to handle it in the calling code
        }
      };
    
    useEffect(() => {
        fetchComments();
    }, [])
    

  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="px-4 py-3 px-lg-5 d-flex justify-content-between align-items-center">
          <h2 className="">
            Comments
          </h2>
          
        </div>
      </header>
      <main className="px-4 lg:px-8 py-4">
        <Table data={comments} columns={columns} />
      </main>
    </div>
  );
};

export default Comments;
