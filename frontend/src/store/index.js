import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import blogsSlice from '../pages/dashboard-view/blogs/store/blogsSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    blogs: blogsSlice
  },
});