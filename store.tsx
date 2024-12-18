"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import LayoutReducer from "./Features/Layout/layoutSlice";
import AuthReducer from "./Features/Auth/authSlice";
import CartReducer from "./Features/Cart/cartSlice";

const rootReducer = combineReducers({
  layout: LayoutReducer,
  auth: AuthReducer,
  cart: CartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
