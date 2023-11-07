"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { name, amount, image, price, id } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.amount += amount;
      } else {
        state.items.push({ name, amount, image, price, id });
      }
    },
    removeItem: (state, action) => {
      const { name, amount } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.name === name
      );
      if (existingItemIndex !== -1) {
        if (state.items[existingItemIndex].amount > amount) {
          state.items[existingItemIndex].amount -= amount;
        } else {
          state.items = state.items.filter((item) => item.name !== name);
        }
      }
    },
    deleteAllItem: (state, action) => {
      const { name } = action.payload;
      state.items = state.items.filter((item) => item.name !== name);
    },
    updateCart: (state, action) => {
      const { name, amount } = action.payload;
      console.log(name, amount);
      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        existingItem.amount = parseInt(amount);
      }
    },
  },
});

export const { addItem, removeItem, deleteAllItem, updateCart } =
  cartSlice.actions;

export default cartSlice.reducer;
