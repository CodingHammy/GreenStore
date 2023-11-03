"use client";
import React, { Fragment, useEffect } from "react";
import Image from "next/image";

import { useState } from "react";

import classes from "./CheckoutPage_items.module.css";

const CheckoutPage_items = ({ cartItems }) => {
  const number = Number(cartItems.price.replace(/[^0-9.-]+/g, ""));

  const [inputValue, setInputValue] = useState("0"); // Initial value will be replaced with the amount of plants that had been added to cart

  //need to connect the slice with the input value
  useEffect(() => {
    setInputValue(cartItems.amount);
  }, []);

  const handleInputChange = (event) => {
    // Update the state with the new input value
    setInputValue(event.target.value);
  };

  console.log(cartItems);

  return (
    <Fragment>
      <tr>
        <td>
          <Image
            className={classes.circle}
            src={"/cross.svg"}
            width={20}
            height={20}
            alt={"delete item button"}
          />
          <Image
            src={cartItems.image}
            style={{ objectFit: "cover" }}
            height={70}
            width={70}
            alt={`image of ${cartItems.title}`}
          />
        </td>
        <td>{cartItems.name}</td>
        <td>{cartItems.price}</td>
        <td>
          <form action="">
            <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
            />
          </form>
        </td>
        <td>
          {Intl.NumberFormat("en-nz", {
            style: "currency",
            currency: "nzd",
          }).format(inputValue * number)}
        </td>
      </tr>
    </Fragment>
  );
};

export default CheckoutPage_items;
