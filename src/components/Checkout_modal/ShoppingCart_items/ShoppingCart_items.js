import React from "react";
import Image from "next/image";
import classes from "./ShoppingCart_items.module.css";

const ShoppingCart_items = ({ cartItem }) => {
  return (
    <main className={classes.container}>
      <div className={classes.left}>
        <Image
          style={{ objectFit: "cover" }}
          src={cartItem.image}
          height={70}
          width={70}
          alt={`image of ${cartItem.title}`}
        />
        <div className={classes.col}>
          <h3 className={classes.title}>{cartItem.name}</h3>
          <p className={classes.price}>
            {cartItem.amount} x {cartItem.price}
          </p>
        </div>
      </div>
      <button className={classes.button}>
        <Image
          className={classes.circle}
          src={"/cross.svg"}
          width={20}
          height={20}
          alt={"delete item button"}
        />
      </button>
    </main>
  );
};

export default ShoppingCart_items;
