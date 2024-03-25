import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logOut: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logOut } = authSlice.actions;

export default authSlice.reducer;
