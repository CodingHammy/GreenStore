"use client";
import React, { Fragment, useEffect } from "react";
import Image from "next/image";

import { useState } from "react";

import classes from "./CheckoutPage_items.module.css";

import { deleteAllItem } from "@/redux/features/cartSlice";
import { useDispatch } from "react-redux";

const CheckoutPage_items = ({ cartItems, onUpdateItem }) => {
  const dispatch = useDispatch();
  const number = Number(cartItems.price.replace(/[^0-9.-]+/g, ""));
  const [inputValue, setInputValue] = useState(0); // Initial value will be replaced with the amount of plants that had been added to cart

  useEffect(() => {
    setInputValue(cartItems.amount);
  }, []);

  // const handleInputChange = (event) => {
  //   // Update the state with the new input value
  //   setInputValue(event.target.value);
  // };

  const handleDeleteItem = () => {
    dispatch(
      deleteAllItem({
        name: cartItems.name,
      })
    );
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    onUpdateItem(
      { name: cartItems.name },
      { amount: parseInt(event.target.value) }
    );
    console.log(typeof event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.titles}>
        <div className={classes.catergory_title_quarter}>
          <button className={classes.button}>
            <Image
              className={classes.circle}
              src={"/cross.svg"}
              width={20}
              height={20}
              alt={"delete item button"}
              onClick={handleDeleteItem}
            />
          </button>
        </div>
        <div className={classes.catergory_title_threeQuarter}>
          <Image
            src={cartItems.image}
            style={{ objectFit: "contain" }}
            height={100}
            width={100}
            alt={`image of ${cartItems.title}`}
          />
        </div>
        <h6 className={classes.catergory_title_productName}>
          {cartItems.name}
        </h6>
        <h6 className={classes.catergory_title}>{cartItems.price}</h6>
        <div className={classes.catergory_title}>
          <form action="">
            <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              className={classes.input}
            />
          </form>
        </div>
        <h6 className={classes.catergory_title}>
          {Intl.NumberFormat("en-nz", {
            style: "currency",
            currency: "nzd",
          }).format(inputValue * number)}
        </h6>
      </div>
    </Fragment>
  );
};

export default CheckoutPage_items;
