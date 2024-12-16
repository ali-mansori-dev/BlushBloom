"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import LayoutReducer from "./Features/Layout/layoutSlice";
import AuthReducer from "./Features/Auth/authSlice";

const rootReducer = combineReducers({
  layout: LayoutReducer,
  auth: AuthReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
