"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import authReducer from "./features/authSlice";
import reviewReducer from "./features/reviewSlice";

export const store = configureStore({
  reducer: { cart: cartReducer, auth: authReducer, review: reviewReducer },
});
