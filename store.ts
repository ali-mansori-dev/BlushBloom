import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice"; // Replace with your slices

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add your reducers here
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
