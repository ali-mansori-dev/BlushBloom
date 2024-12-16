"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  is_authed: false,
  loading: false,
  user_info: {}, // for user object
  access_token: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    log_in: (state, action) => {
      state.is_authed = true;
      state.user_info = action.payload.user_info;
      state.access_token = action.payload.access_token;
      state.loading = false;
    },
    log_out: (state) => {
      state.is_authed = false;
      state.user_info = {};
      state.access_token = null;
      state.loading = false;
    },
  },
});
export const { log_in, log_out } = authSlice.actions;
export default authSlice.reducer;
