"use client";
import React from "react";

import classes from "./ViewCart_AllItems.module.css";
import ViewCart_item from "./ViewCart_item/ViewCart_item";

import { useSelector } from "react-redux";
import { selectTotalPrice } from "@/redux/features/selectTotals";

const ViewCart_AllItems = () => {
  const grandTotal = useSelector(selectTotalPrice);
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <section className={classes.container}>
      <h2 className={classes.heading}>Your order</h2>
      <div className={classes.border}>
        <div className={classes.titles}>
          <p>Product</p>
          <p>Subtotal</p>
        </div>
        {cartItems.map((item) => (
          <ViewCart_item item={item} key={item.id} />
        ))}
        <div className={classes.subtotal}>
          <p>Subtotal</p>
          <p>{grandTotal}</p>
        </div>
        <div className={classes.total}>
          <p>Total</p>
          <p>{grandTotal}</p>
        </div>
      </div>
    </section>
  );
};

export default ViewCart_AllItems;
