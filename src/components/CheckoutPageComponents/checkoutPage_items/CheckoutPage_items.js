"use client";
import React, { Fragment } from "react";
import Image from "next/image";

import classes from "./CheckoutPage_items.module.css";

import { useDispatch } from "react-redux";
import { addItem, removeItem } from "@/redux/features/cartSlice";

const CheckoutPage_items = ({ cartItems, handleDeleteItem }) => {
  const dispatch = useDispatch();
  const number = Number(cartItems.price.replace(/[^0-9.-]+/g, ""));

  const onDeleteItemClick = () => {
    handleDeleteItem(cartItems.name); // Pass both name and formRef to the parent
  };

  const handleAddItem = () => {
    dispatch(
      addItem({
        name: cartItems.name,
        amount: 1,
      })
    );
  };
  const handleRemoveItem = () => {
    dispatch(
      removeItem({
        name: cartItems.name,
        amount: 1,
      })
    );
  };

  return (
    <Fragment>
      <div className={classes.titles}>
        <div className={classes.catergory_title_quarter}>
          <button className={classes.button} onClick={onDeleteItemClick}>
            <Image
              className={classes.circle}
              src={"/cross.svg"}
              width={20}
              height={20}
              alt={"delete all of an item button"}
            />
          </button>
        </div>
        <div className={classes.catergory_title_threeQuarter}>
          <Image
            src={cartItems.image}
            style={{ objectFit: "contain" }}
            height={100}
            width={100}
            alt={`image of ${cartItems.name}`}
          />
        </div>
        <h6 className={classes.catergory_title_productName}>
          {cartItems.name}
        </h6>
        <h6 className={classes.catergory_title}>{cartItems.price}</h6>
        <div className={`${classes.catergory_title} ${classes.amountSection}`}>
          <button className={classes.button} onClick={handleRemoveItem}>
            <Image
              className={classes.circle}
              src={"/minus.svg"}
              width={18}
              height={18}
              alt={"add item button"}
            />
          </button>
          {cartItems.amount}
          <button className={classes.button} onClick={handleAddItem}>
            <Image
              className={classes.circle}
              src={"/plus.svg"}
              width={18}
              height={18}
              alt={"remove item button"}
            />
          </button>
        </div>
        <h6 className={classes.catergory_title}>
          {Intl.NumberFormat("en-nz", {
            style: "currency",
            currency: "nzd",
          }).format(cartItems.amount * number)}
        </h6>
      </div>
    </Fragment>
  );
};

export default CheckoutPage_items;
