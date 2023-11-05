"use client";
import React, { useEffect } from "react";

import classes from "./page.module.css";

import CartTotal from "@/components/CheckoutPageComponents/CartTotal";
import CheckoutPage_items from "@/components/CheckoutPageComponents/CheckoutPage_items";
import Button from "@/components/button/Button";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateCart } from "@/redux/features/cartSlice";

const page = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleUpdateCart = (name, amount) => {
    // Dispatch the updated data (name and value) to Redux store
    dispatch(updateCart(name, amount));
  };

  return (
    <main className={classes.wrapper}>
      <section className={classes.container}>
        <h3 className={classes.mainTitle}>Cart</h3>
        <div className={classes.form}>
          <div className={classes.titles}>
            <h6 className={classes.catergory_title_empty}>{null}</h6>
            <h6 className={classes.catergory_title_productName}>
              Product name
            </h6>
            <h6 className={classes.catergory_title}>Price</h6>
            <h6 className={classes.catergory_title}>Quantity</h6>
            <h6 className={classes.catergory_title}>Sub Total</h6>
          </div>
          {cartItems.map((item) => (
            <CheckoutPage_items
              cartItems={item}
              onUpdateItem={handleUpdateCart}
            />
          ))}
          <div className={classes.updateCart_container}>
            <Button
              value="Update Cart"
              height="45px"
              width="160px"
              // onClick={handleUpdateCart}
            />
          </div>
        </div>
        <CartTotal />
      </section>
    </main>
  );
};

export default page;
