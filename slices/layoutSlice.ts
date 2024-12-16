import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LayoutState {
  is_auth_modal_open: boolean;
}

const initialState: LayoutState = {
  is_auth_modal_open: false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    open_auth_modal: (state) => {
      state.is_auth_modal_open = true;
    },
    close_all: (state) => {
      state.is_auth_modal_open = false;
    },
  },
});

export const { open_auth_modal, close_all } = layoutSlice.actions;
export default layoutSlice.reducer;
