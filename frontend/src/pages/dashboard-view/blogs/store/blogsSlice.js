import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  blogs: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
};

// Define thunk for fetching blogs
export const fetchBlogs = createAsyncThunk(
  'blogs/fetchBlogs',
  async () => {
    const response = await axios.get("http://localhost:5000/api/blogs");
    return response.data;
  }
);

// Define thunk for adding a new Blog
export const addBlog = createAsyncThunk(
  'blogs/addBlog',
  async (BlogData) => {
    const response = await axios.post('http://localhost:5000/api/blogs/create', BlogData);
    return response.data;
  }
);

// Define thunk for deleting a Blog
export const deleteBlog = createAsyncThunk(
  'blogs/deleteBlog',
  async (BlogId) => {
    await axios.delete(`http://localhost:5000/api/blogs/${BlogId}`);
    return BlogId;
  }
);

// Define thunk for updating a Blog
debugger
export const updateBlog = createAsyncThunk(
  'blogs/updateBlog',
  async (BlogData) => {
    const { id, ...updatedData } = BlogData;
    const response = await axios.put(`http://localhost:5000/api/blogs/${id}`, updatedData);
    return response.data;
  }
);

// Define the blogs slice
const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetchblogs pending and fulfilled actions
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle addBlog pending and fulfilled actions
      .addCase(addBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs.push(action.payload);
      })
      .addCase(addBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle deleteBlog pending and fulfilled actions
      .addCase(deleteBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = state.blogs.filter(
          (Blog) => Blog.id !== action.payload
        );
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle updateBlog pending and fulfilled actions
      .addCase(updateBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = state.blogs.map((Blog) =>
          Blog.id === action.payload.id ? action.payload : Blog
        );
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export action creators and reducer
export const blogsActions = blogsSlice.actions;
export default blogsSlice.reducer;
