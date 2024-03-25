import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = () => {
  const [formData, setFormData] = useState({
    content: '',
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/comments/create', formData);
      console.log('Comment created successfully:', response.data);
      // Optionally, you can redirect or show a success message here
    } catch (error) {
      console.error('Error creating comment:', error);
      // Optionally, handle error display or redirect to an error page
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create New Comment</h2>
      <form onSubmit={handleSubmit} className='row mb-3'>
        <div className="col-12 mb-3">
          <label htmlFor="content" className="form-label">Content:</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
              </div>
              <div className='col-12'>
                  
        <button type="submit" className="btn btn-primary">Submit</button>
              </div>
      </form>
    </div>
  );
};

export default CommentForm;
