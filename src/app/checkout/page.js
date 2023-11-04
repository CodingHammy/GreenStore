"use client";
import React from "react";

import classes from "./page.module.css";

import CheckoutPage_items from "@/components/CheckoutPageComponents/CheckoutPage_items";

import { useSelector } from "react-redux";

const page = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <main className={classes.wrapper}>
      <section className={classes.container}>
        <h3 className={classes.mainTitle}>Cart</h3>
        <div className={classes.form}>
          <div className={classes.titles}>
            <h6 className={classes.catergory_title_quarter}>{null}</h6>
            <h6 className={classes.catergory_title_threeQuarter}>{null}</h6>
            <h6 className={classes.catergory_title_productName}>
              Product name
            </h6>
            <h6 className={classes.catergory_title}>Price</h6>
            <h6 className={classes.catergory_title}>Quantity</h6>
            <h6 className={classes.catergory_title}>Sub Total</h6>
          </div>

          {cartItems.map((item) => (
            <CheckoutPage_items cartItems={item} />
          ))}
          {/* {PLANT_DATA.slice(0, 5).map(
            (item) => (item = <CheckoutPage_items cartItems={item} />)
          )} */}
        </div>
      </section>
      ;
    </main>
  );
};

export default page;
