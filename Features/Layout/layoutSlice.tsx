"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth_modal_open: false,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    open_auth_modal: (state) => {
      state.auth_modal_open = true;
    },
    close_all: (state) => {
      state.auth_modal_open = false;
    },
  },
});

export const { open_auth_modal, close_all } = layoutSlice.actions;

export default layoutSlice.reducer;
