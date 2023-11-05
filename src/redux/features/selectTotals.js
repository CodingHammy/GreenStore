import { createSelector } from "@reduxjs/toolkit";

// Selector function to calculate the total price of all items in the cart
export const selectTotalPrice = createSelector(
  (state) => state.cart.items,
  (items) => {
    const formattedItems = items.map((item) => ({
      ...item,
      price: Number(item.price.replace("$", "")), // Remove the dollar sign and convert to a number
    }));
    // Reduce function to sum the total price
    const totalPrice = formattedItems.reduce(
      (total, item) => total + item.amount * item.price,
      0
    );
    return Intl.NumberFormat("en-nz", {
      style: "currency",
      currency: "nzd",
    }).format(totalPrice);
  }
);

export const selectTotalQuantity = createSelector(
  (state) => state.cart.items,
  (items) => {
    return items.reduce((total, item) => total + item.amount, 0);
  }
);
