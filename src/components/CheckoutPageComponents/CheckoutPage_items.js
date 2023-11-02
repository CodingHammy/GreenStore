"use client";
import React, { Fragment } from "react";
import Image from "next/image";

import { useState } from "react";

import classes from "./CheckoutPage_items.module.css";

const CheckoutPage_items = ({ PLANT_DATA }) => {
  const number = Number(PLANT_DATA.price.replace(/[^0-9.-]+/g, ""));

  const [inputValue, setInputValue] = useState("0"); // Initial value will be replaced with the amount of plants that had been added to cart

  const handleInputChange = (event) => {
    // Update the state with the new input value
    setInputValue(event.target.value);
  };

  return (
    <Fragment>
      <td>
        <Image
          className={classes.circle}
          src={"/cross.svg"}
          width={20}
          height={20}
          alt={"delete item button"}
        />
        <Image
          src={PLANT_DATA.src[0]}
          style={{ objectFit: "cover" }}
          height={70}
          width={70}
          alt={`image of ${PLANT_DATA.title}`}
        />
      </td>
      <td>{PLANT_DATA.title}</td>
      <td>{PLANT_DATA.price}</td>
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
    </Fragment>
  );
};

export default CheckoutPage_items;
