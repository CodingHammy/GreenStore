"use client";
import React from "react";

import classes from "./page.module.css";

import CheckoutPage_items from "@/components/CheckoutPageComponents/CheckoutPage_items";

import { useSelector } from "react-redux";

const page = () => {
  const cartItems = useSelector((state) => state.cart.items);
  // const cartItems = useSelector((state) => state.cart.items);

  console.log(cartItems);

  return (
    <main className={classes.wrapper}>
      <section className={classes.container}>
        <h3>cart</h3>
        <table>
          <tr>
            <th>{null}</th>
            <th>Product name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sub Total</th>
          </tr>

          {cartItems.map(
            (item) => (item = <CheckoutPage_items cartItems={item} />)
          )}
        </table>
      </section>
      ;
    </main>
  );
};

export default page;
